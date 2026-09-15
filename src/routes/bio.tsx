import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useId } from "react";
import { Globe, LayoutGrid, MessageCircle, ArrowUpRight, Instagram, Facebook } from "lucide-react";
import logoHueso from "@/assets/brand/cropped_logo_hueso_amber.webp";
import {
  BIO_CONFIG,
  captureAndStoreUtms,
  trackButtonClick,
  trackSocialClick,
  trackFormSubmit,
  validateWhatsAppNumber,
  validateBusinessName,
  validateConsent,
  buildBioWhatsAppUrl,
} from "@/config/bio";

export const Route = createFileRoute("/bio")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://idenza.site/bio" }],
    meta: [
      { title: "IDENZA · Sistemas web que venden" },
      {
        name: "description",
        content:
          "Sistemas web que venden por tu negocio. Consultoría de crecimiento digital y diseño web en Ayacucho y Perú. Escríbenos directo por WhatsApp.",
      },
      { property: "og:title", content: "IDENZA · Sistemas web que venden" },
      {
        property: "og:description",
        content:
          "Sistemas web que venden por tu negocio. Consultoría de crecimiento digital y diseño web en Ayacucho y Perú. Escríbenos directo por WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://idenza.site/bio" },
      { property: "og:site_name", content: "IDENZA" },
      { property: "og:locale", content: "es_PE" },
      { property: "og:image", content: "https://idenza.site/og-bio.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "IDENZA — Sistemas web que venden" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "IDENZA · Sistemas web que venden" },
      {
        name: "twitter:description",
        content:
          "Sistemas web que venden por tu negocio. Consultoría de crecimiento digital y diseño web en Ayacucho y Perú. Escríbenos directo por WhatsApp.",
      },
      { name: "twitter:image", content: "https://idenza.site/og-bio.jpg" },
      { name: "theme-color", content: "#0E1420" },
    ],
  }),
  component: BioPage,
});

/**
 * TikTok SVG Icon with stroke 1.5px matching Lucide icon styling
 */
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

function BioPage() {
  const businessId = useId();
  const whatsappId = useId();
  const consentId = useId();

  // Form State
  const [businessName, setBusinessName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [consent, setConsent] = useState(false);

  // Error States
  const [businessError, setBusinessError] = useState("");
  const [whatsappError, setWhatsappError] = useState("");
  const [consentError, setConsentError] = useState("");

  // Initialize and capture UTM parameters into session storage
  useEffect(() => {
    if (typeof window !== "undefined") {
      captureAndStoreUtms(window.location.search);
    }
  }, []);

  const handleButtonClick = (buttonName: string, destinationUrl: string) => {
    trackButtonClick(buttonName, destinationUrl);
  };

  const handleSocialClick = (
    platform: "instagram" | "facebook" | "tiktok",
    destinationUrl: string,
  ) => {
    trackSocialClick(platform, destinationUrl);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    setBusinessError("");
    setWhatsappError("");
    setConsentError("");

    // Validate
    const businessValidation = validateBusinessName(businessName);
    const whatsappValidation = validateWhatsAppNumber(whatsapp);
    const consentValidation = validateConsent(consent);

    let hasError = false;

    if (!businessValidation.valid) {
      setBusinessError(businessValidation.error || "Campo requerido");
      hasError = true;
    }

    if (!whatsappValidation.valid) {
      setWhatsappError(whatsappValidation.error || "Ingresa 9 dígitos válidos");
      hasError = true;
    }

    if (!consentValidation.valid) {
      setConsentError(consentValidation.error || "Debes aceptar ser contactado");
      hasError = true;
    }

    if (hasError) return;

    // Track submission event
    trackFormSubmit(businessName, whatsapp);

    // Build and open WhatsApp target URL
    const targetUrl = buildBioWhatsAppUrl(businessName, whatsapp);
    window.location.href = targetUrl;
  };

  return (
    <div className="relative min-h-screen bg-[#0E1420] text-[#F4F2ED] font-sans selection:bg-[#E2A63D] selection:text-[#0E1420] overflow-x-hidden antialiased">
      {/* EL ÚNICO GESTO:
          Retícula geométrica de líneas finas de 1px en bone white al 4% de opacidad,
          anclada a la esquina superior derecha y cortada por el borde.
          Sin movimiento, sin animación. Textura pura. */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-0 right-0 w-[240px] sm:w-[288px] h-[240px] sm:h-[288px] overflow-hidden"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 288 288"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <pattern id="swiss-grid-pattern" width="24" height="24" patternUnits="userSpaceOnUse">
              <path
                d="M 24 0 L 0 0 0 24"
                fill="none"
                stroke="#F4F2ED"
                strokeWidth="1"
                strokeOpacity="0.04"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#swiss-grid-pattern)" />
          {/* Subtle bounding axes anchored to the top-right corner */}
          <line
            x1="0"
            y1="288"
            x2="288"
            y2="288"
            stroke="#F4F2ED"
            strokeWidth="1"
            strokeOpacity="0.04"
          />
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="288"
            stroke="#F4F2ED"
            strokeWidth="1"
            strokeOpacity="0.04"
          />
        </svg>
      </div>

      {/* Main Container: Max 400px, centered, 24px lateral margin on mobile */}
      <main className="relative z-10 mx-auto w-full max-w-[400px] px-6">
        {/* 1 · CABECERA · 48px de aire superior */}
        <header className="pt-12 text-center">
          {/* Logo IDENZA en bone white, centrado, 132px de ancho */}
          <div className="flex justify-center items-center">
            <img
              src={logoHueso}
              alt="IDENZA"
              width={132}
              height={36}
              className="w-[132px] h-auto block select-none"
              loading="eager"
            />
          </div>

          {/* A 20px debajo, Inter Regular 15px, bone white al 70%, centrado, interlineado 1.4 */}
          {/* H1 real en HTML */}
          <h1 className="mt-5 text-[15px] leading-[1.4] font-normal text-[#F4F2ED]/70 text-center font-sans tracking-normal">
            Sistemas web que venden por tu negocio
          </h1>

          {/* A 6px debajo, Inter Regular 12px, bone white al 45%, letter-spacing +6%, mayúsculas */}
          <p className="mt-[6px] text-[12px] font-normal text-[#F4F2ED]/45 tracking-[0.06em] uppercase text-center font-sans">
            AYACUCHO · PERÚ
          </p>
        </header>

        {/* 2 · BOTONES · 40px de aire superior */}
        <section aria-label="Enlaces destacados" className="mt-10 space-y-3">
          {/* Botón 1 — fondo ámbar #E2A63D sólido, contenido en navy #0E1420 */}
          <a
            href={BIO_CONFIG.buttons.web}
            onClick={() => handleButtonClick("Nuestra web", BIO_CONFIG.buttons.web)}
            className="group relative flex h-14 w-full items-center justify-between px-5 bg-[#E2A63D] text-[#0E1420] rounded-[2px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E2A63D]/40"
          >
            <div className="flex items-center min-w-0">
              <Globe className="w-5 h-5 shrink-0" strokeWidth={1.5} />
              <span className="ml-4 font-sans font-medium text-[16px] truncate text-left">
                Nuestra web
              </span>
            </div>
            {/* Único movimiento: flecha diagonal se desplaza 3px arriba y 3px a la derecha en 180ms ease-out */}
            <ArrowUpRight
              className="w-4 h-4 shrink-0 transition-transform duration-[180ms] ease-out group-hover:translate-x-[3px] group-hover:-translate-y-[3px] group-active:translate-x-[3px] group-active:-translate-y-[3px] motion-reduce:transform-none"
              strokeWidth={1.5}
            />
          </a>

          {/* Botón 2 — fondo transparente, borde 1px ámbar, contenido bone white */}
          <a
            href={BIO_CONFIG.buttons.portafolio}
            onClick={() => handleButtonClick("Portafolio", BIO_CONFIG.buttons.portafolio)}
            className="group relative flex h-14 w-full items-center justify-between px-5 bg-transparent border border-[#E2A63D] text-[#F4F2ED] rounded-[2px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E2A63D]/40"
          >
            <div className="flex items-center min-w-0">
              <LayoutGrid className="w-5 h-5 shrink-0" strokeWidth={1.5} />
              <span className="ml-4 font-sans font-medium text-[16px] truncate text-left">
                Portafolio
              </span>
            </div>
            <ArrowUpRight
              className="w-4 h-4 shrink-0 transition-transform duration-[180ms] ease-out group-hover:translate-x-[3px] group-hover:-translate-y-[3px] group-active:translate-x-[3px] group-active:-translate-y-[3px] motion-reduce:transform-none"
              strokeWidth={1.5}
            />
          </a>

          {/* Botón 3 — fondo transparente, borde 1px bone white al 20%, contenido bone white */}
          <a
            href={BIO_CONFIG.buttons.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleButtonClick("Escríbeme por WhatsApp", BIO_CONFIG.buttons.whatsapp)}
            className="group relative flex h-14 w-full items-center justify-between px-5 bg-transparent border border-[#F4F2ED]/20 text-[#F4F2ED] rounded-[2px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E2A63D]/40"
          >
            <div className="flex items-center min-w-0">
              <MessageCircle className="w-5 h-5 shrink-0" strokeWidth={1.5} />
              <span className="ml-4 font-sans font-medium text-[16px] truncate text-left">
                Escríbeme por WhatsApp
              </span>
            </div>
            <ArrowUpRight
              className="w-4 h-4 shrink-0 transition-transform duration-[180ms] ease-out group-hover:translate-x-[3px] group-hover:-translate-y-[3px] group-active:translate-x-[3px] group-active:-translate-y-[3px] motion-reduce:transform-none"
              strokeWidth={1.5}
            />
          </a>
        </section>

        {/* 3 · REDES · 32px de aire superior */}
        <nav aria-label="Redes sociales" className="mt-8 flex justify-center items-center gap-7">
          {/* Instagram */}
          <a
            href={BIO_CONFIG.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de IDENZA"
            onClick={() => handleSocialClick("instagram", BIO_CONFIG.socials.instagram)}
            className="flex items-center justify-center min-w-[48px] min-h-[48px] text-[#F4F2ED]/55 hover:text-[#E2A63D] active:text-[#E2A63D] transition-colors duration-[180ms] focus:outline-none"
          >
            <Instagram className="w-5 h-5" strokeWidth={1.5} />
          </a>

          {/* Facebook */}
          <a
            href={BIO_CONFIG.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook de IDENZA"
            onClick={() => handleSocialClick("facebook", BIO_CONFIG.socials.facebook)}
            className="flex items-center justify-center min-w-[48px] min-h-[48px] text-[#F4F2ED]/55 hover:text-[#E2A63D] active:text-[#E2A63D] transition-colors duration-[180ms] focus:outline-none"
          >
            <Facebook className="w-5 h-5" strokeWidth={1.5} />
          </a>

          {/* TikTok */}
          <a
            href={BIO_CONFIG.socials.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok de IDENZA"
            onClick={() => handleSocialClick("tiktok", BIO_CONFIG.socials.tiktok)}
            className="flex items-center justify-center min-w-[48px] min-h-[48px] text-[#F4F2ED]/55 hover:text-[#E2A63D] active:text-[#E2A63D] transition-colors duration-[180ms] focus:outline-none"
          >
            <TikTokIcon className="w-5 h-5" />
          </a>
        </nav>

        {/* 4 · SEPARADOR · 36px de aire arriba y abajo */}
        <hr className="my-9 h-px w-full border-0 bg-[#F4F2ED]/10" />

        {/* 5 · FORMULARIO */}
        <section aria-labelledby="form-heading" className="w-full">
          {/* Encabezado en Space Grotesk Medium 20px, bone white, centrado */}
          <h2
            id="form-heading"
            className="font-display font-medium text-[20px] text-[#F4F2ED] text-center tracking-tight"
          >
            ¿Te escribo yo?
          </h2>

          {/* A 8px, Inter Regular 14px, bone white al 60%, centrado */}
          <p className="mt-2 font-sans font-normal text-[14px] text-[#F4F2ED]/60 text-center">
            Déjame tus datos y te contacto hoy mismo.
          </p>

          {/* A 24px, dos campos apilados con 12px de separación */}
          <form onSubmit={handleFormSubmit} noValidate className="mt-6">
            <div className="space-y-3">
              {/* Campo 1: Nombre de tu negocio */}
              <div>
                <label htmlFor={businessId} className="sr-only">
                  Nombre de tu negocio
                </label>
                <input
                  id={businessId}
                  type="text"
                  required
                  placeholder="Nombre de tu negocio"
                  value={businessName}
                  onChange={(e) => {
                    setBusinessName(e.target.value);
                    if (businessError) setBusinessError("");
                  }}
                  className={`h-[52px] w-full bg-transparent px-4 font-sans font-normal text-[15px] text-[#F4F2ED] placeholder:text-[#F4F2ED]/35 rounded-[2px] transition-colors duration-[180ms] focus:outline-none ${
                    businessError
                      ? "border border-[#E2A63D]"
                      : "border border-[#F4F2ED]/18 focus:border-[#E2A63D]"
                  }`}
                />
                {businessError && (
                  <p className="mt-1 font-sans font-normal text-[12px] text-[#E2A63D] text-left">
                    {businessError}
                  </p>
                )}
              </div>

              {/* Campo 2: Tu WhatsApp */}
              <div>
                <label htmlFor={whatsappId} className="sr-only">
                  Tu WhatsApp
                </label>
                <input
                  id={whatsappId}
                  type="tel"
                  required
                  inputMode="numeric"
                  placeholder="Tu WhatsApp"
                  value={whatsapp}
                  onChange={(e) => {
                    setWhatsapp(e.target.value);
                    if (whatsappError) setWhatsappError("");
                  }}
                  className={`h-[52px] w-full bg-transparent px-4 font-sans font-normal text-[15px] text-[#F4F2ED] placeholder:text-[#F4F2ED]/35 rounded-[2px] transition-colors duration-[180ms] focus:outline-none ${
                    whatsappError
                      ? "border border-[#E2A63D]"
                      : "border border-[#F4F2ED]/18 focus:border-[#E2A63D]"
                  }`}
                />
                {whatsappError && (
                  <p className="mt-1 font-sans font-normal text-[12px] text-[#E2A63D] text-left">
                    {whatsappError}
                  </p>
                )}
              </div>
            </div>

            {/* A 16px, casilla de consentimiento sin marcar por defecto */}
            <div className="mt-4">
              <label
                htmlFor={consentId}
                className="flex items-center gap-3 min-h-[48px] cursor-pointer select-none group"
              >
                <div className="relative flex items-center justify-center">
                  <input
                    id={consentId}
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => {
                      setConsent(e.target.checked);
                      if (consentError) setConsentError("");
                    }}
                    className="sr-only"
                  />
                  <div
                    className={`w-4 h-4 rounded-[2px] border transition-colors flex items-center justify-center ${
                      consent
                        ? "bg-[#E2A63D] border-[#E2A63D]"
                        : "bg-transparent border-[#F4F2ED]/30 group-hover:border-[#F4F2ED]/50"
                    }`}
                  >
                    {consent && (
                      <svg
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="#0E1420"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3 h-3"
                        aria-hidden="true"
                      >
                        <polyline points="2.5 6 4.8 8.5 9.5 3.5" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="font-sans font-normal text-[12px] text-[#F4F2ED]/55 leading-[1.4] group-hover:text-[#F4F2ED]/75 transition-colors">
                  Acepto ser contactado por WhatsApp
                </span>
              </label>
              {consentError && (
                <p className="mt-1 font-sans font-normal text-[12px] text-[#E2A63D] text-left">
                  {consentError}
                </p>
              )}
            </div>

            {/* A 20px, botón de envío ámbar sólido, texto navy, 56px de alto, Inter Medium 16px, centrado */}
            <button
              type="submit"
              className="mt-5 flex h-14 w-full items-center justify-center bg-[#E2A63D] text-[#0E1420] font-sans font-medium text-[16px] rounded-[2px] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E2A63D]/40"
            >
              Enviar
            </button>
          </form>
        </section>

        {/* 6 · PIE · 40px de aire superior, 32px inferior */}
        <footer className="mt-10 mb-8 text-center">
          <p className="font-sans font-normal text-[12px] text-[#F4F2ED]/35">
            idenza.site · Jack Luján
          </p>
          <div className="mt-2">
            <Link
              to="/politica-de-privacidad"
              className="inline-flex items-center justify-center font-sans font-normal text-[12px] text-[#F4F2ED]/30 hover:text-[#F4F2ED]/60 hover:underline transition-colors min-h-[48px]"
            >
              Política de privacidad
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
