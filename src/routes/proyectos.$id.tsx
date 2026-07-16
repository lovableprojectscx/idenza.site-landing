import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";
import { Reveal } from "./index"; // reuse Reveal animation wrapper

import projMiraflores from "@/assets/proj-miraflores.png";
import projVelorioMockup from "@/assets/proj-velorio-mockup.png";
import projBocafestMockup from "@/assets/proj-bocafest-mockup.png";
import projSorpresas from "@/assets/proj-sorpresas.jpg";
import projBocafest from "@/assets/proj-bocafest.jpg";
import projFlor from "@/assets/proj-flor.jpg";
import cajaSorpresa from "@/assets/caja-sorpresa.png";
import projDionelle from "@/assets/proj-dionelle.jpg";

export const Route = createFileRoute("/proyectos/$id")({
  head: ({ params }) => {
    const caseItem = CASE_DATA[params.id] || CASE_DATA.miraflores;
    const title = caseItem.seoTitle || `${caseItem.name} · Caso de Estudio IDENZA`;
    const desc = caseItem.seoDesc || `Caso de estudio IDENZA: ${caseItem.name} (${caseItem.cat}).`;
    return {
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
    video: "https://www.facebook.com/share/v/195pbuEHhk/",
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
    siteUrl: "https://www.floreriaparavelorio.com/",
    tech: ["Vite", "React", "Tailwind CSS", "Fast Checkout", "WhatsApp API"],
    services: ["Análisis de keywords de urgencia", "Optimización UX/UI", "Checkout de 2 minutos", "Tracker de conversiones"],
    seoTitle: "Florería para Velorio · Web de Pedidos Urgentes | IDENZA",
    seoDesc: "Caso real: cómo Florería para Velorio, servicio funerario en Lima, vende más con su catálogo web de pedidos urgentes. Diseño y desarrollo web por IDENZA."
  },
  sorpresas: {
    name: "Mundo de Sorpresas",
    cat: "Detalles · Cusco",
    challenge: "Desorganización en la agenda de pedidos diarios y falta de medición sobre cuántos contactos de redes sociales realmente se convertían en ventas.",
    built: "Un sistema web con agenda ordenada de pedidos, selección de fechas de entrega bloqueadas y medición de conversiones integrada.",
    result: "Agenda de entrega ordenada automáticamente y tasa de conversión de contactos a WhatsApp medida en tiempo real.",
    img: projSorpresas,
    secImg: cajaSorpresa,
    siteUrl: "https://sorpresas.idenza.site",
    tech: ["React", "Vite", "Tailwind CSS", "Calendar Booking", "WhatsApp API"],
    services: ["Organización de agenda", "Bloqueo de fechas automático", "Catálogo interactivo", "Tracker con IA"],
    seoTitle: "Mundo de Sorpresas · Catálogo Online de Detalles | IDENZA",
    seoDesc: "Caso real: cómo Mundo de Sorpresas, detalles en Cusco, vende más con su catálogo virtual con agenda ordenada. Diseño y desarrollo web por IDENZA."
  }
};

function CaseStudyPage() {
  const { id } = useParams({ from: "/proyectos/$id" });
  const caseItem = CASE_DATA[id] || CASE_DATA.miraflores; // fallback

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Nav />

      <main className="pt-32 pb-24">
        <section className="mx-auto max-w-5xl px-6 md:px-10">
          {/* Header */}
          <Reveal className="mb-8">
            <p className="eyebrow mb-4">{caseItem.cat}</p>
            <h1 className="text-4xl md:text-6xl font-display font-medium text-foreground tracking-tight max-w-3xl">
              {caseItem.name}
            </h1>
          </Reveal>

          {/* Project Meta details bar */}
          <Reveal delay={0.02} className="mb-12">
            <div className="flex flex-wrap gap-x-12 gap-y-6 text-sm border-t border-b border-border/40 py-6">
              <div>
                <span className="block text-muted-foreground uppercase text-[10px] eyebrow mb-1">Servicios</span>
                <span className="font-semibold text-foreground">{caseItem.services.join(" · ")}</span>
              </div>
              <div>
                <span className="block text-muted-foreground uppercase text-[10px] eyebrow mb-1">Tecnologías</span>
                <span className="font-semibold text-foreground">{caseItem.tech.join(" · ")}</span>
              </div>
              {caseItem.siteUrl && (
                <div className="md:ml-auto">
                  <a 
                    href={caseItem.siteUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-amber !py-2.5 !px-5 text-xs rounded-xl font-medium inline-flex items-center gap-1.5"
                  >
                    Visitar sitio web ↗
                  </a>
                </div>
              )}
            </div>
          </Reveal>

          {/* Featured Image Grid / Gallery */}
          <Reveal delay={0.05} className="mb-16">
            {caseItem.secImg ? (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-[16/10] w-full overflow-hidden rounded-3xl border border-border/40 shadow-2xl bg-muted relative">
                  <img
                    src={caseItem.img}
                    alt={`${caseItem.name} Mockup`}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-[16/10] w-full overflow-hidden rounded-3xl border border-border/40 shadow-2xl bg-muted relative">
                  <img
                    src={caseItem.secImg}
                    alt={`${caseItem.name} Detalle`}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>
            ) : (
              <div className="aspect-[16/9] w-full overflow-hidden rounded-3xl border border-border/40 shadow-2xl bg-muted relative">
                <img
                  src={caseItem.img}
                  alt={caseItem.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            )}
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
              <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden border border-border/40 shadow-2xl bg-card">
                <div className="relative aspect-video w-full bg-[#0E1420] flex items-center justify-center">
                  <iframe
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F195pbuEHhk%2F&show_text=false&width=560"
                    className="absolute inset-0 w-full h-full border-none"
                    scrolling="no"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                </div>
                <div className="p-8 border-t border-border/30 bg-card text-center">
                  <h3 className="font-display font-semibold text-xl text-foreground mb-2">Video Testimonial Real</h3>
                  <p className="text-sm text-muted-foreground">
                    Mira al fundador de Bocafest explicando cómo IDENZA transformó su negocio.
                  </p>
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


