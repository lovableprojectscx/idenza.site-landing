/**
 * Google Analytics 4 (gtag.js). Corre en paralelo a cualquier tracker propio.
 * El ID de medición no es secreto.
 */

export const GA4_ID = "G-4WND3WKJW2";

/** Snippet de inicialización (se inyecta en el <head> desde __root.tsx). */
export const GA4_INIT_SNIPPET = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA4_ID}');`;

type GtagFn = (command: string, ...args: unknown[]) => void;

function gtag(): GtagFn | null {
  if (typeof window === "undefined") return null;
  const fn = (window as unknown as { gtag?: GtagFn }).gtag;
  return typeof fn === "function" ? fn : null;
}

/** Evento GA4 genérico. No envía datos personales (nombre, teléfono, mensaje). */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  const fn = gtag();
  if (!fn) return;
  fn("event", name, params);
}

/** click_whatsapp con el parámetro `ubicacion` (hero, footer, flotante, ...). */
export function trackWhatsAppClick(ubicacion: string) {
  trackEvent("click_whatsapp", { ubicacion });
}

/** generate_lead al enviar un formulario. `formulario`: "diagnostico" | "contacto". */
export function trackGenerateLead(formulario: string) {
  trackEvent("generate_lead", { formulario });
}

/**
 * Listener delegado: cualquier clic en un enlace a wa.me dispara click_whatsapp.
 * La ubicación sale del atributo data-ubicacion del enlace (o "sin_ubicacion").
 * Devuelve la función para quitar el listener.
 */
export function installWhatsAppClickTracking(): () => void {
  if (typeof document === "undefined") return () => {};
  const handler = (event: MouseEvent) => {
    const target = event.target as Element | null;
    const link = target?.closest?.('a[href*="wa.me/"]') as HTMLAnchorElement | null;
    if (!link) return;
    trackWhatsAppClick(link.dataset.ubicacion || "sin_ubicacion");
  };
  document.addEventListener("click", handler, { capture: true });
  return () => document.removeEventListener("click", handler, { capture: true });
}
