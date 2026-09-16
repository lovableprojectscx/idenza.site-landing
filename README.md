# IDENZA · Arquitectura y Documentación Técnica

Sitio web oficial y plataforma de conversión digital de **IDENZA** ([idenza.site](https://idenza.site)). Consultoría de crecimiento digital en Ayacucho y todo el Perú.

Desarrollado sobre **TanStack Start**, **React 19**, **Nitro (preset Vercel)**, **Vite**, **Tailwind CSS v4** y **Vitest**.

---

## 1. Stack Tecnológico

| Capa | Tecnología | Función |
| --- | --- | --- |
| **Framework Fullstack** | [TanStack Start](https://tanstack.com/start) | Enrutamiento basado en archivos, SSR y renderizado híbrido |
| **Librería UI** | [React 19](https://react.dev/) | Componentes declarativos y estado reactivo |
| **Servidor / Motor SSR** | [Nitro](https://nitro.unjs.io/) (preset `vercel`) | Generación de Serverless Functions y endpoints optimizados para Vercel |
| **Bundler & Build Tool** | [Vite](https://vitejs.dev/) | HMR instantáneo y empaquetado de producción con hashing inmutable |
| **Estilos & Diseño** | [Tailwind CSS v4](https://tailwindcss.com/) | Sistema de diseño tokenizado con soporte para variables CSS nativas |
| **Iconografía** | [Lucide React](https://lucide.dev/) | Iconografía SVG vectorial minimalista |
| **Testing** | [Vitest](https://vitest.dev/) | Suite de pruebas unitarias y de integración |
| **Despliegue & Hosting** | [Vercel](https://vercel.com/) | Edge Network global con redirecciones y cabeceras de caché |

---

## 2. Mapa de Rutas del Proyecto

Las rutas se definen mediante el sistema file-based routing de TanStack Start en `src/routes/`:

| Ruta | Archivo | Descripción |
| --- | --- | --- |
| `/` | `src/routes/index.tsx` | Página principal de IDENZA (Método, Planes, Casos, FAQ, Contacto) |
| `/bio` | `src/routes/bio.tsx` | **Bio Link oficial** para Instagram, TikTok y Facebook (Diseño suizo minimalista) |
| `/proyectos` | `src/routes/proyectos.index.tsx` | Portafolio interactivo de clientes y sistemas web desarrollados |
| `/proyectos/$id` | `src/routes/proyectos.$id.tsx` | Caso de estudio detallado por proyecto |
| `/portafolio` | `src/routes/portafolio.tsx` | Redirección oficial hacia `/proyectos` preservando parámetros UTM |
| `/contacto` | `src/routes/contacto.tsx` | Formulario de contacto directo e integración con correo/WhatsApp |
| `/diagnostico` | `src/routes/diagnostico.tsx` | Diagnóstico de conversión para negocios |
| `/fundador` | `src/routes/fundador.tsx` | Perfil y visión de Jack Luján, fundador de IDENZA |
| `/florerias` | `src/routes/florerias.tsx` | Landing especializada para el sector de florerías |
| `/diseno-web-ayacucho` | `src/routes/diseno-web-ayacucho.tsx` | Landing geo-optimizada para la región de Ayacucho |
| `/ayacucho` | `src/routes/ayacucho.tsx` | Redirección hacia `/diseno-web-ayacucho` |
| `/blog` | `src/routes/blog.index.tsx` | Artículos y guías de crecimiento y ventas web |
| `/politica-de-privacidad` | `src/routes/politica-de-privacidad.tsx` | Política de privacidad y tratamiento de datos |

---

## 3. Arquitectura del Bio Link (`/bio`)

La ruta `/bio` fue diseñada específicamente para el 95% de tráfico proveniente de celulares (390px mobile-first) a través de biografías de Instagram, Facebook y TikTok.

### Principios de Diseño Suizo
- **Paleta cromática:**
  - Fondo: Deep ink navy `#0E1420`
  - Textos: Bone white `#F4F2ED`
  - Acento único: Warm amber `#E2A63D`
- **Tipografía:** `Space Grotesk` para titulares, `Inter` para cuerpo de texto y etiquetas.
- **Métrica estricta:** Todos los márgenes, rellenos y separaciones son múltiplos exactos de 4px (`pt-12`, `mt-10`, `mt-8`, `my-9`, `space-y-3`).
- **Bordes:** `border-radius: 2px` (`rounded-[2px]`) en botones y campos de texto.
- **El único gesto visual:** Retícula geométrica SVG de 1px al 4% de opacidad (`#F4F2ED` al 4%) anclada en la esquina superior derecha y cortada por el borde del viewport.
- **Regla de oro:** Cero degradados, cero glassmorphism, cero resplandores/glow y cero animaciones de entrada.

### Estructura de Secciones
1. **Cabecera:** Logo en bone white (132px), `h1` *"Sistemas web que venden por tu negocio"* y subtítulo *"AYACUCHO · PERÚ"*.
2. **Botones de acción (56px):**
   - *Nuestra web* (Ámbar sólido con contenido navy).
   - *Portafolio* (Borde 1px ámbar, texto bone white, redirige a `/proyectos`).
   - *Escríbeme por WhatsApp* (Borde 1px bone white al 20%).
   - *Microinteracción:* Desplazamiento exclusivo de la flecha diagonal 3px hacia arriba y 3px a la derecha en 180ms ease-out.
3. **Redes Sociales:** Instagram, Facebook y TikTok (SVG con trazo de 1.5px igual a Lucide), con área táctil mínima accesible de 48px y hover a ámbar en 180ms.
4. **Separador:** Línea horizontal de 1px en bone white al 10%.
5. **Formulario "¿Te escribo yo?":**
   - Validación estricta de 9 dígitos para números peruanos de WhatsApp.
   - Casilla de consentimiento obligatoria.
   - Mensajes de error en Inter Regular 12px ámbar colocados debajo del campo con cambio de borde a ámbar (sin ventanas emergentes).
   - Redirección nativa a WhatsApp con texto prellenado dinámico.
6. **Pie:** *"idenza.site · Jack Luján"* y enlace a *"Política de privacidad"*.

---

## 4. Arquitectura de Caché y Entrega de Contenidos

Para resolver el problema donde los navegadores retenían versiones cacheadas del sitio e impedían ver cambios recientes hasta borrar la caché manualmente, el sistema implementa un **blindaje en 4 niveles**:

### 1. Borde CDN en Vercel (`vercel.json`)
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
- **Documentos HTML:** Tienen `no-store, must-revalidate`, forzando a que cualquier visita siempre solicite el HTML fresco al servidor.
- **Assets versionados con hash:** Tienen `max-age=31536000, immutable`. Al cambiar el código, el HTML solicita un nuevo hash, logrando actualización instantánea sin perder velocidad de carga.

### 2. Motor Nitro (`vite.config.ts`)
Configuración de `routeRules` para que el compilador del servidor genere las cabeceras HTTP de Vercel en `.vercel/output/config.json`:
```ts
nitro({
  preset: "vercel",
  routeRules: {
    "/assets/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } },
    "/**": { headers: { "cache-control": "no-cache, no-store, must-revalidate", pragma: "no-cache", expires: "0" } },
  },
})
```

### 3. Servidor SSR (`src/server.ts`)
Intercepta cualquier respuesta con cabecera `text/html` e inyecta `no-cache, no-store, must-revalidate` para evitar almacenamiento en proxies de proveedores de internet (ISPs móviles).

### 4. Enrutador del Cliente y QueryClient (`src/router.tsx`)
- `defaultStaleTime: 0`: Invalida inmediatamente cualquier dato obsoleto en la memoria de navegación del cliente.
- `queries: { staleTime: 0, refetchOnWindowFocus: true }`: Revalida datos automáticamente cuando el usuario regresa a la pestaña.

---

## 5. Medición, UTMs y Analítica (`src/config/bio.ts`)

El archivo `src/config/bio.ts` centraliza toda la configuración editable de métricas y contactos:

- **Identificadores editables:**
  - `googleAnalyticsId` (GA4: `G-XXXXXXXXXX`)
  - `googleTagManagerId` (GTM: `GTM-XXXXXXX`)
  - `metaPixelId` (Pixel de Facebook)
  - `debug` (Modo consola para desarrollo)
- **Persistencia de UTMs:**
  - La función `captureAndStoreUtms()` captura automáticamente `utm_source`, `utm_medium`, `utm_campaign`, `utm_term` y `utm_content` desde la URL al aterrizar y los almacena en `sessionStorage` para conservarlos durante toda la sesión.
- **Despacho de eventos:**
  - `trackButtonClick(name, url)`
  - `trackSocialClick(platform, url)`
  - `trackFormSubmit(businessName, whatsapp)`
  - Compatible con `window.dataLayer`, `window.gtag` y `window.fbq`.

---

## 6. Aislamiento de Componentes en Landing Pages

Para proteger la estética minimalista suiza de `/bio` y evitar la intrusión de elementos comerciales no deseados:
1. **Desmontaje en `src/routes/__root.tsx`:**
   Tanto `<LeadCapturePopup />` como el botón flotante verde de WhatsApp se condicionan a `!isBio`.
2. **Detección robusta en `src/components/LeadCapturePopup.tsx`:**
   Si la ruta o URL contiene `/bio`, el componente suspende inmediatamente sus temporizadores (4s), detectores de scroll (25%) y detectores de salida (exit-intent).
3. **Limpieza activa en `src/routes/bio.tsx`:**
   Al montarse la página `/bio`, un hook limpia preventivamente cualquier nodo flotante residual o sesión en memoria.

---

## 7. Pruebas Automatizadas y Validación

El proyecto cuenta con pruebas unitarias implementadas con **Vitest**:

```bash
# Ejecutar todas las pruebas unitarias
npm run test

# Compilación de producción
npm run build

# Validar formato y lint
npm run lint
```

### Cobertura de pruebas (`src/lib/bio.test.ts`):
- Validación de 9 dígitos exactos en números de WhatsApp (normalización de prefijos `+51` y espacios).
- Validación de nombre de negocio obligatorio.
- Validación de casilla de consentimiento.
- Construcción y codificación de URLs dinámicas para WhatsApp.
- Extracción y persistencia de parámetros UTM en sesión.
- Generación de payloads analíticos.
