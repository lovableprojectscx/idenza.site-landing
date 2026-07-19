import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";
import { Reveal } from "./index";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, MessageSquareCode, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/blog/por-que-mi-pagina-web-no-vende")({
  head: () => ({
    links: [
      { rel: "canonical", href: "https://idenza.site/blog/por-que-mi-pagina-web-no-vende" }
    ],
    meta: [
      { title: "¿Por qué mi página web no vende? 5 razones y cómo arreglarlo | IDENZA" },
      { name: "description", content: "Tienes una página web pero no genera ventas. Estas son las 5 razones más comunes por las que tu web no vende, y cómo convertirla en un sistema que sí trae clientes." },
      { property: "og:type", content: "article" },
      { property: "og:site_name", content: "IDENZA" },
      { property: "og:locale", content: "es_PE" },
      { property: "og:url", content: "https://idenza.site/blog/por-que-mi-pagina-web-no-vende" },
      { property: "og:title", content: "¿Por qué mi página web no vende? 5 razones y cómo arreglarlo | IDENZA" },
      { property: "og:description", content: "Tienes una página web pero no genera ventas. Estas son las 5 razones más comunes por las que tu web no vende, y cómo convertirla en un sistema que sí trae clientes." },
      { property: "og:image", content: "https://idenza.site/blog/web-not-selling-feature.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "675" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "¿Por qué mi página web no vende? 5 razones y cómo arreglarlo | IDENZA" },
      { name: "twitter:description", content: "Tienes una página web pero no genera ventas. Estas son las 5 razones más comunes por las que tu web no vende, y cómo convertirla en un sistema que sí trae clientes." },
      { name: "twitter:image", content: "https://idenza.site/blog/web-not-selling-feature.jpg" },
      { name: "article:published_time", content: "2026-07-19T12:00:00-05:00" },
      { name: "article:author", content: "Jack Luján" },
      { name: "article:section", content: "Estrategia Digital" },
      {
        script: [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://idenza.site/blog/por-que-mi-pagina-web-no-vende"
              },
              "headline": "¿Por qué mi página web no vende? 5 razones y cómo arreglarlo",
              "description": "Tienes una página web pero no genera ventas. Estas son las 5 razones más comunes por las que tu web no vende, y cómo convertirla en un sistema que sí trae clientes.",
              "image": "https://idenza.site/blog/web-not-selling-feature.jpg",
              "author": {
                "@type": "Person",
                "name": "Jack Luján",
                "url": "https://idenza.site/fundador"
              },
              "publisher": {
                "@type": "Organization",
                "name": "IDENZA",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://idenza.site/logo.png"
                }
              },
              "datePublished": "2026-07-19T12:00:00-05:00",
              "dateModified": "2026-07-19T12:00:00-05:00"
            })
          }
        ]
      }
    ],
  }),
  component: BlogPostPage,
});

const WHATSAPP_CTA = "https://wa.me/51921585977?text=Hola%20IDENZA%2C%20vengo%20del%20art%C3%ADculo%20y%20quiero%20solicitar%20mi%20diagn%C3%B3stico%20gratuito";

function BlogPostPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Nav />

      <main className="pt-32 pb-24">
        <article className="mx-auto max-w-4xl px-6 md:px-10">
          
          {/* Back to Blog Link */}
          <Reveal>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al blog
            </Link>
          </Reveal>

          {/* Header Metadata */}
          <Reveal delay={0.05}>
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-4">
              <span className="text-[10px] eyebrow bg-secondary/80 text-foreground px-2.5 py-1 rounded-full font-semibold">
                Estrategia
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                Julio 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                5 min de lectura
              </span>
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5" />
                Por Jack Luján
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground tracking-tight mb-8">
              ¿Por qué mi página web no vende?
            </h1>
          </Reveal>

          {/* Featured Image */}
          <Reveal delay={0.1}>
            <div className="aspect-video w-full rounded-3xl overflow-hidden bg-secondary mb-12 shadow-md">
              <img
                src="/blog/web-not-selling-feature.jpg"
                alt="¿Por qué mi página web no vende? - Conceptualización visual de analítica y optimización de conversión"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>

          {/* Body Content */}
          <div className="prose max-w-3xl mx-auto space-y-6 text-foreground/85 leading-relaxed text-base md:text-lg">
            <Reveal delay={0.15}>
              <p className="text-xl text-foreground font-medium font-sans border-l-2 border-amber pl-4 py-1 italic mb-8">
                Tienes tu página web. Se ve bien, te costó, la muestras con orgullo. Pero pasan las semanas y las ventas simplemente no llegan. Nadie escribe, nadie compra, y empiezas a pensar que internet no funciona para tu negocio.
              </p>
              <p className="mb-6">
                No es que internet no funcione. Es que una página web bonita y una máquina de ventas no son la misma cosa. Aquí están las 5 razones más comunes por las que tu web no vende, y qué hacer con cada una.
              </p>
            </Reveal>

            {/* Reasons List */}
            <div className="space-y-10 my-12">
              
              {/* Reason 1 */}
              <Reveal delay={0.05}>
                <div className="bg-card border border-border/40 hover:border-amber/30 rounded-2xl p-6 md:p-8 transition-colors duration-300">
                  <span className="text-[10px] eyebrow text-amber font-semibold block mb-2">Razón 01</span>
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                    1. Tu web es bonita, pero nadie la encuentra
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Una web sin tráfico es como una tienda hermosa en medio del desierto. Si no apareces cuando la gente busca lo que vendes, y si no llevas visitas desde tus redes, tu web está sola. El diseño no atrae clientes por sí solo. El tráfico se construye: con SEO, con tus redes apuntando a ella, y con tu perfil de Google al día.
                  </p>
                </div>
              </Reveal>

              {/* Reason 2 */}
              <Reveal delay={0.05}>
                <div className="bg-card border border-border/40 hover:border-amber/30 rounded-2xl p-6 md:p-8 transition-colors duration-300">
                  <span className="text-[10px] eyebrow text-amber font-semibold block mb-2">Razón 02</span>
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                    2. Nadie verificó si tu cliente de verdad te busca
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Este es el error más caro, y el más común. La mayoría construye la web primero y pregunta después. Se hace al revés. Antes de invertir un sol en diseño, hay que verificar con datos que existe gente buscando lo que ofreces. Si construyes sobre demanda comprobada, vendes. Si construyes sobre una suposición, rezas.
                  </p>
                </div>
              </Reveal>

              {/* Reason 3 */}
              <Reveal delay={0.05}>
                <div className="bg-card border border-border/40 hover:border-amber/30 rounded-2xl p-6 md:p-8 transition-colors duration-300">
                  <span className="text-[10px] eyebrow text-amber font-semibold block mb-2">Razón 03</span>
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                    3. No tiene un camino claro hacia la compra
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Muchas webs informan, pero no venden, porque no le dicen al visitante qué hacer. La persona llega, mira, y se va, porque no hay un botón claro que la lleve a comprar o a escribirte. Tu web necesita un solo camino evidente: del interés al pedido, directo a tu WhatsApp, sin que la persona tenga que pensar.
                  </p>
                </div>
              </Reveal>

              {/* Reason 4 */}
              <Reveal delay={0.05}>
                <div className="bg-card border border-border/40 hover:border-amber/30 rounded-2xl p-6 md:p-8 transition-colors duration-300">
                  <span className="text-[10px] eyebrow text-amber font-semibold block mb-2">Razón 04</span>
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                    4. Nadie la gestiona: es una web muerta
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Una web no es un cuadro que cuelgas y olvidas. Es un ser vivo. Si nadie actualiza tus productos, responde, mide qué pasa y ajusta, la web se apaga sola. La mayoría de páginas mueren no por estar mal hechas, sino por estar abandonadas.
                  </p>
                </div>
              </Reveal>

              {/* Reason 5 */}
              <Reveal delay={0.05}>
                <div className="bg-card border border-border/40 hover:border-amber/30 rounded-2xl p-6 md:p-8 transition-colors duration-300">
                  <span className="text-[10px] eyebrow text-amber font-semibold block mb-2">Razón 05</span>
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                    5. Confunde en vez de convertir
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Demasiado texto, carga lenta, y que se vea mal en el celular. Ahí compra la mayoría de tus clientes. Si tu web tarda en abrir o marea con información, la persona se va antes de entender qué vendes. Menos texto, más claridad, rápida y pensada para el móvil primero.
                  </p>
                </div>
              </Reveal>

            </div>

            {/* Deep truth section */}
            <Reveal delay={0.05}>
              <div className="my-12 border-y border-border/40 py-10">
                <h2 className="text-3xl font-display font-medium text-foreground tracking-tight mb-4">
                  La verdad de fondo
                </h2>
                <p className="text-lg leading-relaxed">
                  Tu página web no es un folleto digital. Es, o debería ser, un <strong className="text-foreground font-semibold">sistema de ventas</strong>. La diferencia entre una web que decora y una que vende no está en lo bonita que se ve, sino en si convierte la atención que ya tienes en pedidos concretos.
                </p>
              </div>
            </Reveal>

            {/* How to fix section */}
            <Reveal delay={0.05}>
              <div className="my-12 bg-secondary/35 border border-border/30 rounded-3xl p-8 md:p-10 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber/15 flex items-center justify-center text-amber">
                    <MessageSquareCode className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-foreground">
                    Cómo se arregla
                  </h2>
                </div>
                <p className="text-base text-foreground/90 leading-relaxed">
                  En <strong className="text-foreground font-semibold">IDENZA</strong> trabajamos al revés de casi todos. Primero verificamos con datos que tu cliente ya te busca. Recién ahí construimos tu web, tu catálogo y el flujo que lleva los pedidos directo a tu WhatsApp. Y te damos un panel que mide tus resultados en vivo, para que veas números reales, no promesas.
                </p>
                <p className="text-base text-foreground/90 leading-relaxed">
                  Si tienes una web que no vende, o estás por hacer una y no quieres que te pase, empieza por lo más importante: saber si tu cliente ya te está buscando.
                </p>
              </div>
            </Reveal>

            {/* Final CTA Box */}
            <Reveal delay={0.1}>
              <div className="mt-16 bg-[#0E1420] text-[#F4F2ED] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber/10 rounded-full blur-3xl pointer-events-none" />
                <span className="text-[10px] eyebrow text-amber mb-3 block">Diagnóstico Gratuito</span>
                <h3 className="text-3xl font-display font-medium mb-4 tracking-tight max-w-lg mx-auto leading-tight">
                  Solicita tu diagnóstico gratis.
                </h3>
                <p className="text-white/70 text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed">
                  Te mostramos si hay demanda real de tu negocio y dónde se te están escapando las ventas. Sin compromiso.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={WHATSAPP_CTA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-amber w-full sm:w-auto text-sm px-8 py-4 font-semibold"
                  >
                    Solicitar vía WhatsApp
                  </a>
                  <Link
                    to="/diagnostico"
                    className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white border-b border-white/20 hover:border-white pb-0.5 transition-colors duration-300 font-medium py-2.5"
                  >
                    Ir al formulario web
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-[10px] uppercase tracking-wider text-white/40">
                  <ShieldCheck className="w-4 h-4 text-amber" />
                  IDENZA · Demanda real antes que diseño · idenza.site
                </div>
              </div>
            </Reveal>

          </div>
        </article>
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
    { href: "/proyectos", label: "Proyectos" },
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
          {links.map((l) =>
            l.href.startsWith("/#") ? (
              <a
                key={l.href}
                href={l.href}
                className="text-foreground/75 hover:text-foreground transition-colors duration-300 font-medium"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                to={l.href}
                className="text-foreground/75 hover:text-foreground transition-colors duration-300 font-medium"
              >
                {l.label}
              </Link>
            )
          )}
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
          {links.map((l) =>
            l.href.startsWith("/#") ? (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground/80 hover:text-foreground font-medium text-lg"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground/80 hover:text-foreground font-medium text-lg"
              >
                {l.label}
              </Link>
            )
          )}
          <Link to="/diagnostico" onClick={() => setOpen(false)} className="btn-amber mt-2 w-full text-center">
            Solicitar diagnóstico
          </Link>
        </div>
      )}
    </header>
  );
}
