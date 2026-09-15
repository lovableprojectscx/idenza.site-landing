/**
 * IDENZA — Bio Link Configuration & Analytics
 * Ruta: /bio
 *
 * Este archivo centraliza los identificadores de analítica, enlaces oficiales
 * de contacto y redes, funciones de seguimiento y persistencia de UTMs.
 * Edita fácilmente los IDs de seguimiento en `ANALYTICS_CONFIG`.
 */

export const BIO_CONFIG = {
  // Identificadores de analítica (editables)
  analytics: {
    // Coloca aquí tu ID de Google Analytics 4 (ej. "G-XXXXXXXXXX")
    googleAnalyticsId: "",
    // Coloca aquí tu ID de Google Tag Manager (ej. "GTM-XXXXXXX")
    googleTagManagerId: "",
    // Coloca aquí tu ID de Meta Pixel / Facebook (ej. "123456789012345")
    metaPixelId: "",
    // Modo de depuración (imprime eventos en la consola del navegador)
    debug: false,
  },

  // Contacto oficial
  contact: {
    whatsappNumber: "51921585977",
    whatsappDisplay: "+51 921 585 977",
    ownerName: "Jack Luján",
    city: "Ayacucho · Perú",
    domain: "idenza.site",
  },

  // Enlaces de redes sociales oficiales
  socials: {
    instagram: "https://www.instagram.com/jacklujanm",
    facebook: "https://www.facebook.com/idenza.site",
    tiktok: "https://www.tiktok.com/@idenza.site",
  },

  // Enlaces de los botones principales
  buttons: {
    web: "https://idenza.site/?utm_source=biolink&utm_medium=boton&utm_campaign=web",
    portafolio:
      "https://idenza.site/portafolio?utm_source=biolink&utm_medium=boton&utm_campaign=portafolio",
    whatsapp: "https://wa.me/51921585977?text=Hola%20Jack,%20vengo%20de%20sus%20redes",
  },
};

// Types for tracking
export interface BioEventPayload {
  event: string;
  category?: string;
  action?: string;
  label?: string;
  value?: string | number;
  metadata?: Record<string, unknown>;
  timestamp?: string;
  utms?: Record<string, string>;
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (command: string, ...args: unknown[]) => void;
    fbq?: (command: string, eventName: string, params?: Record<string, unknown>) => void;
  }
}

const UTM_STORAGE_KEY = "idza_bio_session_utms";

/**
 * Extrae y guarda los parámetros UTM de la URL en sessionStorage durante toda la sesión
 */
export function captureAndStoreUtms(searchString?: string): Record<string, string> {
  const foundUtms: Record<string, string> = {};

  try {
    const rawSearch =
      searchString !== undefined
        ? searchString
        : typeof window !== "undefined"
          ? window.location.search
          : "";

    if (rawSearch) {
      const params = new URLSearchParams(rawSearch);
      const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

      utmKeys.forEach((key) => {
        const val = params.get(key);
        if (val) {
          foundUtms[key] = val;
        }
      });
    }

    if (Object.keys(foundUtms).length > 0) {
      if (typeof window !== "undefined" && window.sessionStorage) {
        window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(foundUtms));
      }
      return foundUtms;
    }

    if (typeof window !== "undefined" && window.sessionStorage) {
      const saved = window.sessionStorage.getItem(UTM_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    }
  } catch {
    // Manejo seguro en entornos restringidos de sessionStorage
  }

  return foundUtms;
}

/**
 * Obtiene los UTM guardados en la sesión actual
 */
export function getStoredUtms(): Record<string, string> {
  if (typeof window === "undefined" || !window.sessionStorage) return {};
  try {
    const saved = window.sessionStorage.getItem(UTM_STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

/**
 * Disparador unificado de analítica para botones, redes y formularios
 */
export function trackBioEvent(eventName: string, params: Record<string, unknown> = {}) {
  const utms = getStoredUtms();
  const payload: BioEventPayload = {
    event: eventName,
    metadata: params,
    timestamp: new Date().toISOString(),
    utms,
  };

  if (typeof window !== "undefined") {
    // 1. Google Tag Manager / dataLayer
    if (window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...params,
        ...utms,
      });
    }

    // 2. Google Analytics 4 gtag
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, {
        ...params,
        ...utms,
      });
    }

    // 3. Meta Pixel (Facebook)
    if (typeof window.fbq === "function") {
      window.fbq("trackCustom", eventName, {
        ...params,
        ...utms,
      });
    }

    // 4. Debugging en consola para desarrollo
    if (BIO_CONFIG.analytics.debug) {
      console.log(`[IDENZA Analytics] ${eventName}:`, payload);
    }
  }

  return payload;
}

/** Evento al hacer clic en un botón principal */
export function trackButtonClick(buttonName: string, destinationUrl: string) {
  return trackBioEvent("bio_button_click", {
    button_name: buttonName,
    destination_url: destinationUrl,
  });
}

/** Evento al hacer clic en una red social */
export function trackSocialClick(
  platform: "instagram" | "facebook" | "tiktok",
  destinationUrl: string,
) {
  return trackBioEvent("bio_social_click", {
    platform,
    destination_url: destinationUrl,
  });
}

/** Evento al enviar el formulario con datos válidos */
export function trackFormSubmit(businessName: string, whatsapp: string) {
  return trackBioEvent("bio_form_submit", {
    business_name: businessName,
    whatsapp_digits: cleanPhoneNumber(whatsapp),
  });
}

/**
 * Limpia cualquier caracter no numérico del número de WhatsApp.
 * Si el usuario introduce "+51 921 585 977" o "51921585977", normaliza a 9 dígitos locales.
 */
export function cleanPhoneNumber(raw: string): string {
  if (!raw) return "";
  let digits = raw.replace(/\D/g, "");
  // Si empieza con 51 y tiene 11 dígitos, remover el código de país para evaluar los 9 dígitos
  if (digits.length === 11 && digits.startsWith("51")) {
    digits = digits.slice(2);
  }
  return digits;
}

/**
 * Validador para WhatsApp (exactamente 9 dígitos en Perú)
 */
export function validateWhatsAppNumber(phone: string): { valid: boolean; error?: string } {
  const digits = cleanPhoneNumber(phone);
  if (!digits) {
    return { valid: false, error: "Ingresa tu número de WhatsApp" };
  }
  if (digits.length !== 9) {
    return { valid: false, error: "El WhatsApp debe tener 9 dígitos" };
  }
  return { valid: true };
}

/**
 * Validador para Nombre de negocio
 */
export function validateBusinessName(name: string): { valid: boolean; error?: string } {
  const trimmed = name.trim();
  if (!trimmed) {
    return { valid: false, error: "Ingresa el nombre de tu negocio" };
  }
  if (trimmed.length < 2) {
    return { valid: false, error: "Ingresa un nombre válido" };
  }
  return { valid: true };
}

/**
 * Validador para casilla de consentimiento
 */
export function validateConsent(consent: boolean): { valid: boolean; error?: string } {
  if (!consent) {
    return { valid: false, error: "Debes aceptar ser contactado por WhatsApp" };
  }
  return { valid: true };
}

/**
 * Construye la URL de redirección a WhatsApp con el mensaje exacto requerido:
 * https://wa.me/51921585977?text=Hola%20Jack,%20soy%20de%20[NEGOCIO]%20y%20quiero%20más%20información.%20Mi%20WhatsApp%20es%20[NUMERO]
 */
export function buildBioWhatsAppUrl(businessName: string, whatsappNumber: string): string {
  const cleanNum = cleanPhoneNumber(whatsappNumber);
  const text = `Hola Jack, soy de ${businessName.trim()} y quiero más información. Mi WhatsApp es ${cleanNum}`;
  return `https://wa.me/${BIO_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
