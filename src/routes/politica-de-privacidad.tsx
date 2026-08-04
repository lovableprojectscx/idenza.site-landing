import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";
import { Reveal } from "./index";
import { ShieldCheck, Lock, FileText, Mail, Phone, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/politica-de-privacidad")({
  head: () => ({
    links: [
      { rel: "canonical", href: "https://idenza.site/politica-de-privacidad" }
    ],
    meta: [
      { title: "Política de Privacidad | IDENZA Perú" },
      { name: "description", content: "Política de Privacidad y Protección de Datos Personales de IDENZA en cumplimiento con la Ley N° 29733 del Perú. Transparencia y seguridad para tu información." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "IDENZA" },
      { property: "og:locale", content: "es_PE" },
      { property: "og:url", content: "https://idenza.site/politica-de-privacidad" },
      { property: "og:title", content: "Política de Privacidad | IDENZA Perú" },
      { property: "og:description", content: "Política de Privacidad y Protección de Datos Personales de IDENZA en cumplimiento con la Ley N° 29733 del Perú." },
      { property: "og:image", content: "https://idenza.site/og-home.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Nav />

      <main className="pt-32 pb-24">
        <section className="mx-auto max-w-4xl px-6 md:px-10">
          <Reveal>
            <div className="flex items-center gap-2.5 text-xs font-bold text-amber uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>Transparencia & Protección de Datos</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-medium text-foreground tracking-tight mb-6">
              Política de Privacidad
            </h1>
            <p className="text-sm text-muted-foreground mb-10">
              Última actualización: Agosto 2026 · Cumplimiento con la Ley N° 29733 del Perú
            </p>
          </Reveal>

          <div className="space-y-12 text-foreground/85 leading-relaxed text-base md:text-lg">
            {/* Introducción */}
            <Reveal delay={0.05}>
              <div className="bg-card border border-border/60 rounded-2xl p-6 md:p-8 space-y-4 shadow-sm">
                <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground flex items-center gap-3">
                  <Lock className="w-5 h-5 text-amber shrink-0" />
                  1. Titular del Tratamiento y Compromiso
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  En <strong className="text-foreground">IDENZA</strong> (representada por Jack Lujan, con domicilio en Ayacucho/Lima, Perú), nos tomamos muy en serio la privacidad de tu información. La presente Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y protegemos los datos personales que nos proporcionas a través de nuestro sitio web oficial <a href="https://idenza.site" className="text-amber underline">https://idenza.site</a> y nuestros canales directos de WhatsApp y correo electrónico.
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Tratamos tus datos en estricto cumplimiento con la <strong className="text-foreground">Ley N° 29733 (Ley de Protección de Datos Personales del Perú)</strong> y su Reglamento aprobado por el Decreto Supremo N° 003-2013-JUS.
                </p>
              </div>
            </Reveal>

            {/* Datos Recopilados */}
            <Reveal delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground flex items-center gap-3">
                  <FileText className="w-5 h-5 text-amber shrink-0" />
                  2. Datos Personales que Recopilamos
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Recopilamos únicamente los datos necesarios para brindarte diagnósticos de demanda digital y ponernos en contacto contigo:
                </p>
                <ul className="space-y-2.5 pl-2 text-sm md:text-base text-muted-foreground">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber mt-1 shrink-0" />
                    <span><strong className="text-foreground">Datos de Contacto Directo:</strong> Número de teléfono / WhatsApp, nombre completo y correo electrónico proporcionados voluntariamente en nuestros formularios de contacto, formulario de diagnóstico y widgets de captación de leads.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber mt-1 shrink-0" />
                    <span><strong className="text-foreground">Información Comercial del Negocio:</strong> Nombre de tu empresa o marca, rubro o sector económico, ciudad o región de operaciones y detalles sobre tus metas de venta.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber mt-1 shrink-0" />
                    <span><strong className="text-foreground">Datos Técnicos de Navegación:</strong> Dirección IP, tipo de navegador, sistema operativo y eventos de sesión para asegurar el correcto funcionamiento técnico de la plataforma.</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Finalidad */}
            <Reveal delay={0.15}>
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                  3. Finalidad del Tratamiento de los Datos
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Tus datos personales serán utilizados exclusivamente para los siguientes fines expresos:
                </p>
                <div className="grid md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-card border border-border/50 space-y-2">
                    <h3 className="text-sm font-bold text-foreground">Elaboración de Diagnósticos</h3>
                    <p className="text-xs text-muted-foreground">
                      Investigar el volumen real de búsquedas y demanda digital de tu rubro en tu ciudad para entregarte tu reporte personalizado.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border/50 space-y-2">
                    <h3 className="text-sm font-bold text-foreground">Contacto Comercial Directo</h3>
                    <p className="text-xs text-muted-foreground">
                      Responder a tus consultas por WhatsApp o correo electrónico sin intermediarios ni bots impersonales.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border/50 space-y-2">
                    <h3 className="text-sm font-bold text-foreground">Cotización de Proyectos</h3>
                    <p className="text-xs text-muted-foreground">
                      Elaborar propuestas de desarrollo web, catálogos interactivos y planes adaptados a las necesidades de tu negocio.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border/50 space-y-2">
                    <h3 className="text-sm font-bold text-foreground">Seguridad y Prevención</h3>
                    <p className="text-xs text-muted-foreground">
                      Verificar envíos legítimos y evitar spam mediante mecanismos antispam técnicos (honeypots).
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Prohibición de Comercialización */}
            <Reveal delay={0.2}>
              <div className="bg-amber/10 border border-amber/30 rounded-2xl p-6 space-y-3">
                <h2 className="text-lg font-display font-bold text-amber">
                  4. Garantía de Confidencialidad (No Comercialización)
                </h2>
                <p className="text-sm text-foreground/90 leading-relaxed">
                  <strong className="text-foreground">IDENZA no vende, no alquila, no cede ni comercializa</strong> bajo ningún concepto tus datos personales a terceras empresas para fines publicitarios. Toda la información enviada permanece en estricta confidencialidad entre tú y la consultoría.
                </p>
              </div>
            </Reveal>

            {/* Derechos ARCO */}
            <Reveal delay={0.25}>
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                  5. Ejercicio de Derechos ARCO
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Como titular de tus datos personales, tienes derecho a ejercer en cualquier momento tus derechos de <strong className="text-foreground">Acceso, Rectificación, Cancelación y Oposición (ARCO)</strong>, conforme a lo establecido en la Ley N° 29733.
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Para solicitar la actualización, modificación o eliminación definitiva de tus datos de nuestros registros, simplemente envíanos una comunicación formal por cualquiera de estos canales:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a
                    href="mailto:jack.lujan@idenza.site"
                    className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/60 hover:border-amber/50 transition-colors text-sm font-medium text-foreground"
                  >
                    <Mail className="w-5 h-5 text-amber shrink-0" />
                    <span>jack.lujan@idenza.site</span>
                  </a>
                  <a
                    href="https://wa.me/51921585977?text=Hola%20Jack%2C%20quisiera%20consultar%20sobre%20mis%20datos%20personales"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/60 hover:border-amber/50 transition-colors text-sm font-medium text-foreground"
                  >
                    <Phone className="w-5 h-5 text-amber shrink-0" />
                    <span>+51 921 585 977 (WhatsApp)</span>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Cookies y Almacenamiento */}
            <Reveal delay={0.3}>
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                  6. Almacenamiento Local y Cookies
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Utilizamos almacenamiento local del navegador (<code className="text-xs bg-secondary px-1.5 py-0.5 rounded text-amber">sessionStorage</code> y <code className="text-xs bg-secondary px-1.5 py-0.5 rounded text-amber">localStorage</code>) con el único fin técnico de recordar tus preferencias de navegación, como evitar mostrarte nuevamente un widget o formulario una vez que ya lo has completado o cerrado en tu sesión actual.
                </p>
              </div>
            </Reveal>

            {/* Modificaciones */}
            <Reveal delay={0.35}>
              <div className="space-y-4 border-t border-border/40 pt-8">
                <h2 className="text-lg font-display font-semibold text-foreground">
                  7. Modificaciones a la Política de Privacidad
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  IDENZA se reserva el derecho de actualizar esta Política de Privacidad para adaptarla a futuras modificaciones legislativas o prácticas operativas. Cualquier cambio será publicado oportunamente en esta misma dirección web.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

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
