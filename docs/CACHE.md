# Guía de Arquitectura de Caché y Entrega de Contenidos

Este documento explica en detalle el funcionamiento del sistema de caché de **IDENZA** ([idenza.site](https://idenza.site)), diseñado para garantizar que **todo cambio en el código o contenido se refleje de manera inmediata en todos los dispositivos de los usuarios**, manteniendo a la vez la máxima velocidad en PageSpeed (100/100).

---

## 1. El Problema Original: Caché Fantasma en Navegadores

En aplicaciones web construidas con herramientas como Vite, Nitro y Vercel:

1. **Los recursos estáticos** (JavaScript, CSS, imágenes dentro de `/assets/`) se empaquetan con un *hash* de contenido en su nombre de archivo (por ejemplo, `index-hYsFBUDB.js`).
2. Estos archivos se configuran con:
   ```http
   Cache-Control: public, max-age=31536000, immutable
   ```
   Esto le indica al navegador que el archivo nunca cambiará durante 1 año, por lo que lo guarda en su memoria y disco local.
3. **La vulnerabilidad:** Si el documento HTML inicial (la respuesta de `/`, `/bio`, etc.) no indica explícitamente `no-store`, navegadores como Chrome, Edge o Safari pueden almacenar el documento HTML en su *Disk Cache* o *Back-Forward Cache (bfcache)*.
4. **La consecuencia:** Al navegar de nuevo al sitio tras un despliegue, el navegador utilizaba su HTML guardado en disco. Dicho HTML seguía solicitando las rutas de los scripts antiguos (que además estaban en caché inmutable), impidiendo ver los nuevos cambios hasta que el usuario vaciara la caché de su navegador manualmente.

---

## 2. La Solución: Blindaje en 4 Capas

Para eliminar este comportamiento sin sacrificar el rendimiento, se diseñó una estrategia en 4 capas complementarias:

```
[ Solicitud del Usuario ]
           │
           ▼
┌───────────────────────────────────────────────────────────┐
│ 1. Vercel Edge Network (vercel.json)                      │
│    - /assets/(.*) -> public, max-age=31536000, immutable  │
│    - /(.*)        -> no-cache, no-store, must-revalidate  │
└──────────────────────────┬────────────────────────────────┘
                           │
                           ▼
┌───────────────────────────────────────────────────────────┐
│ 2. Motor Nitro en Vite (vite.config.ts)                   │
│    - routeRules en preset vercel genera config.json       │
└──────────────────────────┬────────────────────────────────┘
                           │
                           ▼
┌───────────────────────────────────────────────────────────┐
│ 3. Servidor SSR (src/server.ts)                           │
│    - Inyecta no-cache en toda respuesta text/html         │
│    - Bloquea caché de proxies intermedios y redes móviles │
└──────────────────────────┬────────────────────────────────┘
                           │
                           ▼
┌───────────────────────────────────────────────────────────┐
│ 4. Enrutador del Cliente (src/router.tsx)                 │
│    - TanStack Router: defaultStaleTime: 0                 │
│    - React Query: staleTime: 0, refetchOnWindowFocus: true│
└───────────────────────────────────────────────────────────┘
```

---

## 3. Detalle de Implementación por Archivo

### Capa 1: `vercel.json`
Ubicado en la raíz del proyecto. Configura las reglas de cabeceras HTTP que aplica la red CDN global de Vercel antes de tocar la función serverless:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "no-cache, no-store, must-revalidate" },
        { "key": "Pragma", "value": "no-cache" },
        { "key": "Expires", "value": "0" }
      ]
    },
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

### Capa 2: `vite.config.ts`
El plugin de Nitro compila la salida para Vercel (`.vercel/output/config.json`). Definir `routeRules` asegura que Nitro escriba estas reglas durante el build de producción:

```ts
nitro({
  preset: "vercel",
  routeRules: {
    "/assets/**": {
      headers: { "cache-control": "public, max-age=31536000, immutable" },
    },
    "/**": {
      headers: {
        "cache-control": "no-cache, no-store, must-revalidate",
        pragma: "no-cache",
        expires: "0",
      },
    },
  },
})
```

### Capa 3: `src/server.ts`
Intercepta la respuesta del renderizado en el servidor (SSR). Si el contenido es `text/html`, se reconstruyen las cabeceras para forzar la revalidación:

```ts
const contentType = normalized.headers.get("content-type") ?? "";
if (contentType.includes("text/html")) {
  const headers = new Headers(normalized.headers);
  headers.set("cache-control", "no-cache, no-store, must-revalidate");
  headers.set("pragma", "no-cache");
  headers.set("expires", "0");
  return new Response(normalized.body, {
    status: normalized.status,
    statusText: normalized.statusText,
    headers,
  });
}
```

### Capa 4: `src/router.tsx`
Evita que la memoria interna de la aplicación de una sola página (SPA) retenga datos obsoletos en el cliente:

```ts
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      gcTime: 1000 * 60 * 5,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
    },
  },
});

const router = createRouter({
  routeTree,
  context: { queryClient },
  scrollRestoration: true,
  defaultPreloadStaleTime: 0,
  defaultStaleTime: 0,
});
```

---

## 4. Guía para Futuros Cambios y Despliegues

- **¿Qué pasa cuando publicas cambios de código?**
  1. Vite genera nuevos hashes para los archivos modificados (ejemplo: `bio-BXVYITb8.js`).
  2. Vercel despliega la nueva versión.
  3. Cualquier usuario que ingrese a la web recibe inmediatamente el nuevo HTML sin caché (`no-store`), el cual pide automáticamente los nuevos scripts con el nuevo hash.
  4. La actualización es 100% transparente para el usuario final sin requerir que borre su caché.

- **¿Qué pasa con los recursos estáticos públicos?**
  Archivos que no pasan por el pipeline de hashing de Vite (como `/og-home.jpg` o `/og-bio.jpg` dentro de `public/`) también reciben la cabecera `no-cache, no-store` si no están bajo `/assets/`. Si actualizas una imagen en `public/`, se recomienda cambiar su nombre o agregar un parámetro de versión (`/og-bio.jpg?v=2`) si se desea forzar la actualización en plataformas externas como WhatsApp o Facebook que guardan copias de previsualización en sus propios servidores.
