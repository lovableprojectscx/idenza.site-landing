import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";
import { Reveal } from "./index";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    links: [
      { rel: "canonical", href: "https://idenza.site/blog" }
    ],
    meta: [
      { title: "Blog · Estrategias de Crecimiento y Venta Web | IDENZA" },
      { name: "description", content: "Artículos, guías y análisis sobre diseño web de conversión, investigación de demanda real y analítica con inteligencia artificial en Perú." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "IDENZA" },
      { property: "og:locale", content: "es_PE" },
      { property: "og:url", content: "https://idenza.site/blog" },
      { property: "og:title", content: "Blog · Estrategias de Crecimiento y Venta Web | IDENZA" },
      { property: "og:description", content: "Artículos, guías y análisis sobre diseño web de conversión, investigación de demanda real y analítica con inteligencia artificial en Perú." },
      { property: "og:image", content: "https://idenza.site/og-home.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Blog · Estrategias de Crecimiento y Venta Web | IDENZA" },
      { name: "twitter:description", content: "Artículos, guías y análisis sobre diseño web de conversión, investigación de demanda real y analítica con inteligencia artificial en Perú." },
      { name: "twitter:image", content: "https://idenza.site/og-home.jpg" },
    ],
  }),
  component: BlogIndexPage,
});

const ARTICLES = [
  {
    slug: "por-que-mi-pagina-web-no-vende",
    title: "¿Por qué mi página web no vende?",
    description: "Tienes una página web bonita pero no genera ventas. Estas son las 5 razones más comunes por las que tu web no vende, y cómo convertirla en un sistema de ventas que sí trae clientes.",
    category: "Estrategia",
    readTime: "5 min de lectura",
    date: "Julio 2026",
    image: "/blog/web-not-selling-feature.jpg"
  }
];

function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Nav />

      <main className="pt-32 pb-24">
        <section className="mx-auto max-w-5xl px-6 md:px-10">
          <Reveal>
            <p className="eyebrow mb-4">Artículos y guías</p>
            <h1 className="text-4xl md:text-6xl font-display font-medium text-foreground tracking-tight mb-6 max-w-2xl">
              Crecimiento Digital.
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-lg mb-16">
              Ideas, datos y estrategias para transformar tu sitio web en una máquina de ventas basada en demanda real y comprobada.
            </p>
          </Reveal>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {ARTICLES.map((article, i) => (
              <Reveal key={article.slug} delay={i * 0.1}>
                <Link
                  to={`/blog/${article.slug}`}
                  className="group block bg-card border border-border/40 hover:border-border/80 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="aspect-video w-full overflow-hidden bg-[#0E1420]/5 relative border-b border-border/20">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] eyebrow bg-secondary/80 text-foreground px-2.5 py-1 rounded-full font-semibold">
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-display font-bold text-foreground tracking-tight group-hover:text-amber transition-colors duration-300 mb-3">
                      {article.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{article.readTime}</span>
                      <span className="text-sm font-semibold text-foreground group-hover:text-amber inline-flex items-center gap-1 transition-colors duration-300">
                        Leer artículo
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
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
    { href: "/proyectos", label: "Proyectos" },
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
