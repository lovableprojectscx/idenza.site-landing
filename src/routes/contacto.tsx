import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";
import { Reveal } from "./index"; // reuse Reveal animation wrapper

import { sendContactEmail } from "@/lib/mail";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    links: [
      { rel: "canonical", href: "https://idenza.site/contacto" }
    ],
    meta: [
      { title: "Contacto · Diseño Web en Perú | IDENZA" },
      { name: "description", content: "Hablemos por WhatsApp o correo. Diseño web, catálogos y sistemas de pedidos para negocios en Perú. Te respondemos directo, sin bots." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "IDENZA" },
      { property: "og:locale", content: "es_PE" },
      { property: "og:url", content: "https://idenza.site/contacto" },
      { property: "og:title", content: "Contacto · Diseño Web en Perú | IDENZA" },
      { property: "og:description", content: "Hablemos por WhatsApp o correo. Diseño web, catálogos y sistemas de pedidos para negocios en Perú. Te respondemos directo, sin bots." },
      { property: "og:image", content: "https://idenza.site/og-home.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contacto · Diseño Web en Perú | IDENZA" },
      { name: "twitter:description", content: "Hablemos por WhatsApp o correo. Diseño web, catálogos y sistemas de pedidos para negocios en Perú. Te respondemos directo, sin bots." },
      { name: "twitter:image", content: "https://idenza.site/og-home.jpg" },
    ],
  }),
  component: ContactPage,
});

const WHATSAPP = "https://wa.me/51921585977?text=Hola,%20tengo%20una%20consulta%20para%20mi%20negocio";

function ContactPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    whatsapp: "",
    mensaje: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.whatsapp) return;

    setSubmitted(true);

    // Call server function to send Zoho Mail notification
    try {
      await sendContactEmail({ data: formData });
    } catch (error) {
      console.error("Failed to send contact email:", error);
    }

    // Build prefilled WhatsApp message
    const message = `Hola IDENZA, te contacto desde la web de IDENZA. Mis datos son:
- Nombre: ${formData.nombre}
- WhatsApp: ${formData.whatsapp}
- Mensaje: ${formData.mensaje || "Sin mensaje adicional"}`;

    const encodedText = encodeURIComponent(message);
    const waUrl = `https://wa.me/51921585977?text=${encodedText}`;

    // Redirect to WhatsApp
    window.location.href = waUrl;
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Nav />

      <main className="pt-32 pb-24">
        <section className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
            {/* Column 1: Info */}
            <div className="md:col-span-6 space-y-10">
              <Reveal>
                <p className="eyebrow mb-4">Contacto</p>
                <h1 className="text-4xl md:text-5xl font-display font-medium text-foreground tracking-tight mb-6">
                  Hablemos.
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                  Escríbeme directo. Respondemos en menos de 24 horas.
                </p>
              </Reveal>

              <Reveal delay={0.05} className="space-y-6">
                <div className="space-y-2">
                  <div className="text-[10px] eyebrow text-muted-foreground/60">WhatsApp</div>
                  <div>
                    <a
                      href={WHATSAPP}
                      className="btn-amber inline-flex items-center gap-2"
                    >
                      Escribir al +51 921 585 977
                    </a>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-[10px] eyebrow text-muted-foreground/60">Correo electrónico</div>
                  <a
                    href="mailto:jack@idenza.site"
                    className="text-lg font-medium text-foreground hover:text-amber transition-colors duration-300"
                  >
                    jack@idenza.site
                  </a>
                </div>

                <div className="space-y-1">
                  <div className="text-[10px] eyebrow text-muted-foreground/60">Ubicación</div>
                  <p className="text-lg text-foreground">
                    Ayacucho, Perú.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Atención a todo el país, 100% online.
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="text-[10px] eyebrow text-muted-foreground/60">Redes sociales</div>
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com/idenza.site"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-medium text-foreground hover:text-amber transition-colors duration-300"
                    >
                      Facebook
                    </a>
                    <a
                      href="https://www.tiktok.com/@idenza.site"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-medium text-foreground hover:text-amber transition-colors duration-300"
                    >
                      TikTok
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Column 2: Form */}
            <div className="md:col-span-6">
              <Reveal delay={0.1}>
                <div className="bg-card border border-border/40 p-8 rounded-3xl shadow-xl">
                  <h2 className="font-display font-bold text-xl text-foreground mb-6">Envíame un mensaje</h2>
                  
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

                    <div>
                      <label htmlFor="mensaje" className="block text-[10px] eyebrow text-muted-foreground/80 mb-2">
                        Mensaje
                      </label>
                      <textarea
                        id="mensaje"
                        rows={4}
                        value={formData.mensaje}
                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                        className="w-full bg-background border border-border/60 focus:border-amber/50 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors duration-300 resize-none"
                        placeholder="Cuéntame sobre tu negocio o consulta..."
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submitted}
                        className="btn-amber w-full py-3.5 text-center text-sm font-semibold rounded-xl flex items-center justify-center gap-2"
                      >
                        {submitted ? "Redireccionando..." : "Enviar a WhatsApp"}
                      </button>
                    </div>
                  </form>
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


