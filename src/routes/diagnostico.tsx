import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";
import { Reveal } from "./index"; // reuse Reveal animation wrapper

import { sendDiagnosticEmail } from "@/lib/mail";

export const Route = createFileRoute("/diagnostico")({
  head: () => ({
    links: [
      { rel: "canonical", href: "https://idenza.site/diagnostico" }
    ],
    meta: [
      { title: "Diagnóstico Web Gratis para tu Negocio | IDENZA" },
      { name: "description", content: "Solicita tu diagnóstico web gratis: te mostramos si tus clientes te buscan y dónde pierdes ventas. Sin compromiso. IDENZA, diseño web en Perú." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "IDENZA" },
      { property: "og:locale", content: "es_PE" },
      { property: "og:url", content: "https://idenza.site/diagnostico" },
      { property: "og:title", content: "Diagnóstico Web Gratis para tu Negocio | IDENZA" },
      { property: "og:description", content: "Solicita tu diagnóstico web gratis: te mostramos si tus clientes te buscan y dónde pierdes ventas. Sin compromiso. IDENZA, diseño web en Perú." },
      { property: "og:image", content: "https://idenza.site/og-home.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Diagnóstico Web Gratis para tu Negocio | IDENZA" },
      { name: "twitter:description", content: "Solicita tu diagnóstico web gratis: te mostramos si tus clientes te buscan y dónde pierdes ventas. Sin compromiso. IDENZA, diseño web en Perú." },
      { name: "twitter:image", content: "https://idenza.site/og-home.jpg" },
    ],
  }),
  component: DiagnosticPage,
});

function DiagnosticPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    negocio: "",
    ciudad: "",
    whatsapp: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.whatsapp) return;

    setSubmitted(true);

    // Call server function to send Zoho Mail notification
    try {
      await sendDiagnosticEmail({ data: formData });
    } catch (error) {
      console.error("Failed to send diagnostic email:", error);
    }

    // Build prefilled WhatsApp message
    const message = `Hola IDENZA, solicito mi diagnóstico gratuito. Vengo de la web. Mis datos: Nombre: ${formData.nombre}, Negocio y rubro: ${formData.negocio || "No especificado"}, Ciudad: ${formData.ciudad || "No especificada"}, WhatsApp: ${formData.whatsapp}`;

    const encodedText = encodeURIComponent(message);
    const waUrl = `https://wa.me/51921585977?text=${encodedText}`;

    // Redirect to WhatsApp
    window.location.href = waUrl;
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Nav />

      <main className="pt-32 pb-24">
        <section className="mx-auto max-w-xl px-6">
          <Reveal>
            <p className="eyebrow mb-4">Diagnóstico gratuito</p>
            <h1 className="text-4xl md:text-5xl font-display font-medium text-foreground tracking-tight mb-6">
              Antes de construir, verificamos.
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Te hago un diagnóstico gratis de tu negocio. Reviso si tus clientes ya te buscan, dónde se te están escapando las ventas, y qué te conviene. Sin compromiso y sin tecnicismos.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="bg-card border border-border/40 p-8 rounded-3xl shadow-xl">
              <h2 className="font-display font-bold text-xl text-foreground mb-6">Completa tus datos</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="block text-[10px] eyebrow text-muted-foreground/80 mb-2">
                    Tu nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full bg-background border border-border/60 focus:border-amber/50 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors duration-300"
                    placeholder="Ej. Carlos Mendoza"
                  />
                </div>

                <div>
                  <label htmlFor="negocio" className="block text-[10px] eyebrow text-muted-foreground/80 mb-2">
                    Negocio y rubro
                  </label>
                  <input
                    type="text"
                    id="negocio"
                    value={formData.negocio}
                    onChange={(e) => setFormData({ ...formData, negocio: e.target.value })}
                    className="w-full bg-background border border-border/60 focus:border-amber/50 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors duration-300"
                    placeholder="Ej. Marca de ropa"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="ciudad" className="block text-[10px] eyebrow text-muted-foreground/80 mb-2">
                      Ciudad
                    </label>
                    <input
                      type="text"
                      id="ciudad"
                      value={formData.ciudad}
                      onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                      className="w-full bg-background border border-border/60 focus:border-amber/50 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors duration-300"
                      placeholder="Ej. Ayacucho"
                    />
                  </div>

                  <div>
                    <label htmlFor="whatsapp" className="block text-[10px] eyebrow text-muted-foreground/80 mb-2">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full bg-background border border-border/60 focus:border-amber/50 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors duration-300"
                      placeholder="Ej. +51 912 345 678"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitted}
                    className="btn-amber w-full py-3.5 text-center text-sm font-semibold rounded-xl flex items-center justify-center gap-2"
                  >
                    {submitted ? "Redireccionando..." : "Solicitar mi diagnóstico"}
                  </button>
                </div>
              </form>
              
              <div className="mt-6 text-center">
                <span className="text-xs text-muted-foreground italic">
                  Respondemos en menos de 24 horas.
                </span>
              </div>
            </div>
          </Reveal>

          {/* Benefits Grid */}
          <div className="mt-16 border-t border-border/30 pt-16">
            <Reveal>
              <h2 className="font-display font-bold text-xl text-foreground mb-8 text-center">
                Qué recibes en tu diagnóstico:
              </h2>
              <div className="grid sm:grid-cols-3 gap-6 text-sm text-muted-foreground/90">
                <div className="p-6 rounded-2xl bg-card border border-border/30 space-y-3">
                  <div className="text-lg font-bold text-amber font-display">01</div>
                  <h3 className="font-semibold text-foreground">Demanda real</h3>
                  <p className="leading-relaxed">Verificamos si hay demanda real y búsquedas activas de tu rubro en tu ciudad.</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border/30 space-y-3">
                  <div className="text-lg font-bold text-amber font-display">02</div>
                  <h3 className="font-semibold text-foreground">Fugas de ventas</h3>
                  <p className="leading-relaxed">Analizamos dónde se te están escapando los contactos y clientes potenciales actualmente.</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border/30 space-y-3">
                  <div className="text-lg font-bold text-amber font-display">03</div>
                  <h3 className="font-semibold text-foreground">Sistema recomendado</h3>
                  <p className="leading-relaxed">Determinamos qué tipo de canal y sistema web te conviene construir, y cuál no.</p>
                </div>
              </div>
            </Reveal>
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


