import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useInView, animate } from "framer-motion";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";
import { Ban, TrendingDown, Search } from "lucide-react";
import heroUmbrella from "@/assets/hero-umbrella.webp";
import projMiraflores from "@/assets/proj-miraflores.webp";
import projVelorioMockup from "@/assets/proj-velorio-mockup.webp";
import projBocafestMockup from "@/assets/proj-bocafest-mockup.webp";
import projSorpresas from "@/assets/proj-sorpresas.webp";
import jackPhoto from "@/assets/jack.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      { rel: "preload", as: "image", href: heroUmbrella, fetchpriority: "high" },
      { rel: "canonical", href: "https://idenza.site/" }
    ],
    meta: [
      { title: "Diseño Web en Perú · Páginas y Catálogos WhatsApp | IDENZA" },
      {
        name: "description",
        content:
          "Creamos tu página web, catálogo online y sistema de pedidos a WhatsApp. Verificamos la demanda antes de construir. Diseño web con datos, en Perú.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "IDENZA" },
      { property: "og:locale", content: "es_PE" },
      { property: "og:url", content: "https://idenza.site/" },
      { property: "og:title", content: "Diseño Web en Perú · Páginas y Catálogos WhatsApp | IDENZA" },
      {
        property: "og:description",
        content:
          "Creamos tu página web, catálogo online y sistema de pedidos a WhatsApp. Verificamos la demanda antes de construir. Diseño web con datos, en Perú.",
      },
      { property: "og:image", content: "https://idenza.site/og-home.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Diseño Web en Perú · Páginas y Catálogos WhatsApp | IDENZA" },
      {
        name: "twitter:description",
        content:
          "Creamos tu página web, catálogo online y sistema de pedidos a WhatsApp. Verificamos la demanda antes de construir. Diseño web con datos, en Perú.",
      },
      { name: "twitter:image", content: "https://idenza.site/og-home.jpg" },
      {
        script: [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "IDENZA",
              "url": "https://idenza.site",
              "logo": "https://idenza.site/logo.png",
              "image": "https://idenza.site/og-home.jpg",
              "description": "Diseño y desarrollo web para negocios en Perú. Creamos tu página web, catálogo online y sistema de pedidos a WhatsApp. Verificamos la demanda antes de construir.",
              "priceRange": "S/850 - S/2900",
              "telephone": "+51921585977",
              "email": "jack@idenza.site",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ayacucho",
                "addressCountry": "PE"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Perú"
              },
              "founder": {
                "@type": "Person",
                "name": "Jack Luján",
                "jobTitle": "Fundador"
              },
              "sameAs": [
                "https://www.facebook.com/idenza.site",
                "https://www.tiktok.com/@idenza.site",
                "https://www.instagram.com/jacklujanm"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Planes IDENZA",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Presencia · Web + WhatsApp" },
                    "price": "850",
                    "priceCurrency": "PEN"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Catálogo Mensual · con Tracker" },
                    "price": "500",
                    "priceCurrency": "PEN"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Catálogo único" },
                    "price": "1650",
                    "priceCurrency": "PEN"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Tienda Completa" },
                    "price": "2900",
                    "priceCurrency": "PEN"
                  }
                ]
              }
            }),
          },
        ],
      },
    ],
  }),
  component: Landing,
});

const WHATSAPP =
  "https://wa.me/51921585977?text=Hola%20IDENZA%2C%20quiero%20un%20diagn%C3%B3stico";

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <WhyWebsDie />
      <Method />
      <Projects />
      <Tracker />
      <StatsStrip />
      <Plans />
      <About />
      <FinalCta />
      <Footer />
    </div>
  );
}

/* ---------- Reveal ---------- */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
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
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- WHY WEBS DIE ---------- */
function WhyWebsDie() {
  const points = [
    { label: "Sin gestión", icon: Ban },
    { label: "Sin tráfico", icon: TrendingDown },
    { label: "Sin demanda verificada", icon: Search },
  ];

  return (
    <section className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-5xl px-6 md:px-10 py-24 md:py-32 text-center">
        <Reveal>
          <p className="eyebrow mb-4">El problema</p>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-foreground tracking-tight mb-16">
            Por qué las webs mueren.
          </h2>
        </Reveal>

        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto items-start">
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.label} delay={i * 0.1}>
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center text-foreground/75 border border-foreground/10">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-base font-display font-semibold tracking-tight text-foreground/90 leading-tight">
                    {p.label}
                  </h3>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-20">
            <span className="text-2xl md:text-4xl font-display font-medium text-foreground tracking-tight leading-tight italic block max-w-2xl mx-auto">
              "Una web sola es un barco de lujo sin mar."
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- COUNTER ---------- */
function Counter({ value, decimals = 0, suffix = "" }: { value: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(latest) {
          if (ref.current) {
            ref.current.textContent = latest.toFixed(decimals);
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, value, decimals]);

  return (
    <span className="font-sans font-medium tabular-nums text-5xl md:text-7xl tracking-tight text-foreground">
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}

/* ---------- STATS STRIP ---------- */
function StatsStrip() {
  const stats = [
    { value: 1284, decimals: 0, suffix: "", phrase: "Tráfico mensual promedio", source: "Fuente: Google Analytics" },
    { value: 97, decimals: 0, suffix: "", phrase: "Pedidos cerrados directo", source: "Fuente: IDENZA Tracker" },
    { value: 7.6, decimals: 1, suffix: "%", phrase: "Tasa conversión real", source: "Fuente: IDENZA Tracker" },
    { value: 2, decimals: 0, suffix: "", phrase: "Minutos por pedido", source: "Fuente: Caso Florerías" },
  ];

  return (
    <section className="border-t border-border/40 bg-[color:var(--secondary)]/35">
      <div className="mx-auto max-w-5xl px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 text-center">
          {stats.map((s, i) => (
            <Reveal key={s.phrase} delay={i * 0.05}>
              <div className="flex flex-col items-center space-y-3">
                <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
                <div className="text-[10px] md:text-xs font-sans font-medium uppercase tracking-wider text-muted-foreground leading-snug max-w-[150px]">
                  {s.phrase}
                </div>
                <div className="text-[9px] text-muted-foreground/60 select-none">
                  {s.source}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- LOGO COMPONENT REMOVED (now imported from components) ---------- /* ---------- NAV ---------- */
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
          <Logo light={!(solid || open)} />
        </Link>
        <nav className="hidden md:flex items-center gap-9 text-sm">
          {links.map((l) =>
            l.href.startsWith("/#") ? (
              <a
                key={l.href}
                href={l.href}
                className={`transition-colors duration-300 ${
                  solid || open
                    ? "text-foreground/75 hover:text-foreground"
                    : "text-white/75 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                to={l.href}
                className={`transition-colors duration-300 ${
                  solid || open
                    ? "text-foreground/75 hover:text-foreground"
                    : "text-white/75 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            )
          )}
        </nav>
        <Link
          to="/diagnostico"
          className={`hidden md:inline-flex text-sm border-b pb-0.5 transition-colors duration-300 ${
            solid || open
              ? "text-foreground/80 hover:text-foreground border-foreground/30 hover:border-foreground"
              : "text-white/80 hover:text-white border-white/30 hover:border-white"
          }`}
        >
          Solicitar diagnóstico
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 -mr-2"
          aria-label="Menú"
        >
          <div className={`w-6 h-px mb-1.5 transition-all duration-300 ${solid || open ? "bg-foreground" : "bg-white"}`} />
          <div className={`w-6 h-px mb-1.5 transition-all duration-300 ${solid || open ? "bg-foreground" : "bg-white"}`} />
          <div className={`w-6 h-px transition-all duration-300 ${solid || open ? "bg-foreground" : "bg-white"}`} />
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

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section
      id="top"
      className="relative h-[94vh] min-h-[640px] w-full overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={heroUmbrella}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/landing.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[#0E1420]/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E1420] via-[#0E1420]/35 to-transparent" />

      <div className="relative z-10 h-full mx-auto max-w-7xl px-6 md:px-10 flex flex-col justify-end pb-16 md:pb-24">
        <div className="max-w-6xl">
          <p className="eyebrow mb-4 text-white/50">Consultoría de crecimiento digital · Perú</p>
          <h1 className="font-display font-medium text-[2.75rem] leading-[1.05] sm:text-6xl md:text-[6.5rem] text-white tracking-tight">
            Demanda real
            <br />
            antes que diseño.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
            Verificamos que tu cliente ya te busca. Recién ahí construimos tu web o catálogo.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link to="/diagnostico" className="btn-amber">
              Solicitar diagnóstico
            </Link>
            <Link to="/proyectos" className="btn-ghost !border-white/30 !text-white hover:!border-white hover:!bg-white/10">
              Ver proyectos
            </Link>
            <a href="#planes" className="btn-ghost !border-white/30 !text-white hover:!border-white hover:!bg-white/10">
              Ver planes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- METHOD ---------- */
function Method() {
  const steps = [
    {
      n: "01",
      t: "Investigación",
      d: "Verificamos con datos reales que tus clientes ya te están buscando, y qué buscan.",
    },
    {
      n: "02",
      t: "Sistema",
      d: "Construimos tu marca, tu web y el flujo hasta WhatsApp sobre esa demanda comprobada.",
    },
    {
      n: "03",
      t: "Evidencia",
      d: "Un panel con IA que mide tus visitas y tus ventas en vivo. Sin promesas, solo números.",
    },
  ];
  return (
    <section id="metodo" className="border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
        <Reveal className="mb-16">
          <p className="eyebrow mb-4">Método</p>
          <h2 className="text-4xl md:text-6xl font-display font-medium text-foreground tracking-tight max-w-4xl">
            Investigación, sistema, evidencia.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Diseñamos y desarrollamos tu página web, tienda virtual y tu catálogo online sobre demanda comprobada.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="p-8 bg-card border border-border/40 hover:border-amber/30 transition-all duration-300 shadow-xl rounded-2xl h-full flex flex-col justify-between">
                <div>
                  <div className="eyebrow mb-8 text-foreground/50">{s.n} · {s.t}</div>
                  <p className="text-muted-foreground/90 leading-relaxed text-sm">
                    {s.d}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROJECTS ---------- */
function Projects() {
  const items = [
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
  ];

  return (
    <section id="proyectos" className="border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
        <Reveal className="mb-16">
          <p className="eyebrow mb-4">Proyectos</p>
          <h2 className="text-4xl md:text-6xl font-display font-medium text-foreground tracking-tight max-w-3xl">
            Sistemas entregados, no promesas.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Casos reales de negocios vendiendo más rápido.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div className="group rounded-2xl bg-card border border-border/40 p-4 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted relative mb-6">
                  <img
                    src={p.img}
                    alt={`${p.name} — ${p.cat}`}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
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
                      className="btn-outline w-full text-center py-2.5 text-xs rounded-xl"
                    >
                      Ver caso
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Reveal delay={0.2}>
            <Link
              to="/proyectos"
              className="btn-outline px-8 py-3.5 inline-flex items-center justify-center rounded-xl text-sm"
            >
              Ver todos los proyectos
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  return (
    <section id="testimonios" className="border-t border-border/40 bg-background/50">
      <div className="mx-auto max-w-5xl px-6 md:px-10 py-24 md:py-32">
        <Reveal className="mb-16 text-center">
          <p className="eyebrow mb-4">Lo que dicen</p>
          <h2 className="text-4xl md:text-6xl font-display font-medium text-foreground tracking-tight">
            En sus palabras.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
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
              <h3 className="font-display font-semibold text-xl text-foreground mb-2">Bocafest · Ayacucho</h3>
              <p className="text-sm text-muted-foreground">
                Video testimonial real sobre el funcionamiento automático del catálogo.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- TRACKER ---------- */
function Tracker() {
  return (
    <section className="border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <p className="eyebrow mb-4">Tracker</p>
          <h2 className="text-4xl md:text-6xl font-display font-medium text-foreground tracking-tight">
            El dato, no la promesa.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            El panel de tu propio negocio, midiendo en vivo.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <TrackerMock />
        </Reveal>
      </div>
    </section>
  );
}

function TrackerMock() {
  return (
    <div className="rounded-2xl bg-card border border-border/40 p-6 shadow-2xl relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-amber/5 blur-[80px] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-[10px] eyebrow text-muted-foreground tracking-wider">Métricas del negocio</div>
          <div className="text-xl font-display font-semibold text-foreground mt-0.5">IDENZA Tracker</div>
        </div>
        <div className="flex items-center gap-2 bg-emerald-500/10 text-emerald-600 text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-500/20 select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>EN VIVO</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
        {[
          { k: "Visitas", v: "1,284", trend: "+12.4%" },
          { k: "A WhatsApp", v: "97", trend: "+8.3%" },
          { k: "Conversión", v: "7.6%", trend: "+1.2%" },
        ].map((s) => (
          <div key={s.k} className="p-2.5 sm:p-3 rounded-xl bg-background border border-border/40 hover:border-amber/30 transition-all duration-300 group flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[9px] sm:text-[10px] font-sans font-medium uppercase tracking-wider text-muted-foreground/80 leading-none">{s.k}</span>
            </div>
            <div className="mt-2.5">
              <div className="text-xl font-sans font-medium tabular-nums text-foreground tracking-tight leading-none">{s.v}</div>
              <div className="text-[9px] font-sans font-medium tabular-nums text-emerald-600 mt-1 select-none flex items-center gap-0.5">
                <span>▲</span>
                <span>{s.trend}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="space-y-2.5">
        <div className="flex justify-between items-center text-[10px] eyebrow text-muted-foreground">
          <span>Pedidos esta semana</span>
          <span>Lun - Dom</span>
        </div>
        <div className="flex items-end gap-1.5 h-28 pt-2 px-1">
          {[30, 55, 40, 70, 45, 90, 65, 80, 50, 95, 75, 100].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center group relative h-full justify-end">
              {/* Tooltip */}
              <div className="absolute bottom-[calc(100%+4px)] bg-amber text-ink text-[9px] font-bold py-0.5 px-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none select-none shadow-md z-10 font-display">
                {Math.round(h * 1.5)}
              </div>
              {/* Bar */}
              <div
                className="w-full rounded-t-md bg-gradient-to-t from-amber-deep to-amber group-hover:from-amber group-hover:to-ink/30 transition-all duration-300 shadow-[0_0_12px_rgba(226,166,61,0.05)] group-hover:shadow-[0_0_16px_rgba(226,166,61,0.25)]"
                style={{ height: `${h}%` }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- PLANS ---------- */
function Plans() {
  const plans = [
    {
      name: "Presencia",
      price: "S/ 850",
      sub: "Pago único",
      features: ["Web + WhatsApp", "Formulario", "SEO base"],
    },
    {
      name: "Catálogo Mensual",
      price: "S/ 500",
      sub: "+ S/ 149 / mes",
      features: [
        "Catálogo con extras",
        "Pedido a WhatsApp",
        "Tracker mensual",
        "Hosting incluido",
      ],
      highlight: true,
    },
    {
      name: "Catálogo único",
      price: "S/ 1,650",
      sub: "Pago único",
      features: ["Catálogo completo", "Sin mensualidad", "Tu hosting"],
    },
    {
      name: "Tienda Completa",
      price: "S/ 2,900",
      sub: "Pago único",
      features: ["Pagos online", "Inventario", "Panel avanzado"],
    },
  ];
  return (
    <section id="planes" className="border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
        <Reveal>
          <p className="eyebrow mb-6">Planes</p>
          <h2 className="text-4xl md:text-6xl font-display font-medium text-foreground tracking-tight max-w-3xl">
            Precio consultivo. Sin humo.
          </h2>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((p, idx) => (
            <Reveal key={p.name} delay={idx * 0.06}>
              <div
                className={`p-8 rounded-2xl bg-card border border-border/40 hover:border-amber/30 hover:shadow-2xl transition-all duration-300 flex flex-col h-full relative ${
                  p.highlight ? "ring-1 ring-amber shadow-2xl" : ""
                }`}
              >
                {p.highlight && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-amber rounded-t-2xl" />
                )}
                <h3 className="font-display font-bold text-2xl text-foreground mb-6">{p.name}</h3>
                <div className="font-display text-4xl font-bold text-foreground tabular-nums">
                  {p.price}
                </div>
                <div className="text-xs text-muted-foreground mt-2 mb-8">
                  {p.sub}
                </div>
                <ul className="space-y-3.5 text-sm text-foreground/80 mb-10 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3 items-start">
                      <span className="w-2.5 h-px bg-foreground/30 mt-2.5 flex-none" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP}
                  className={p.highlight ? "btn-amber w-full" : "btn-outline w-full"}
                >
                  Solicitar
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground max-w-2xl">
          Proyectos a medida y empresas: bajo cotización, tras el diagnóstico gratuito.
        </p>
      </div>
    </section>
  );
}

/* ---------- ABOUT / EL FUNDADOR ---------- */
function About() {
  return (
    <section id="nosotros" className="border-t border-border/40">
      <div className="mx-auto max-w-5xl px-6 md:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Column 1: Text */}
          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow mb-6">El fundador</p>
              <h2 className="text-4xl md:text-5xl font-display font-medium text-foreground tracking-tight max-w-xl mb-8">
                Jack Luján, fundador de IDENZA.
              </h2>
              <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  De Ayacucho, apasionado por la tecnología. Empecé invirtiendo en publicidad y persiguiendo clientes que nunca compraban. Ahí aprendí que el problema nunca fue la web bonita. Era construir sin verificar que tu cliente ya te buscaba.
                </p>
                <p>
                  Por eso dirijo IDENZA con una regla: primero verificamos la demanda, después construimos. Código propio, sin plantillas, resultados medidos en vivo. No una agencia impersonal, sino una consultora donde el fundador te atiende de frente.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Column 2: Photo */}
          <div className="md:col-span-5 flex justify-center">
            <Reveal delay={0.1} className="relative w-full max-w-[320px] aspect-square block">
              <div className="relative w-full h-full group">
                {/* Decorative background frame offset (Clay Style) */}
                <div className="absolute inset-0 bg-[#E2A63D]/10 rounded-[2rem] translate-x-3 translate-y-3 border border-[#E2A63D]/25 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5" />
                
                {/* Main image container */}
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-2 border-foreground/10 bg-card shadow-2xl transition-transform duration-500 hover:-translate-x-1 hover:-translate-y-1">
                  <img
                    src={jackPhoto}
                    alt="Jack Luján — Fundador de IDENZA"
                    width={600}
                    height={600}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle inner shadow / overlay */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2rem] pointer-events-none" />
                  
                  {/* Floating Badge (Founder) */}
                  <div className="absolute bottom-4 left-4 bg-[#0E1420] text-[#F4F2ED] text-[10px] eyebrow px-3 py-1.5 rounded-full border border-white/10 shadow-lg select-none">
                    Founder
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA ---------- */
function FinalCta() {
  return (
    <section
      id="contacto"
      className="border-t border-border/40"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-10 py-28 md:py-36">
        <Reveal>
          <p className="eyebrow mb-6">Diagnóstico gratuito</p>
          <h2 className="text-4xl md:text-7xl font-display font-medium text-foreground tracking-tight leading-[0.98] mb-6">
            Antes de construir, verificamos.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mb-12">
            Solicita tu diagnóstico gratis: te muestro si tu cliente te busca, y dónde se te están escapando las ventas. Sin compromiso.
          </p>
          <div>
            <Link to="/diagnostico" className="btn-amber">
              Solicitar diagnóstico
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


