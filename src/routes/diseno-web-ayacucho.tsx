import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";
import { 
  MapPin, 
  Search, 
  MessageSquare, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink,
  Zap,
  Globe,
  HelpCircle,
  Code2,
  ShoppingBag,
  Store
} from "lucide-react";

import heroClientAyacucho from "@/assets/hero-client-ayacucho.webp";
import projBocafestMockup from "@/assets/proj-bocafest-mockup.webp";
import projMiraflores from "@/assets/proj-miraflores.webp";
import projSorpresas from "@/assets/proj-sorpresas.webp";

export const Route = createFileRoute("/diseno-web-ayacucho")({
  head: () => ({
    links: [
      { rel: "canonical", href: "https://idenza.site/diseno-web-ayacucho" }
    ],
    meta: [
      { title: "Diseño de Páginas Web en Ayacucho | IDENZA" },
      {
        name: "description",
        content:
          "Diseño de páginas web y catálogos online en Ayacucho. Posiciona tu negocio en Google y recibe pedidos directos a tu WhatsApp. Diagnóstico gratis.",
      },
      {
        name: "keywords",
        content:
          "diseño de páginas web en ayacucho, diseño web ayacucho, desarrollo web ayacucho, desarrollo de páginas web en ayacucho, páginas web ayacucho, páginas web huamanga, catálogo whatsapp ayacucho, tienda online ayacucho, servicios web ayacucho, desarrollador web ayacucho",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "IDENZA" },
      { property: "og:locale", content: "es_PE" },
      { property: "og:url", content: "https://idenza.site/diseno-web-ayacucho" },
      { property: "og:title", content: "Diseño de Páginas Web en Ayacucho | IDENZA" },
      {
        property: "og:description",
        content:
          "Diseño de páginas web y catálogos online en Ayacucho. Posiciona tu negocio en Google y recibe pedidos directos a tu WhatsApp. Diagnóstico gratis.",
      },
      { property: "og:image", content: "https://idenza.site/og-home.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Diseño de Páginas Web en Ayacucho | IDENZA" },
      {
        name: "twitter:description",
        content:
          "Diseño de páginas web y catálogos online en Ayacucho. Posiciona tu negocio en Google y recibe pedidos directos a tu WhatsApp. Diagnóstico gratis.",
      },
      { name: "twitter:image", content: "https://idenza.site/og-home.jpg" },
      { name: "geo.region", content: "PE-AYC" },
      { name: "geo.placename", content: "Ayacucho" },
      { name: "geo.position", content: "-13.15878;-74.22393" },
      { name: "ICBM", content: "-13.15878, -74.22393" },
      {
        script: [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "@id": "https://idenza.site/#localbusiness-ayacucho",
                  "name": "IDENZA · Diseño y Desarrollo Web en Ayacucho",
                  "image": "https://idenza.site/og-home.jpg",
                  "url": "https://idenza.site/diseno-web-ayacucho",
                  "telephone": "+51921585977",
                  "email": "jack@idenza.site",
                  "priceRange": "S/850 - S/2900",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Centro Histórico / Huamanga",
                    "addressLocality": "Ayacucho",
                    "addressRegion": "Ayacucho",
                    "postalCode": "05001",
                    "addressCountry": "PE"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": -13.15878,
                    "longitude": -74.22393
                  },
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    "opens": "08:00",
                    "closes": "20:00"
                  },
                  "areaServed": [
                    {
                      "@type": "AdministrativeArea",
                      "name": "Ayacucho"
                    },
                    {
                      "@type": "AdministrativeArea",
                      "name": "Huamanga"
                    },
                    {
                      "@type": "Country",
                      "name": "Perú"
                    }
                  ],
                  "founder": {
                    "@type": "Person",
                    "name": "Jack Luján"
                  },
                  "sameAs": [
                    "https://www.facebook.com/idenza.site",
                    "https://www.tiktok.com/@idenza.site"
                  ]
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://idenza.site/diseno-web-ayacucho#faq",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "¿Cuánto cuesta el diseño o desarrollo de una página web en Ayacucho?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Nuestros planes para negocios en Ayacucho van desde los S/ 850 (Presencia Web + WhatsApp) hasta S/ 2,900 (Tienda Virtual Completa con pasarela de pagos). Siempre tras un diagnóstico gratuito de demanda real."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "¿Cuál es la diferencia entre desarrollo web propio y plantillas comunes?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Desarrollamos tu página con código propio y optimización de velocidad de carga (PageSpeed 95+). No usamos plantillas lentas de WordPress que fallan en celulares o demoran en cargar en redes 4G en Ayacucho."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "¿En cuánto tiempo estará lista mi página web en Ayacucho?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Una web o catálogo interactivo suele estar completamente configurado y publicado en un plazo promedio de 5 a 10 días hábiles."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "¿Cómo entran los pedidos directo a mi WhatsApp?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "El cliente selecciona productos, cantidades o variantes en tu catálogo web y al dar clic en 'Confirmar pedido', el sistema abre su WhatsApp con el mensaje estructurado listo para cobrar."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "¿Mi negocio en Ayacucho aparecerá en los primeros lugares de Google?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sí. Estructuramos la arquitectura SEO local (etiquetas H1, meta tags, schema LocalBusiness y mapa de sitio) para que Google identifique tu negocio cuando busquen tus servicios en Ayacucho."
                      }
                    }
                  ]
                }
              ]
            }),
          },
        ],
      },
    ],
  }),
  component: AyacuchoLandingPage,
});

const WHATSAPP =
  "https://wa.me/51921585977?text=Hola%20IDENZA%2C%20solicito%20diagn%C3%B3stico%20gratis%20para%20mi%20negocio%20en%20Ayacucho";

const GOOGLE_BUSINESS_PROFILE =
  "https://maps.google.com/?q=IDENZA+Dise%C3%B1o+Web+Ayacucho";

/* ---------- Reveal Helper ---------- */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- MAIN LANDING PAGE ---------- */
function AyacuchoLandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-amber selection:text-ink">
      <Nav />
      <HeroSection />
      <LocalSection />
      <DevelopmentVsDesignSection />
      <MethodSection />
      <LocalProofSection />
      <ServicesSection />
      <FaqSection />
      <CtaSection />
      <LocalSignalsSection />
      <Footer />
    </div>
  );
}

/* ---------- NAVBAR ---------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/#metodo", label: "Método" },
    { href: "/proyectos", label: "Proyectos" },
    { href: "/#planes", label: "Planes" },
    { href: "/diseno-web-ayacucho", label: "Ayacucho" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        solid || open
          ? "bg-[#0E1420]/95 backdrop-blur-md border-b border-white/10 h-16 shadow-lg"
          : "bg-transparent h-20"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-full flex items-center justify-between">
        <Link to="/" aria-label="IDENZA — Inicio">
          <Logo light />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) =>
            l.href.startsWith("/#") ? (
              <a
                key={l.href}
                href={l.href}
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                to={l.href}
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                {l.label}
              </Link>
            )
          )}
        </nav>
        <Link
          to="/diagnostico"
          className="hidden md:inline-flex text-xs font-display font-medium px-4 py-2 rounded-full border border-white/20 text-white/90 hover:border-amber hover:text-amber transition-all duration-300"
        >
          Solicitar diagnóstico
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-white focus:outline-none"
          aria-label="Abrir menú"
        >
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 py-6 flex flex-col gap-4 bg-[#0E1420] border-t border-white/10 shadow-2xl">
          {links.map((l) =>
            l.href.startsWith("/#") ? (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/90 hover:text-amber py-1 text-base font-medium"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="text-white/90 hover:text-amber py-1 text-base font-medium"
              >
                {l.label}
              </Link>
            )
          )}
          <Link
            to="/diagnostico"
            onClick={() => setOpen(false)}
            className="btn-amber text-center mt-2 rounded-lg"
          >
            Solicitar diagnóstico gratis
          </Link>
        </div>
      )}
    </header>
  );
}

/* ---------- 1 · HERO SECTION (FULL BACKGROUND BANNER) ---------- */
function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 bg-[#0E1420] text-white border-b border-white/10 overflow-hidden">
      {/* Full Background Image (Vivid & Clear Visibility) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <img
          src={heroClientAyacucho}
          alt="Diseño de Páginas Web en Ayacucho — IDENZA"
          className="w-full h-full object-cover object-[center_30%] sm:object-[right_center] opacity-75 md:opacity-65 scale-100"
        />
        {/* Soft Contrast Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E1420]/95 via-[#0E1420]/75 to-[#0E1420]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1420] via-transparent to-[#0E1420]/60" />
      </div>

      <div className="mx-auto max-w-5xl px-6 md:px-10 relative z-10 text-center md:text-left">
        <div className="max-w-3xl space-y-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <MapPin className="w-3.5 h-3.5 text-amber shrink-0" />
              <span className="text-xs font-sans tracking-wide text-white/90 font-medium">
                Consultoría de crecimiento digital · Ayacucho & Huamanga
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-[1.04]">
              Diseño de Páginas Web en Ayacucho
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-base sm:text-xl text-white/90 max-w-2xl font-sans leading-relaxed">
              Construimos tu <strong className="text-white font-semibold">página web o catálogo online en Ayacucho</strong> con pedidos directos a tu WhatsApp. Destaca en Google y convierte tus visitas en ventas.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-4 pt-2">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-amber px-8 py-4 rounded-xl text-base font-medium shadow-xl hover:shadow-amber/20 transition-all duration-300 text-center"
              >
                Solicitar diagnóstico gratis
              </a>
              <Link
                to="/proyectos"
                className="btn-ghost text-white border-white/30 hover:border-white/60 hover:bg-white/15 backdrop-blur-md px-8 py-4 rounded-xl text-base text-center font-medium"
              >
                Ver proyectos
              </Link>
            </div>
          </Reveal>

          {/* Sub-signals under Hero CTA */}
          <Reveal delay={0.2}>
            <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-3 text-xs sm:text-sm text-white/80 font-sans">
              <div className="flex items-center gap-2">
                <span className="text-amber font-bold">✓</span>
                <span>Código propio sin plantillas</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber font-bold">✓</span>
                <span>Pedidos directos a WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber font-bold">✓</span>
                <span>Google PageSpeed 95+</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- 2 · LOCAL SECTION ---------- */
function LocalSection() {
  return (
    <section className="py-20 md:py-28 bg-background border-b border-border/40">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-foreground/80 text-xs font-medium mb-6">
            <MapPin className="w-3.5 h-3.5 text-amber-deep" />
            <span>Mercado Local Ayacucho & Huamanga</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-foreground tracking-tight max-w-3xl leading-[1.08] mb-6">
            Tu negocio en Ayacucho ya tiene clientes. El problema es cerrarlos.
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl mb-8">
            Convertimos las visitas de tus redes sociales y Google en pedidos confirmados directo a tu WhatsApp, sin chats largos ni clientes perdidos.
          </p>
        </Reveal>

        {/* Highlight Callout Pill */}
        <Reveal delay={0.1}>
          <div className="p-6 md:p-7 rounded-2xl bg-card border border-border shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
            <div className="space-y-1">
              <div className="text-xs eyebrow text-muted-foreground">Atención 100% directa en Ayacucho</div>
              <div className="text-base md:text-lg font-display font-medium text-foreground">
                Atendemos negocios de Ayacucho y alrededores, y todo el Perú, 100% online.
              </div>
            </div>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-amber shrink-0 text-xs font-medium py-3 px-5 rounded-xl"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </Reveal>

        {/* 3 Local Advantage Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <Reveal delay={0.1}>
            <div className="p-6 rounded-2xl bg-card border border-border/60 space-y-3 hover:border-amber/30 transition-colors duration-300">
              <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-foreground border border-border">
                <Search className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-base font-display font-semibold text-foreground">
                Captura la intención en Google
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Cuando alguien busca "desarrollo web ayacucho" o tus productos, tu negocio destaca de primero.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="p-6 rounded-2xl bg-card border border-border/60 space-y-3 hover:border-amber/30 transition-colors duration-300">
              <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-foreground border border-border">
                <MessageSquare className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-base font-display font-semibold text-foreground">
                Cierre directo en WhatsApp
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                El cliente arma su pedido en segundos y la orden entra lista a tu WhatsApp para cobrar.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="p-6 rounded-2xl bg-card border border-border/60 space-y-3 hover:border-amber/30 transition-colors duration-300">
              <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-foreground border border-border">
                <BarChart3 className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-base font-display font-semibold text-foreground">
                Mide tus resultados en vivo
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Tu panel Tracker mide cuántas personas ven tus productos y hacen clic para comprar.
              </p>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}

/* ---------- SEO SECTION: DESARROLLO VS DISEÑO WEB ---------- */
function DevelopmentVsDesignSection() {
  return (
    <section className="py-20 bg-card border-b border-border/40">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-foreground/80 text-xs font-medium mb-6">
            <Code2 className="w-3.5 h-3.5" />
            <span>Desarrollo Web en Ayacucho vs Plantillas</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-medium text-foreground tracking-tight max-w-3xl leading-[1.08] mb-6">
            Desarrollo de Páginas Web en Ayacucho: ¿Por qué el código propio vence a las plantillas?
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl mb-8">
            Código moderno en React y Vite diseñado para abrir en menos de 1 segundo en las redes móviles 4G de Huamanga.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          <Reveal delay={0.1}>
            <div className="p-6 rounded-2xl bg-background border border-border space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-foreground/5 text-foreground/70 flex items-center justify-center font-bold text-xs">
                  ✕
                </div>
                <h3 className="text-base font-display font-semibold text-foreground">
                  Webs tradicionales con plantillas
                </h3>
              </div>
              <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                <li className="flex gap-2"><span>•</span> Tardan más de 4 segundos en abrir en celulares 4G.</li>
                <li className="flex gap-2"><span>•</span> El cliente se aburre y cierra la ventana antes de comprar.</li>
                <li className="flex gap-2"><span>•</span> Formularios complejos que nadie llena.</li>
                <li className="flex gap-2"><span>•</span> Cero medición de conversiones reales.</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="p-6 rounded-2xl bg-background border border-foreground/20 space-y-3 shadow-sm">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-amber/20 text-amber-deep flex items-center justify-center font-bold text-xs">
                  ✓
                </div>
                <h3 className="text-base font-display font-semibold text-foreground">
                  Desarrollo Web IDENZA (Ayacucho)
                </h3>
              </div>
              <ul className="space-y-2 text-xs md:text-sm text-foreground/80 font-medium">
                <li className="flex gap-2">✓ Carga instantánea en menos de 1 segundo.</li>
                <li className="flex gap-2">✓ Integración directa con WhatsApp para cerrar pedidos al toque.</li>
                <li className="flex gap-2">✓ Estructurada desde cero para el algoritmo local de Google.</li>
                <li className="flex gap-2">✓ Panel de métricas e inteligencia en tiempo real.</li>
              </ul>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}

/* ---------- 3 · MÉTODO SECTION ---------- */
function MethodSection() {
  const steps = [
    {
      num: "01",
      title: "Verificamos la demanda.",
      desc: "Con datos reales confirmamos que tu cliente ya te busca en Ayacucho y Huamanga, antes de construir nada.",
      highlight: "Investigación de volumen de búsquedas en Google Ayacucho.",
      icon: Search,
    },
    {
      num: "02",
      title: "Construimos tu sistema.",
      desc: "Tu web, tu catálogo y el flujo hasta tu WhatsApp, con código propio, no plantillas de agencia.",
      highlight: "Desarrollo web optimizado para móviles y redes sociales.",
      icon: Zap,
    },
    {
      num: "03",
      title: "Te damos los datos.",
      desc: "Un panel que mide tus visitas y contactos en vivo. Sin promesas, solo números.",
      highlight: "IDENZA Tracker para saber qué producto genera más pedidos.",
      icon: BarChart3,
    },
  ];

  return (
    <section id="metodo" className="py-20 md:py-28 bg-[#0E1420] text-white border-b border-white/10">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium mb-6">
            <span>Tu diferencia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-white tracking-tight max-w-3xl leading-[1.08] mb-12">
            No hacemos webs bonitas. Hacemos sistemas que venden.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.num} delay={idx * 0.08}>
                <div className="p-7 rounded-2xl bg-[#141C2D] border border-white/10 flex flex-col h-full relative">
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-2xl font-bold text-amber">
                      {s.num}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/80 border border-white/10">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-display font-semibold text-white mb-2">
                    {s.title}
                  </h3>

                  <p className="text-xs md:text-sm text-white/70 leading-relaxed mb-5 flex-1">
                    {s.desc}
                  </p>

                  <div className="pt-4 border-t border-white/10 text-xs text-white/80 font-sans font-medium flex items-center gap-1.5">
                    <span className="text-amber">✓</span>
                    <span>{s.highlight}</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- 4 · PRUEBA LOCAL SECTION ---------- */
function LocalProofSection() {
  return (
    <section className="py-20 md:py-28 bg-background border-b border-border/40">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-foreground/80 text-xs font-medium mb-6">
            <span>Casos reales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-foreground tracking-tight max-w-3xl leading-[1.08] mb-12">
            Negocios de acá, vendiendo mejor.
          </h2>
        </Reveal>

        {/* Featured Local Case Study: Bocafest */}
        <Reveal>
          <div className="p-7 md:p-10 rounded-2xl bg-card border border-border shadow-sm grid lg:grid-cols-12 gap-8 items-center mb-10">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-secondary border border-border text-foreground/80 text-xs font-display font-semibold">
                <span>Food box · Ayacucho</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground tracking-tight">
                Bocafest
              </h3>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Catálogo interactivo con extras que el cliente arma solo, y pedidos directos a WhatsApp. Pasaron de explicar precios en chats largos a recibir pedidos armados con un solo clic.
              </p>

              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-2 text-xs md:text-sm text-foreground/80 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-foreground/60 shrink-0" />
                  <span>Catálogo dinámico con opciones personalizadas</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-foreground/80 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-foreground/60 shrink-0" />
                  <span>Cierre de pedido automático a su número de WhatsApp</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-foreground/80 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-foreground/60 shrink-0" />
                  <span>Cero comisiones por plataforma o intermediarios</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/proyectos/bocafest"
                  className="btn-amber text-xs font-medium px-5 py-3 rounded-xl inline-flex items-center gap-2"
                >
                  <span>Ver caso de Bocafest</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Mockup */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-md">
                <img
                  src={projBocafestMockup}
                  alt="Bocafest Ayacucho — Catálogo de pedidos WhatsApp"
                  width={800}
                  height={600}
                  className="rounded-xl border border-border shadow-md w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </Reveal>

        {/* Secondary Project Previews Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <Reveal delay={0.05}>
            <div className="p-6 rounded-2xl bg-card border border-border/60 flex items-center gap-5">
              <img
                src={projMiraflores}
                alt="Proyecto Florería Ayacucho"
                width={120}
                height={120}
                className="w-20 h-20 rounded-xl object-cover shrink-0 border border-border"
                loading="lazy"
              />
              <div className="space-y-1">
                <div className="text-xs eyebrow text-muted-foreground">Florerías & Regalos</div>
                <div className="text-base font-display font-semibold text-foreground">Catálogo de detalles</div>
                <p className="text-xs text-muted-foreground">
                  Pedidos programados con fecha, dedicatoria y ubicación exacta en WhatsApp.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="p-6 rounded-2xl bg-card border border-border/60 flex items-center gap-5">
              <img
                src={projSorpresas}
                alt="Proyecto Regalos Ayacucho"
                width={120}
                height={120}
                className="w-20 h-20 rounded-xl object-cover shrink-0 border border-border"
                loading="lazy"
              />
              <div className="space-y-1">
                <div className="text-xs eyebrow text-muted-foreground">Servicios & Marcas</div>
                <div className="text-base font-display font-semibold text-foreground">Landing de alta conversión</div>
                <p className="text-xs text-muted-foreground">
                  Estructura ligera pensada para cargar en menos de 1 segundo en celulares 4G.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* View All Projects Button */}
        <Reveal delay={0.15}>
          <div className="text-center">
            <Link
              to="/proyectos"
              className="btn-outline px-6 py-3 rounded-xl text-xs font-medium inline-flex items-center gap-2"
            >
              <span>Ver todos los proyectos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 5 · SERVICIOS SECTION (VISUAL & ICON-FIRST) ---------- */
function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Diseño y Desarrollo Web",
      badge: "Indispensable",
      bullets: [
        "Dominio .pe / .com a tu nombre",
        "Correo corporativo profesional",
        "Carga rápida en celulares",
        "Estructura optimizada para Google",
      ],
    },
    {
      icon: ShoppingBag,
      title: "Catálogos Online a WhatsApp",
      badge: "Más solicitado en Ayacucho",
      highlight: true,
      bullets: [
        "Pedidos automáticos en 1 clic",
        "Opciones y variaciones personalizadas",
        "Cero comisiones por ventas",
        "Ideal para comida, regalos y moda",
      ],
    },
    {
      icon: Store,
      title: "Tiendas Virtuales & E-commerce",
      badge: "Completo",
      bullets: [
        "Pasarela Yape, Plin y tarjetas",
        "Control de stock e inventario",
        "Panel de administración propio",
        "Sin mensualidades pesadas",
      ],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0E1420] text-white border-b border-white/10">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium mb-6">
            <span>Lo que construimos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-white tracking-tight max-w-3xl leading-[1.08] mb-5">
            Servicios de Diseño y Desarrollo Web en Ayacucho
          </h2>
          <p className="text-sm md:text-base text-white/75 max-w-3xl leading-relaxed mb-12">
            Páginas web, catálogos WhatsApp y tiendas virtuales optimizadas para destacar en Google y convertir visitas en pedidos.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={idx * 0.07}>
                <div
                  className={`p-6 rounded-2xl border flex flex-col h-full relative transition-all duration-300 ${
                    s.highlight
                      ? "bg-[#141C2D] border-amber/60 ring-1 ring-amber/30 shadow-xl"
                      : "bg-[#141C2D] border-white/10 hover:border-white/20"
                  }`}
                >
                  {/* Top Badge & Icon Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-display font-semibold uppercase tracking-wider text-amber">
                      {s.badge}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-amber/10 flex items-center justify-center text-amber border border-amber/20">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white mb-4">
                    {s.title}
                  </h3>

                  {/* Visual Bullet Points */}
                  <ul className="space-y-2.5 text-xs text-white/80 mb-6 flex-1">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="text-amber font-bold shrink-0 mt-0.5">✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] text-white/50 font-mono">100% Propio</span>
                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-display font-semibold text-amber hover:underline flex items-center gap-1"
                    >
                      <span>Cotizar</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ SECTION ---------- */
function FaqSection() {
  const faqs = [
    {
      q: "¿Cuánto cuesta el diseño o desarrollo de una página web en Ayacucho?",
      a: "Nuestros planes arrancan desde los S/ 850 para Presencia Web + WhatsApp hasta los S/ 2,900 para una Tienda Virtual completa con pagos online. Siempre acordamos la solución ideal según la demanda real de tu negocio."
    },
    {
      q: "¿Cuál es la diferencia entre desarrollo web propio y plantillas lentas?",
      a: "Desarrollamos tu página con código moderno ultra optimizado (cargas en <1 segundo). Las plantillas tradicionales tipo WordPress suelen ser pesadas, fallan en celulares en Ayacucho y ahuyentan a tus compradores."
    },
    {
      q: "¿En cuánto tiempo estará lista mi página web en Ayacucho?",
      a: "Tu sitio o catálogo interactivo queda configurado, probado y publicado en un plazo promedio de 5 a 10 días hábiles."
    },
    {
      q: "¿Cómo entran los pedidos directamente a mi WhatsApp?",
      a: "El cliente visualiza tus productos en su teléfono, selecciona opciones o complementos y, al dar clic en 'Enviar Pedido', se abre su aplicación de WhatsApp con la cotización formateada y lista para recibir el pago."
    },
    {
      q: "¿Mi página web en Ayacucho aparecerá en los primeros lugares de Google?",
      a: "Sí. Construimos toda la estructura interna de SEO local (H1, meta descriptions, marcado Schema LocalBusiness y mapa de sitio) para que Google reconozca tu negocio en búsquedas como 'diseño web ayacucho' o 'desarrollo web ayacucho'."
    }
  ];

  return (
    <section className="py-20 bg-background border-b border-border/40">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-foreground/80 text-xs font-medium mb-6">
            <HelpCircle className="w-3.5 h-3.5 text-amber-deep" />
            <span>Preguntas Frecuentes SEO</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-medium text-foreground tracking-tight leading-[1.08] mb-10">
            Preguntas sobre diseño y desarrollo web en Ayacucho
          </h2>
        </Reveal>

        <div className="divide-y divide-border border-t border-b border-border">
          {faqs.map((faq, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <details className="group py-5 cursor-pointer">
                <summary className="flex items-center justify-between font-display font-semibold text-base md:text-lg text-foreground list-none group-open:text-amber-deep transition-colors">
                  <span>{faq.q}</span>
                  <span className="text-xl font-normal text-foreground/60 group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-xs md:text-sm text-muted-foreground leading-relaxed pr-6">
                  {faq.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 6 · CTA SECTION ---------- */
function CtaSection() {
  return (
    <section className="py-24 md:py-32 bg-background border-b border-border/40 relative overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 md:px-10 text-center relative z-10">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-foreground/80 text-xs font-display font-semibold mb-6">
            <span>Diagnóstico gratis para Ayacucho</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-foreground tracking-tight leading-[1.02] mb-6">
            Antes de construir, verificamos.
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            Solicita tu diagnóstico gratis: te muestro si tu cliente te busca en Ayacucho y dónde se te están escapando las ventas. Sin compromiso.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-amber text-sm font-medium px-7 py-3.5 rounded-xl w-full sm:w-auto"
            >
              Solicitar diagnóstico gratis
            </a>
            <a
              href="https://wa.me/51921585977"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm font-medium px-7 py-3.5 rounded-xl w-full sm:w-auto inline-flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp +51 921 585 977</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 7 · SEÑALES LOCALES (FOOTER LOCAL & GOOGLE PROFILE) ---------- */
function LocalSignalsSection() {
  return (
    <section className="py-14 bg-[#090D15] text-white border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <Reveal>
          <div className="p-7 rounded-2xl bg-[#111723] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-white/70 text-xs font-display font-semibold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-amber" />
                <span>SEO Local Ayacucho & Huamanga</span>
              </div>
              <p className="text-sm md:text-base font-display font-medium text-white max-w-xl">
                IDENZA · Diseño y Desarrollo Web en Ayacucho, Perú. Atención a todo el país, 100% online.
              </p>
              <div className="text-xs text-white/50">
                WhatsApp: +51 921 585 977 · Correo: jack@idenza.site
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <a
                href={GOOGLE_BUSINESS_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-xs text-white/80 border-white/20 hover:bg-white/5 px-4 py-2.5 rounded-xl inline-flex items-center gap-2"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Perfil de Empresa de Google</span>
                <ExternalLink className="w-3 h-3 text-white/50" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
