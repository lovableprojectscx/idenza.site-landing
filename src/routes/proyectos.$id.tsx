import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";
import { Reveal } from "./index"; // reuse Reveal animation wrapper

import projMiraflores from "@/assets/proj-miraflores.webp";
import projVelorioMockup from "@/assets/proj-velorio-mockup.webp";
import projBocafestMockup from "@/assets/proj-bocafest-mockup.webp";
import projSorpresas from "@/assets/proj-sorpresas.webp";
import projBocafest from "@/assets/proj-bocafest.webp";
import projFlor from "@/assets/proj-flor.webp";
import cajaSorpresa from "@/assets/caja-sorpresa.webp";
import projDionelle from "@/assets/proj-dionelle.webp";
import projVadilloMockup from "@/assets/proj-vadillo-mockup.webp";

import { ExternalLink } from "lucide-react";

export const Route = createFileRoute("/proyectos/$id")({
  head: ({ params }) => {
    const caseItem = CASE_DATA[params.id] || CASE_DATA.miraflores;
    const title = caseItem.seoTitle || `${caseItem.name} · Caso de Estudio IDENZA`;
    const desc = caseItem.seoDesc || `Caso de estudio IDENZA: ${caseItem.name} (${caseItem.cat}).`;
    return {
      links: [
        { rel: "canonical", href: `https://idenza.site/proyectos/${params.id}` }
      ],
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "IDENZA" },
        { property: "og:locale", content: "es_PE" },
        { property: "og:url", content: `https://idenza.site/proyectos/${params.id}` },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:image", content: "https://idenza.site/og-home.jpg" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
        { name: "twitter:image", content: "https://idenza.site/og-home.jpg" },
      ],
    };
  },
  component: CaseStudyPage,
});

const WHATSAPP = "https://wa.me/51921585977?text=Hola,%20solicito%20diagnostico%20gratis%20para%20mi%20negocio";

const CASE_DATA: Record<string, {
  name: string;
  cat: string;
  challenge: string;
  built: string;
  result: string;
  img: string;
  secImg?: string;
  siteUrl?: string;
  tech: string[];
  services: string[];
  video?: string;
  seoTitle: string;
  seoDesc: string;
}> = {
  miraflores: {
    name: "Miraflores Boutique Floral",
    cat: "Florería · Lima",
    challenge: "El cliente necesitaba un canal de venta digital elegante y de alta fidelidad que reflejara su categoría premium, eliminando procesos manuales y errores en los pedidos de florería.",
    built: "Una tienda online premium optimizada para celulares con catálogo interactivo completo, pasarela de pago directa y redirección estructurada a WhatsApp.",
    result: "Catálogo de alta conversión operando de forma autónoma con pagos en línea integrados y flujo a WhatsApp sin llamadas ni procesos manuales.",
    img: projMiraflores,
    secImg: projDionelle,
    siteUrl: "https://florer-a-miraflores.vercel.app/",
    tech: ["React", "Vite", "Tailwind CSS", "WhatsApp API", "Nitro Server"],
    services: ["Investigación de demanda", "Branding premium", "Desarrollo Frontend", "Checkout automatizado"],
    seoTitle: "Miraflores Boutique Floral · Tienda Web para Florería | IDENZA",
    seoDesc: "Caso real: cómo Miraflores Boutique Floral vende sus arreglos con una tienda web y pedidos a WhatsApp. Diseño web para florerías por IDENZA."
  },
  bocafest: {
    name: "Bocafest",
    cat: "Food box · Ayacucho",
    challenge: "El cliente tenía que explicar cada opción, tamaño y extra de los food boxes manualmente por chat, perdiendo valioso tiempo de atención.",
    built: "Un catálogo interactivo con selección de extras (adicionales, globos, peluches) y un panel de administración integrado para medir el rendimiento.",
    result: "Los clientes arman sus propios pedidos con adicionales directamente en el catálogo, aumentando el ticket promedio de compra sin intervención manual.",
    img: projBocafestMockup,
    secImg: projBocafest,
    siteUrl: "https://www.bocafestfoodbox.com/",
    tech: ["React", "Vite", "Tailwind CSS", "Admin Dashboard", "WhatsApp API"],
    services: ["Investigación de mercado", "Diseño de Catálogo", "Panel de administración", "Tracker con IA"],
    video: "https://vt.tiktok.com/ZSXn1HPp5/",
    seoTitle: "Bocafest · Catálogo Web con Pedidos a WhatsApp | IDENZA",
    seoDesc: "Caso real: cómo Bocafest, food box en Ayacucho, vende más con su catálogo interactivo con extras. Diseño y desarrollo web por IDENZA."
  },
  velorio: {
    name: "Florería para Velorio",
    cat: "Servicio funerario · Lima",
    challenge: "En momentos difíciles, los clientes necesitan comprar arreglos fúnebres de forma inmediata y sin pasar por llamadas incómodas o esperas largas.",
    built: "Un catálogo web de florería optimizado para pedidos urgentes con un flujo de checkout a WhatsApp que se completa en 2 minutos.",
    result: "Pedidos urgentes resueltos de forma autónoma en 2 minutos y 100% online, sin necesidad de llamadas.",
    img: projVelorioMockup,
    secImg: projFlor,
    siteUrl: "https://floreriasparavelorio.com/",
    tech: ["React", "Vite", "Tailwind CSS", "SEO Local", "WhatsApp API"],
    services: ["Diseño UX/UI", "Desarrollo Frontend", "SEO para conversión rápida"],
    seoTitle: "Florería para Velorio · Catálogo Web Urgente | IDENZA",
    seoDesc: "Caso real: catálogo de pedidos rápidos de arreglos funerarios en Lima. Diseño web por IDENZA."
  },
  sorpresas: {
    name: "Sorpresas Ayacucho",
    cat: "Detalles & Regalos · Ayacucho",
    challenge: "Negocio local de desayunos y cajas sorpresa que perdía pedidos por no tener un catálogo claro con precios y adicionales.",
    built: "Un catálogo interactivo ligero optimizado para redes sociales con pedidos estructurados a WhatsApp.",
    result: "Incremento significativo en cierres directos desde Instagram y TikTok sin perder tiempo cotizando manualmente.",
    img: projSorpresas,
    secImg: cajaSorpresa,
    siteUrl: "https://sorpresas-ayacucho.vercel.app/",
    tech: ["React", "Vite", "Tailwind CSS", "WhatsApp API"],
    services: ["Diseño de catálogo", "Integración WhatsApp", "Optimización móvil"],
    seoTitle: "Sorpresas Ayacucho · Catálogo Web de Regalos | IDENZA",
    seoDesc: "Caso real: catálogo web de regalos y detalles personalizados en Ayacucho. Desarrollo por IDENZA."
  },
  vadillo: {
    name: "Vadillo Broker",
    cat: "Seguros & Inmobiliaria · Lima / Perú",
    challenge: "El cliente necesitaba transmitir máxima solvencia, confianza y atención senior personalizada, diferenciándose de las aseguradoras tradicionales con call centers fríos.",
    built: "Una plataforma web corporativa ultrarrápida con arquitectura limpia en React/Vite, diseño enfocado en autoridad (Corredor SBS N° 4582), métricas de impacto en vivo y canal directo de asesoría senior a WhatsApp.",
    result: "Score perfecto en Google PageSpeed: 99/100 en Rendimiento y 100/100 en SEO. Atención directa sin intermediarios y posicionamiento de marca senior.",
    img: projVadilloMockup,
    siteUrl: "https://www.vadillobroker.com/",
    tech: ["React", "Vite", "Tailwind CSS", "SEO 100", "PageSpeed 99", "WhatsApp API"],
    services: ["Branding Corporativo", "Diseño UX/UI", "Desarrollo Frontend", "SEO & Velocidad 99/100"],
    seoTitle: "Vadillo Broker · Caso de Estudio de Desarrollo Web | IDENZA",
    seoDesc: "Caso real: cómo Vadillo Broker (Seguros e Inmobiliaria) logró 99/100 en PageSpeed y 100/100 en SEO con IDENZA."
  }
};

function CaseStudyPage() {
  const { id } = useParams({ from: "/proyectos/$id" });
  const caseItem = CASE_DATA[id] || CASE_DATA.miraflores;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-amber selection:text-ink">
      <Nav />

      <main className="pt-28 pb-20">
        <section className="mx-auto max-w-5xl px-6 md:px-10">
          {/* Header */}
          <Reveal>
            <div className="mb-6">
              <Link to="/proyectos" className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
                ← Volver a todos los proyectos
              </Link>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-foreground/80 text-xs font-medium mb-4">
              <span>{caseItem.cat}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground tracking-tight mb-6">
              {caseItem.name}
            </h1>
          </Reveal>

          {/* Quick Stats / Tech pill bar */}
          <Reveal delay={0.05}>
            <div className="flex flex-wrap items-center justify-between gap-4 p-6 rounded-2xl bg-card border border-border shadow-sm mb-12">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-muted-foreground font-medium mr-2">Tecnología:</span>
                {caseItem.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md bg-secondary text-xs text-foreground/90 font-mono">
                    {t}
                  </span>
                ))}
              </div>
              {caseItem.siteUrl && (
                <a
                  href={caseItem.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-amber text-xs py-2 px-4 rounded-xl inline-flex items-center gap-1.5"
                >
                  <span>Visitar sitio en vivo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </Reveal>

          {/* Main Hero Image */}
          <Reveal delay={0.1} className="mb-16">
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl aspect-[16/9] w-full bg-card">
              <img
                src={caseItem.img}
                alt={caseItem.name}
                className="w-full h-full object-cover block"
              />
            </div>
          </Reveal>

          {/* Details layout */}
          <div className="grid md:grid-cols-12 gap-12 mb-20">
            <div className="md:col-span-8 space-y-12">
              <Reveal>
                <h2 className="text-xl font-bold uppercase tracking-wider text-foreground mb-4">El reto</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{caseItem.challenge}</p>
              </Reveal>

              <Reveal>
                <h2 className="text-xl font-bold uppercase tracking-wider text-foreground mb-4">Lo que construimos</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{caseItem.built}</p>
              </Reveal>

              <Reveal>
                <h2 className="text-xl font-bold uppercase tracking-wider text-foreground mb-4">El resultado</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{caseItem.result}</p>
              </Reveal>
            </div>

            <div className="md:col-span-4 space-y-8">
              <Reveal delay={0.1}>
                <div className="p-8 rounded-3xl bg-card border border-border/40 shadow-xl space-y-6">
                  <h3 className="font-display font-bold text-xl text-foreground">¿Quieres algo así?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Podemos construir un sistema a medida sobre la demanda real de tu negocio.
                  </p>
                  <div className="pt-2 flex flex-col gap-4">
                    <a href={WHATSAPP} className="btn-amber w-full text-center">
                      Quiero algo así
                    </a>
                    <Link to="/proyectos" className="btn-outline w-full text-center py-2.5 text-xs rounded-xl">
                      Ver más proyectos
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Video Testimonial Section for Bocafest */}
          {caseItem.video && (
            <Reveal className="border-t border-border/40 pt-16">
              <div className="max-w-xl mx-auto rounded-3xl overflow-hidden border border-border/40 shadow-2xl bg-card">
                <div className="p-8 border-b border-border/30 bg-card text-center space-y-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber/10 border border-amber/20 text-amber text-xs font-semibold">
                    <span>Testimonio en Video</span>
                  </span>
                  <h3 className="font-display font-bold text-2xl text-foreground">Testimonio del Fundador</h3>
                  <p className="text-sm text-muted-foreground">
                    Mira al fundador de Bocafest en TikTok explicando cómo IDENZA transformó sus ventas.
                  </p>
                </div>
                
                <div className="p-8 bg-[#0E1420] text-white flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20 text-amber shadow-lg">
                    <ExternalLink className="w-8 h-8" />
                  </div>
                  <div className="space-y-2 max-w-md">
                    <h4 className="text-lg font-display font-bold text-white">Ver video completo en TikTok</h4>
                    <p className="text-xs text-white/70">
                      Verificamos que tu cliente te busque y armamos tu catálogo con pedidos a WhatsApp.
                    </p>
                  </div>
                  <a
                    href={caseItem.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-amber px-8 py-4 rounded-xl text-sm font-semibold shadow-xl hover:shadow-amber/20 transition-all inline-flex items-center gap-2.5"
                  >
                    <span>Ver testimonio en TikTok</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/#metodo", label: "Método" },
    { href: "/#proyectos", label: "Proyectos" },
    { href: "/#planes", label: "Planes" },
    { href: "/fundador", label: "El fundador" },
    { href: "/blog", label: "Blog" },
  ];
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        solid || open
          ? "bg-background/80 backdrop-blur-md border-b border-border/40 h-16"
          : "bg-transparent h-20"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-full flex items-center justify-between">
        <Link to="/" aria-label="IDENZA — Inicio">
          <Logo light={false} />
        </Link>
        <nav className="hidden md:flex items-center gap-9 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-foreground/75 hover:text-foreground transition-colors duration-300 font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <Link
          to="/diagnostico"
          className="hidden md:inline-flex text-sm border-b pb-0.5 text-foreground/80 hover:text-foreground border-foreground/30 hover:border-foreground transition-colors duration-300 font-medium"
        >
          Solicitar diagnóstico
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 -mr-2"
          aria-label="Menú"
        >
          <div className="w-6 h-px mb-1.5 bg-foreground" />
          <div className="w-6 h-px mb-1.5 bg-foreground" />
          <div className="w-6 h-px bg-foreground" />
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 py-6 flex flex-col gap-5 bg-background border-t border-border/40 shadow-xl">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-foreground/80 hover:text-foreground font-medium text-lg"
            >
              {l.label}
            </a>
          ))}
          <Link to="/diagnostico" className="btn-amber mt-2 w-full text-center">
            Solicitar diagnóstico
          </Link>
        </div>
      )}
    </header>
  );
}


