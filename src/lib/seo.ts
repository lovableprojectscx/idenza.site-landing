/**
 * Datos SEO compartidos: host canónico único y helpers de JSON-LD.
 * Solo datos que ya están visibles en la web (sin reseñas, puntajes ni cifras inventadas).
 */

export const SITE_URL = "https://www.idenza.site";
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const LOGO_URL = `${SITE_URL}/brand/cropped_logo_tinta_amber.png`;

/** Convierte un objeto schema.org en una entrada `scripts` de TanStack head(). */
export function jsonLdScript(data: Record<string, unknown>) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(data),
  };
}

/** Organización (todo el sitio). */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": ORG_ID,
  name: "IDENZA",
  url: `${SITE_URL}/`,
  logo: LOGO_URL,
  image: `${SITE_URL}/og-home.jpg`,
  description:
    "Diseño y desarrollo web para negocios en Perú. Creamos tu página web, catálogo online y sistema de pedidos a WhatsApp. Verificamos la demanda antes de construir.",
  telephone: "+51921585977",
  email: "jack@idenza.site",
  areaServed: {
    "@type": "Country",
    name: "Perú",
  },
  founder: {
    "@type": "Person",
    name: "Jack Lujan",
    jobTitle: "Fundador",
    url: `${SITE_URL}/fundador`,
  },
  sameAs: [
    "https://www.facebook.com/idenza.site",
    "https://www.tiktok.com/@idenza.site",
    "https://www.instagram.com/jacklujanm",
  ],
};

/** Sitio web (todo el sitio). */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: "IDENZA",
  inLanguage: "es-PE",
  publisher: { "@id": ORG_ID },
};

/** BreadcrumbList: Inicio > ...items. `path` empieza con "/". */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  const all = [{ name: "Inicio", path: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
