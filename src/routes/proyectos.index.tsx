import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";
import { Reveal } from "./index"; // reuse Reveal animation wrapper

import projMiraflores from "@/assets/proj-miraflores.webp";
import projVelorioMockup from "@/assets/proj-velorio-mockup.webp";
import projBocafestMockup from "@/assets/proj-bocafest-mockup.webp";
import projSorpresas from "@/assets/proj-sorpresas.webp";
import projVadilloMockup from "@/assets/proj-vadillo-mockup.webp";

export const Route = createFileRoute("/proyectos/")({
  head: () => ({
    links: [
      { rel: "canonical", href: "https://idenza.site/proyectos" }
    ],
    meta: [
      { title: "Proyectos y Casos de Diseño Web | IDENZA Perú" },
      { name: "description", content: "Casos reales de páginas web y catálogos que venden: florerías, food box y más. Mira los sistemas que IDENZA construyó para negocios en Perú." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "IDENZA" },
      { property: "og:locale", content: "es_PE" },
      { property: "og:url", content: "https://idenza.site/proyectos" },
      { property: "og:title", content: "Proyectos y Casos de Diseño Web | IDENZA Perú" },
      { property: "og:description", content: "Casos reales de páginas web y catálogos que venden: florerías, food box y más. Mira los sistemas que IDENZA construyó para negocios en Perú." },
      { property: "og:image", content: "https://idenza.site/og-home.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Proyectos y Casos de Diseño Web | IDENZA Perú" },
      { name: "twitter:description", content: "Casos reales de páginas web y catálogos que venden: florerías, food box y más. Mira los sistemas que IDENZA construyó para negocios en Perú." },
      { name: "twitter:image", content: "https://idenza.site/og-home.jpg" },
    ],
  }),
  component: ProjectsPage,
});

const WHATSAPP = "https://wa.me/51921585977?text=Hola,%20solicito%20diagnostico%20gratis%20para%20mi%20negocio";

function ProjectsPage() {
  const items = [
    {
      id: "vadillo",
      name: "Vadillo Broker",
      cat: "Seguros & Inmobiliaria · Lima / Perú",
      desc: "Plataforma web de alta confianza. PageSpeed 99/100 y SEO 100/100.",
      img: projVadilloMockup,
    },
    {
      id: "miraflores",
      name: "Miraflores Boutique Floral",
      cat: "Florería · Lima",
      desc: "Tienda online premium con catálogo y pedidos desde el celular.",
      img: projMiraflores,
    },
    {
      id: "bocafest",
      name: "Bocafest",
      cat: "Food box · Ayacucho",
      desc: "Catálogo interactivo con extras y panel de administración.",
      img: projBocafestMockup,
    },
    {
      id: "velorio",
      name: "Florería para Velorio",
      cat: "Servicio funerario · Lima",
      desc: "Pedidos urgentes de arreglos con entrega el mismo día.",
      img: projVelorioMockup,
    },
    {
      id: "sorpresas",
      name: "Sorpresas Ayacucho",
      cat: "Detalles · Ayacucho",
      desc: "Catálogo web interactivo con pedidos directos a WhatsApp.",
      img: projSorpresas,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Nav />
      
      <main className="pt-32 pb-24">
        {/* Header Section */}
        <section className="mx-auto max-w-7xl px-6 md:px-10 mb-16">
          <Reveal>
            <p className="eyebrow mb-4">Portafolio</p>
            <h1 className="text-4xl md:text-6xl font-display font-medium text-foreground tracking-tight max-w-3xl">
              Sistemas entregados, no promesas.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Cada proyecto empezó verificando la demanda. Estos son negocios reales vendiendo mejor.
            </p>
          </Reveal>
        </section>

        {/* Grid Section */}
        <section className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-8">
            {items.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.1}>
                <div className="group rounded-3xl bg-card border border-border/40 p-5 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row gap-6 h-full">
                  <div className="aspect-[4/3] md:w-2/5 overflow-hidden rounded-2xl bg-muted relative shrink-0">
                    <img
                      src={p.img}
                      alt={`${p.name} — ${p.cat}`}
                      loading="lazy"
                      width={600}
                      height={450}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-2">
                    <div>
                      <div className="text-[10px] eyebrow text-muted-foreground mb-2">{p.cat}</div>
                      <h3 className="font-display font-semibold text-2xl text-foreground mb-3 tracking-tight">
                        {p.name}
                      </h3>
                      <p className="text-sm text-muted-foreground/80 leading-relaxed mb-6">
                        {p.desc}
                      </p>
                    </div>
                    <div>
                      <Link
                        to={`/proyectos/${p.id}`}
                        className="btn-outline w-full text-center py-2.5 text-xs rounded-xl font-medium block"
                      >
                        Ver caso
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="mx-auto max-w-5xl px-6 md:px-10 pt-28 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-display font-medium text-foreground tracking-tight mb-8">
              ¿Quieres tu negocio aquí?
            </h2>
            <Link to="/diagnostico" className="btn-amber">
              Solicita tu diagnóstico
            </Link>
          </Reveal>
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
