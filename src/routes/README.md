# Enrutamiento de IDENZA (`src/routes/`)

Este directorio utiliza el sistema de **enrutamiento basado en archivos de TanStack Start**. Cada archivo `.tsx` genera automáticamente una ruta en la aplicación y sincroniza `src/routeTree.gen.ts`.

> [!IMPORTANT]
> - `src/routes/__root.tsx` es el cascarón raíz (*Root Shell*) que envuelve toda la aplicación. Preserva siempre `<Outlet />`.
> - `src/routeTree.gen.ts` se genera automáticamente al compilar con Vite. No debe editarse manualmente.

---

## Rutas Activas del Proyecto

| Archivo | Ruta URL | Descripción |
| --- | --- | --- |
| `index.tsx` | `/` | Página principal de IDENZA (Método, Planes, Portafolio, FAQ, Contacto) |
| `bio.tsx` | `/bio` | **Bio Link oficial** para Instagram, Facebook y TikTok (Diseño suizo minimalista, 390px mobile-first) |
| `proyectos.index.tsx` | `/proyectos` | Catálogo de proyectos y sistemas web entregados |
| `proyectos.$id.tsx` | `/proyectos/:id` | Caso de estudio detallado por proyecto |
| `portafolio.tsx` | `/portafolio` | Redirección oficial hacia `/proyectos` preservando parámetros UTM |
| `contacto.tsx` | `/contacto` | Página de contacto directo por WhatsApp y correo |
| `diagnostico.tsx` | `/diagnostico` | Diagnóstico interactivo para negocios |
| `fundador.tsx` | `/fundador` | Perfil y visión de Jack Luján, fundador de IDENZA |
| `florerias.tsx` | `/florerias` | Landing comercial orientada a florerías |
| `diseno-web-ayacucho.tsx` | `/diseno-web-ayacucho` | Landing geo-optimizada para la región de Ayacucho |
| `ayacucho.tsx` | `/ayacucho` | Redirección hacia `/diseno-web-ayacucho` |
| `blog.index.tsx` | `/blog` | Índice de artículos del blog |
| `blog.por-que-mi-pagina-web-no-vende.tsx` | `/blog/por-que-mi-pagina-web-no-vende` | Artículo de conversión web |
| `politica-de-privacidad.tsx` | `/politica-de-privacidad` | Política de privacidad y tratamiento de datos |

---

## Reglas de Aislamiento de Rutas

- En la ruta `/bio`, el componente `LeadCapturePopup` y el botón flotante verde de WhatsApp se desactivan de forma condicionada en `__root.tsx` para preservar el minimalismo suizo.
- Toda redirección (como `/portafolio` o `/ayacucho`) debe propagar los parámetros de búsqueda (`search: (prev) => ({ ...prev, ...search })`) para mantener la trazabilidad de campañas UTM.
