import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";
import { Reveal } from "./index"; // reuse Reveal animation wrapper
import jackPhoto from "@/assets/jack.webp";
import { Facebook, Instagram } from "lucide-react";

export const Route = createFileRoute("/fundador")({
  head: () => ({
    links: [
      { rel: "canonical", href: "https://idenza.site/fundador" }
    ],
    meta: [
      { title: "Jack Luján, Fundador de IDENZA · Diseño Web Perú" },
      { name: "description", content: "Conoce a Jack Luján, fundador de IDENZA. Diseño y desarrollo web con datos para negocios en Perú. Sin plantillas, sin humo, con la cara de por medio." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "IDENZA" },
      { property: "og:locale", content: "es_PE" },
      { property: "og:url", content: "https://idenza.site/fundador" },
      { property: "og:title", content: "Jack Luján, Fundador de IDENZA · Diseño Web Perú" },
      { property: "og:description", content: "Conoce a Jack Luján, fundador de IDENZA. Diseño y desarrollo web con datos para negocios en Perú. Sin plantillas, sin humo, con la cara de por medio." },
      { property: "og:image", content: "https://idenza.site/og-home.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Jack Luján, Fundador de IDENZA · Diseño Web Perú" },
      { name: "twitter:description", content: "Conoce a Jack Luján, fundador de IDENZA. Diseño y desarrollo web con datos para negocios en Perú. Sin plantillas, sin humo, con la cara de por medio." },
      { name: "twitter:image", content: "https://idenza.site/og-home.jpg" },
      {
        script: [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "mainEntity": {
                "@type": "Person",
                "name": "Jack Franklyn Quispe Luján",
                "jobTitle": "Fundador y Consultor de Crecimiento Digital",
                "worksFor": {
                  "@type": "Organization",
                  "name": "IDENZA",
                  "url": "https://idenza.site"
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Ayacucho",
                  "addressCountry": "PE"
                }
              }
            }),
          },
        ],
      },
    ],
  }),
  component: FounderPage,
});

function TiktokIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

function FounderPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Nav />

      <main className="pt-32 pb-24">
        <section className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
            {/* Column 1: Text */}
            <div className="md:col-span-7">
              <Reveal>
                <p className="eyebrow mb-6">El fundador</p>
                <h1 className="text-4xl md:text-5xl font-display font-medium text-foreground tracking-tight mb-8">
                  Jack Luján, fundador de IDENZA.
                </h1>
                
                <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Soy Jack, de Ayacucho, y me apasiona la tecnología. Fundé IDENZA para resolver algo que viví en carne propia: negocios que invierten en digital y no ven ventas.
                  </p>
                  <p>
                    Empecé como muchos, gastando en publicidad y persiguiendo clientes que nunca compraban. Ahí entendí que el problema no era la web bonita, sino construir sin saber si alguien te buscaba de verdad.
                  </p>
                  <p>
                    Por eso IDENZA trabaja al revés. Primero audito tu negocio y verifico la demanda con datos, y recién ahí construyo tu sistema. Código propio, sin plantillas, y un panel que mide tus resultados en vivo.
                  </p>
                  <p>
                    No soy una agencia impersonal. Cuando trabajas con IDENZA, te atiende el fundador, de frente, con datos y sin humo.
                  </p>
                  <p className="font-medium text-foreground italic border-l-2 border-amber pl-4 mt-8">
                    Mi visión: construir la consultora que le enseñe a los negocios peruanos a crecer en digital sin quemar su plata.
                  </p>
                </div>

                {/* Sígueme Social Section */}
                <div className="mt-12 pt-8 border-t border-border/40 space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Sígueme</h3>
                  <p className="text-sm text-muted-foreground">
                    Comparto lo que aprendo construyendo negocios digitales.
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://www.facebook.com/jack.quispe.313"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl border border-border/60 hover:border-amber hover:text-amber text-foreground transition-all duration-300 bg-card flex items-center justify-center"
                      title="Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.instagram.com/jacklujanm/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl border border-border/60 hover:border-amber hover:text-amber text-foreground transition-all duration-300 bg-card flex items-center justify-center"
                      title="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.tiktok.com/@jackfql"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl border border-border/60 hover:border-amber hover:text-amber text-foreground transition-all duration-300 bg-card flex items-center justify-center"
                      title="TikTok"
                    >
                      <TiktokIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="mt-10">
                  <Link to="/diagnostico" className="btn-amber">
                    Solicitar diagnóstico
                  </Link>
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


