import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, type ReactNode } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/Logo";
import { Phone, Video, MoreVertical, Smile, Paperclip, Send, CheckCheck, MapPin, Calendar, Heart } from "lucide-react";
import heroCatalog from "@/assets/hero-catalog.webp";
import cajaSorpresa from "@/assets/caja-sorpresa.webp";
import projMiraflores from "@/assets/proj-miraflores.webp";
import projVelorioMockup from "@/assets/proj-velorio-mockup.webp";
import projBocafestMockup from "@/assets/proj-bocafest-mockup.webp";
import projSorpresas from "@/assets/proj-sorpresas.webp";
import jackPhoto from "@/assets/jack.webp";

export const Route = createFileRoute("/florerias")({
  head: () => ({
    links: [
      { rel: "preload", as: "image", href: heroCatalog, fetchpriority: "high" },
      { rel: "canonical", href: "https://idenza.site/florerias" }
    ],
    meta: [
      { title: "Página Web y Catálogo WhatsApp para Florerías | IDENZA" },
      { name: "description", content: "Catálogo web para tu florería: tus seguidores arman su pedido y te llega a WhatsApp ya cotizado. Diseño web para florerías en Perú, sin comisiones." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "IDENZA" },
      { property: "og:locale", content: "es_PE" },
      { property: "og:url", content: "https://idenza.site/florerias" },
      { property: "og:title", content: "Página Web y Catálogo WhatsApp para Florerías | IDENZA" },
      { property: "og:description", content: "Catálogo web para tu florería: tus seguidores arman su pedido y te llega a WhatsApp ya cotizado. Diseño web para florerías en Perú, sin comisiones." },
      { property: "og:image", content: "https://idenza.site/og-florerias.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Página Web y Catálogo WhatsApp para Florerías | IDENZA" },
      { name: "twitter:description", content: "Catálogo web para tu florería: tus seguidores arman su pedido y te llega a WhatsApp ya cotizado. Diseño web para florerías en Perú, sin comisiones." },
      { name: "twitter:image", content: "https://idenza.site/og-florerias.jpg" },
      {
        script: [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "¿Cuánto demora tener mi web lista?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Tu sistema queda listo en pocos días, según el plan que elijas." }
                },
                {
                  "@type": "Question",
                  "name": "¿La web es mía?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Sí. El dominio se registra a tu nombre. La web es completamente tuya." }
                },
                {
                  "@type": "Question",
                  "name": "¿Necesito saber de tecnología?",
                  "acceptedAnswer": { "@type": "Answer", "text": "No. Tú administras tu catálogo tan fácil como quien sube una foto a Facebook." }
                },
                {
                  "@type": "Question",
                  "name": "¿Qué incluye la mensualidad?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Hosting, mantenimiento, el panel Tracker y tu reporte mensual de resultados." }
                },
                {
                  "@type": "Question",
                  "name": "¿Sirve para mi rubro?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Sí. Trabajamos con cualquier negocio que reciba clientes por redes o Google y quiera convertirlos en pedidos a su WhatsApp." }
                },
                {
                  "@type": "Question",
                  "name": "¿Aparezco en Google?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Sí. Tu web queda estructurada para que Google y los buscadores con IA te encuentren y te citen." }
                }
              ]
            }),
          },
        ],
      },
    ],
  }),
  component: Landing,
});

const WHATSAPP = "https://wa.me/51921585977?text=Hola%20IDENZA%2C%20quiero%20cotizar%20mi%20sistema";

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Contrast />
      <StickyDemo />
      <Projects />
      <Tracker />
      <Plans />
      <Diagnostic />
      <About />
      <Faq />
      <FinalCta />
      <Footer />
    </div>
  );
}

/* ---------- Reveal (fade + slide up on scroll) ---------- */
function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
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
          <Logo light={!(solid || open)} />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) =>
            l.href.startsWith("/#") ? (
              <a
                key={l.href}
                href={l.href}
                className={`transition-colors duration-300 ${
                  solid || open
                    ? "text-foreground/80 hover:text-foreground"
                    : "text-white/80 hover:text-white"
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
                    ? "text-foreground/80 hover:text-foreground"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            )
          )}
        </nav>
        <Link to="/diagnostico" className="hidden md:inline-flex btn-amber text-sm py-2.5 px-5">
          Cotiza tu sistema
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 -mr-2"
          aria-label="Menú"
        >
          <div className={`w-6 h-0.5 mb-1.5 transition-all duration-300 ${solid || open ? "bg-foreground" : "bg-white"}`} />
          <div className={`w-6 h-0.5 mb-1.5 transition-all duration-300 ${solid || open ? "bg-foreground" : "bg-white"}`} />
          <div className={`w-6 h-0.5 transition-all duration-300 ${solid || open ? "bg-foreground" : "bg-white"}`} />
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 py-4 flex flex-col gap-4 bg-background border-t border-border/40 shadow-xl">
          {links.map((l) =>
            l.href.startsWith("/#") ? (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground/85 hover:text-foreground font-medium text-lg"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground/85 hover:text-foreground font-medium text-lg"
              >
                {l.label}
              </Link>
            )
          )}
          <Link to="/diagnostico" onClick={() => setOpen(false)} className="btn-amber mt-2 w-full text-center">
            Cotiza tu sistema
          </Link>
        </div>
      )}
    </header>
  );
}

/* ---------- LOCAL LOGO COMPONENT REMOVED (imported from components) ---------- */

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="top" className="relative h-[92vh] min-h-[640px] w-full overflow-hidden text-[color:var(--bone)]">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={heroCatalog}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/florerias.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[color:var(--ink)]/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)] via-[color:var(--ink)]/30 to-transparent" />

      <div className="relative z-10 h-full mx-auto max-w-7xl px-6 md:px-10 flex flex-col justify-end pb-16 md:pb-24">
        <p className="eyebrow mb-6 text-[color:var(--bone)]/70">Sistemas de venta · Detalles y regalos</p>
        <h1 className="font-display text-[3rem] leading-[0.95] sm:text-7xl md:text-[7.5rem] max-w-6xl text-[color:var(--bone)]">
          Tus seguidores, <em className="italic font-normal text-[color:var(--amber-brand)]">cerrando</em>.
        </h1>
        <p className="mt-8 text-lg md:text-xl text-[color:var(--bone)]/75 max-w-2xl leading-relaxed">
          Del "me encanta" al pedido pagado en tu WhatsApp. Diseñamos tu catálogo virtual para florería en Perú con pedidos de arreglos por WhatsApp y tienda online de flores.
        </p>
        <div className="mt-10">
          <a href={WHATSAPP} className="btn-amber text-base py-4 px-8">Cotiza tu sistema</a>
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTRAST (Problem + Solution merged) ---------- */
function Contrast() {
  return (
    <section className="border-y border-border/60 bg-[color:var(--secondary)]/40">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
        <Reveal>
          <p className="eyebrow mb-5">Antes y después</p>
          <h2 className="text-4xl md:text-6xl max-w-4xl">
            El chat se enfría. <em className="italic font-normal text-[color:var(--amber-deep)]">El catálogo cierra.</em>
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-6 md:gap-10 items-start">
          <Reveal>
            <div className="mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-destructive" />
              <span className="eyebrow">Sin catálogo</span>
            </div>
            <ChatMockup />
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[color:var(--amber-brand)]" />
              <span className="eyebrow">Con catálogo</span>
            </div>
            <OrderMockup />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ChatMockup() {
  const msgs = [
    { me: false, t: "Hola, cuánto está la caja?", time: "10:30 a.m." },
    { me: true, t: "Hola! Cuál te gustó? Tenemos varias opciones.", time: "10:32 a.m." },
    { me: false, t: "La de la foto 3 de tu Instagram", time: "10:33 a.m." },
    { me: true, t: "Esa es la Caja Sorpresa Básica, está S/ 65 sin globo.", time: "10:35 a.m." },
    { me: false, t: "Y con globo de helio?", time: "10:40 a.m." },
    { me: true, t: "El globo adicional está + S/ 15.", time: "10:41 a.m." },
    { me: false, t: "Y si le pongo un peluche?", time: "10:45 a.m." },
    { me: true, t: "El peluche mediano es + S/ 25.", time: "10:46 a.m." },
    { me: false, t: "Uy… lo pienso y te aviso, gracias.", time: "11:02 a.m." },
  ];

  return (
    <div className="relative rounded-3xl bg-[#efeae2] text-[color:var(--ink)] border border-border/40 shadow-xl overflow-hidden flex flex-col h-[480px]">
      {/* WhatsApp Header */}
      <div className="bg-[#075E54] text-white px-4 py-3 flex items-center justify-between shadow-md shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-display font-bold text-sm text-[color:var(--bone)]">
            C
          </div>
          <div>
            <div className="font-semibold text-sm leading-tight text-[color:var(--bone)]">Cliente</div>
            <div className="text-[10px] text-white/80 leading-none mt-0.5">en línea</div>
          </div>
        </div>
        <div className="flex items-center gap-4 opacity-90">
          <Video className="w-4 h-4 text-[color:var(--bone)] cursor-pointer" />
          <Phone className="w-4 h-4 text-[color:var(--bone)] cursor-pointer" />
          <MoreVertical className="w-4 h-4 text-[color:var(--bone)] cursor-pointer" />
        </div>
      </div>

      {/* Chat Wallpaper Area */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 scrollbar-none pb-20">
        {msgs.map((m, i) => (
          <div
            key={i}
            className={`max-w-[80%] flex flex-col relative px-3 py-1.5 rounded-2xl shadow-sm text-sm ${
              m.me
                ? "self-end bg-[#d9fdd3] text-[#111b21] rounded-tr-none"
                : "self-start bg-white text-[#111b21] rounded-tl-none"
            }`}
          >
            <p className="leading-relaxed pr-8">{m.t}</p>
            <span className="text-[9px] text-gray-500 self-end absolute bottom-1 right-2 flex items-center gap-0.5 select-none">
              {m.time}
              {m.me && <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />}
            </span>
          </div>
        ))}

        {/* System Message - The chat got cold */}
        <div className="self-center bg-[#ffebeb] border border-red-100 text-red-600 px-4 py-2 rounded-xl text-xs font-medium text-center my-3 max-w-[90%] shadow-sm animate-pulse">
          El cliente no volvió a responder. Pedido perdido.
        </div>
      </div>

      {/* WhatsApp Input Footer */}
      <div className="absolute inset-x-0 bottom-0 bg-[#f0f2f5] p-2 flex items-center gap-2 border-t border-gray-200 shrink-0">
        <div className="flex-1 bg-white rounded-full px-4 py-2 flex items-center gap-2 border border-gray-200">
          <Smile className="w-5 h-5 text-gray-500 shrink-0" />
          <div className="text-gray-400 text-xs flex-1 select-none">Escribe un mensaje...</div>
          <Paperclip className="w-5 h-5 text-gray-500 shrink-0 rotate-45" />
        </div>
        <div className="w-9 h-9 rounded-full bg-[#00a884] flex items-center justify-center text-white shrink-0 shadow-md">
          <Send className="w-4 h-4 text-white ml-0.5" />
        </div>
      </div>
    </div>
  );
}

function OrderMockup() {
  return (
    <div className="relative rounded-3xl bg-[#efeae2] text-[color:var(--ink)] border border-border/40 shadow-xl overflow-hidden flex flex-col h-[480px]">
      {/* WhatsApp Header */}
      <div className="bg-[#075E54] text-white px-4 py-3 flex items-center justify-between shadow-md shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#00a884] flex items-center justify-center font-display font-bold text-sm text-[color:var(--bone)]">
            I
          </div>
          <div>
            <div className="font-semibold text-sm leading-tight text-[color:var(--bone)]">Mi Tienda de Regalos</div>
            <div className="text-[10px] text-white/80 leading-none mt-0.5">en línea</div>
          </div>
        </div>
        <div className="flex items-center gap-4 opacity-90">
          <Video className="w-4 h-4 text-[color:var(--bone)]" />
          <Phone className="w-4 h-4 text-[color:var(--bone)]" />
          <MoreVertical className="w-4 h-4 text-[color:var(--bone)]" />
        </div>
      </div>

      {/* Chat Wallpaper Area */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 scrollbar-none pb-20">
        {/* Step 1: Automatic Catalog Order sent by the client */}
        <div className="max-w-[85%] self-start bg-white text-[#111b21] rounded-2xl rounded-tl-none shadow-sm overflow-hidden border border-gray-200">
          {/* Catalog Order Badge */}
          <div className="bg-[#e7f8f2] border-b border-gray-100 px-3 py-2 flex items-center gap-2 text-xs font-semibold text-[#00a884]">
            <span>Nuevo pedido desde el catálogo</span>
          </div>
          <div className="p-3.5 space-y-3">
            <div>
              <div className="font-bold text-base text-[color:var(--ink)]">Caja Sorpresa Mediana</div>
              <div className="text-xs text-gray-500 mt-0.5">Cantidad: 1 · S/ 65.00</div>
            </div>

            <div className="border-t border-dashed border-gray-200 pt-2 space-y-1.5">
              <div className="text-xs font-bold text-gray-700 uppercase tracking-wider">Extras seleccionados:</div>
              <div className="flex justify-between text-xs text-gray-600">
                <span>Globo Metálico Helio</span>
                <span className="font-semibold">+ S/ 15.00</span>
              </div>
              <div className="flex justify-between text-xs text-gray-600">
                <span>Peluche de Felpa Mediano</span>
                <span className="font-semibold">+ S/ 25.00</span>
              </div>
            </div>

            <div className="border-t border-dashed border-gray-200 pt-2 space-y-1.5">
              <div className="text-xs font-bold text-gray-700 uppercase tracking-wider">Detalles de Entrega:</div>
              <div className="flex items-center gap-1.5 text-xs text-gray-600">
                <Calendar className="w-3.5 h-3.5 text-[#00a884] shrink-0" />
                <span>Fecha: Hoy, 6:00 PM</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-600">
                <MapPin className="w-3.5 h-3.5 text-[#00a884] shrink-0" />
                <span>Destino: Av. Larco 456, Lima</span>
              </div>
              <div className="flex items-start gap-1.5 text-xs text-gray-600">
                <Heart className="w-3.5 h-3.5 text-[#00a884] shrink-0 mt-0.5" />
                <span className="italic">"Feliz aniversario mi amor!"</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-2.5 flex items-center justify-between">
              <span className="text-xs font-bold text-gray-700">Total a pagar</span>
              <span className="font-display font-bold text-xl text-[#00a884]">S/ 105.00</span>
            </div>
          </div>
          <div className="px-3 pb-1 flex justify-end">
            <span className="text-[9px] text-gray-400">10:30 a.m.</span>
          </div>
        </div>

        {/* Step 2: Client sends payment confirmation */}
        <div className="max-w-[80%] self-start bg-white text-[#111b21] rounded-2xl rounded-tl-none shadow-sm p-2 flex flex-col gap-1.5 border border-gray-200">
          <div className="bg-[#e1f5fe] text-[#0288d1] text-[10px] font-bold py-1 px-2.5 rounded-lg flex items-center gap-1">
            <span>Pago Confirmado por YAPE</span>
          </div>
          <p className="text-sm px-1.5">Aquí tienes la captura del Yape por S/ 105. Gracias!</p>
          <span className="text-[9px] text-gray-400 self-end mr-1">10:31 a.m.</span>
        </div>

        {/* Step 3: Merchant replies */}
        <div className="max-w-[80%] self-end bg-[#d9fdd3] text-[#111b21] rounded-2xl rounded-tr-none shadow-sm px-3 py-1.5 relative flex flex-col">
          <p className="text-sm pr-8 leading-relaxed">
            ¡Excelente, pedido recibido y confirmado! Ya está en preparación para las 6:00 PM.
          </p>
          <span className="text-[9px] text-gray-500 self-end absolute bottom-1 right-2 flex items-center gap-0.5 select-none">
            10:32 a.m.
            <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />
          </span>
        </div>
      </div>

      {/* WhatsApp Input Footer */}
      <div className="absolute inset-x-0 bottom-0 bg-[#f0f2f5] p-2 flex items-center gap-2 border-t border-gray-200 shrink-0">
        <div className="flex-1 bg-white rounded-full px-4 py-2 flex items-center gap-2 border border-gray-200">
          <Smile className="w-5 h-5 text-gray-500 shrink-0" />
          <div className="text-gray-400 text-xs flex-1 select-none">Escribe un mensaje...</div>
          <Paperclip className="w-5 h-5 text-gray-500 shrink-0 rotate-45" />
        </div>
        <div className="w-9 h-9 rounded-full bg-[#00a884] flex items-center justify-center text-white shrink-0 shadow-md">
          <Send className="w-4 h-4 text-white ml-0.5" />
        </div>
      </div>
    </div>
  );
}

/* ---------- STICKY DEMO (animated phone loop) ---------- */
function StickyDemo() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-24 md:pt-32">
        <Reveal>
          <p className="eyebrow mb-5">Cómo funciona</p>
          <h2 className="text-4xl md:text-6xl max-w-3xl">
            Tu clienta arma. <em className="italic font-normal">Tú cobras.</em>
          </h2>
        </Reveal>
      </div>
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-24 flex justify-center">
        <PhoneLoop />
      </div>
      <div className="mx-auto max-w-7xl px-6 md:px-10 pb-24 flex justify-center">
        <a href={WHATSAPP} className="btn-amber">Quiero uno así</a>
      </div>
    </section>
  );
}

function PhoneLoop() {
  const reduce = useReducedMotion();
  const steps = [
    { label: "Elige producto", extras: [], total: 65 },
    { label: "Agrega globo", extras: ["Globo"], total: 80 },
    { label: "Agrega peluche", extras: ["Globo", "Peluche"], total: 105 },
    { label: "Nuevo pedido", extras: ["Globo", "Peluche"], total: 105, notify: true },
  ];
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI(v => (v + 1) % steps.length), 2200);
    return () => clearInterval(id);
  }, [reduce, steps.length]);

  const s = steps[i];

  return (
    <div className="relative w-[280px] md:w-[320px] aspect-[9/19] rounded-[3.2rem] bg-[#121824] p-3.5 shadow-2xl ring-1 ring-white/10 border-4 border-gray-800">
      {/* Phone hardware buttons */}
      <div className="absolute -left-[3px] top-28 w-[3px] h-12 bg-gray-700 rounded-r-sm" />
      <div className="absolute -left-[3px] top-44 w-[3px] h-12 bg-gray-700 rounded-r-sm" />
      <div className="absolute -right-[3px] top-36 w-[3px] h-16 bg-gray-700 rounded-l-sm" />

      <div className="relative w-full h-full rounded-[2.4rem] bg-[color:var(--bone)] text-[color:var(--ink)] overflow-hidden flex flex-col border border-black/10">
        {/* Status Bar */}
        <div className="px-5 pt-3 pb-1.5 flex items-center justify-between text-[10px] font-semibold text-[#111b21] bg-white select-none shrink-0 z-20">
          <span>9:41</span>
          <div className="w-14 h-3.5 bg-black rounded-full" />
          <div className="flex items-center gap-1.5 text-[#111b21]">
            {/* Cellular Signal Icon */}
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
              <path d="M2 16h3v6H2zm5-4h3v10H7zm5-4h3v14h-3zm5-4h3v18h-3z" />
            </svg>
            {/* Wifi Icon */}
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 21a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-8.28-7.72a1 1 0 0 1 0-1.41 11.9 11.9 0 0 1 16.56 0 1 1 0 0 1 0 1.41l-.7.7a1 1 0 0 1-1.42 0 9.9 9.9 0 0 0-12.32 0 1 1 0 0 1-1.42 0l-.7-.7zm2.83 2.83a1 1 0 0 1 0-1.41 7.92 7.92 0 0 1 10.9 0 1 1 0 0 1 0 1.41l-.7.7a1 1 0 0 1-1.42 0 5.92 5.92 0 0 0-6.66 0 1 1 0 0 1-1.42 0l-.7-.7z" />
            </svg>
            {/* Battery Icon */}
            <div className="w-5 h-2.5 border border-[#111b21] rounded-sm p-[1px] flex items-center relative">
              <div className="bg-[#111b21] h-full w-[80%] rounded-[1px]" />
              <div className="w-[1px] h-1 bg-[#111b21] rounded-r-sm absolute -right-[2px] top-[2px]" />
            </div>
          </div>
        </div>

        {/* header */}
        <div className="px-5 pt-1.5 pb-2 border-b border-border/60 flex items-center justify-between bg-white shrink-0">
          <span className="font-display font-bold text-base text-[color:var(--ink)]">Caja Sorpresa</span>
          <span className="text-xs eyebrow text-[#00a884]">S/ 65</span>
        </div>
        {/* product image */}
        <div className="h-32 bg-gradient-to-br from-[color:var(--amber-brand)]/30 to-[color:var(--ink)]/10 flex items-center justify-center overflow-hidden shrink-0">
          <img
            src={cajaSorpresa}
            alt="Caja Sorpresa con chocolates artesanales, flores secas y globo"
            width={256}
            height={256}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        {/* extras */}
        <div className="px-5 py-3 flex flex-col gap-2 flex-1">
          <div className="eyebrow text-[10px]">Extras</div>
          {["Globo", "Peluche"].map(x => {
            const on = s.extras.includes(x);
            return (
              <div key={x} className={`flex items-center justify-between text-sm rounded-lg px-3 py-2 transition-colors ${on ? "bg-[color:var(--amber-brand)]/25 text-[color:var(--ink)]" : "bg-[color:var(--ink)]/10 text-[color:var(--ink)]"}`}>
                <span>{x}</span>
                <motion.span
                  animate={{ scale: on ? 1 : 0.8, opacity: on ? 1 : 0.4 }}
                   className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${on ? "bg-[color:var(--amber-deep)] text-[color:var(--bone)]" : "bg-[color:var(--ink)]/15"}`}
                >
                  {on ? "✓" : ""}
                </motion.span>
              </div>
            );
          })}
        </div>
        {/* total */}
        <div className="px-5 py-3 border-t border-border/60 flex items-center justify-between">
          <span className="eyebrow">Total</span>
          <motion.span
            key={s.total}
            initial={{ y: -6, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="font-display text-2xl"
          >
            S/ {s.total}
          </motion.span>
        </div>
        {/* WA button */}
        <div className="px-5 pb-6 pt-3">
          <div className="rounded-full bg-[#075E54] text-[color:var(--bone)] text-sm font-medium py-3 text-center">
            Pedir por WhatsApp
          </div>
        </div>

        {/* Notification */}
        <AnimatePresence>
          {s.notify && (
            <motion.div
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -80, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute top-[44px] left-3 right-3 rounded-2xl bg-[color:var(--ink)]/95 backdrop-blur text-[color:var(--bone)] px-4 py-3 shadow-xl z-30"
            >
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-[#25D366] flex items-center justify-center text-white shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                <div className="flex-1">
                  <div className="text-[10px] uppercase tracking-widest opacity-70">Nuevo pedido</div>
                  <div className="text-sm">Caja + globo + peluche · S/ 105</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ---------- PROJECTS ---------- */
function Projects() {
  const items = [
    { name: "Miraflores Boutique Floral", cat: "Florería · Lima", stat: "Tienda online premium con catálogo y pedidos desde el celular.", img: projMiraflores, id: "miraflores" },
    { name: "Florería para Velorio", cat: "Servicio funerario · Lima", stat: "Pedido urgente en 2 minutos, sin llamadas.", img: projVelorioMockup, id: "velorio" },
    { name: "Bocafest", cat: "Food box · Ayacucho", stat: "Catálogo con extras armado por el cliente.", img: projBocafestMockup, id: "bocafest" },
    { name: "Mundo de Sorpresas", cat: "Detalles · Cusco", stat: "De 3 pedidos por semana a agenda llena.", img: projSorpresas, id: "sorpresas" },
  ];
  return (
    <section id="proyectos" className="border-y border-border/60 bg-[color:var(--secondary)]/40">
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-24 md:pt-32 pb-8">
        <Reveal>
          <p className="eyebrow mb-5">Proyectos</p>
          <h2 className="text-4xl md:text-6xl">Negocios reales, vendiendo mejor.</h2>
        </Reveal>
      </div>
      <div className="flex flex-col">
        {items.map((p, i) => (
          <ProjectRow key={p.name} project={p} reverse={i % 2 === 1} />
        ))}
      </div>
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 flex justify-center">
        <Link to="/proyectos" className="btn-outline px-8 py-3.5 rounded-xl text-sm">Ver todos los proyectos →</Link>
      </div>
    </section>
  );
}

function ProjectRow({ project, reverse }: { project: { name: string; cat: string; stat: string; img: string; id: string }; reverse: boolean }) {
  return (
    <div className="border-t border-border/60">
      <Reveal className={`mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-20 grid md:grid-cols-2 gap-10 md:gap-16 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
        <Link to={`/proyectos/${project.id}`} className="block relative aspect-[5/4] overflow-hidden rounded-2xl bg-muted group">
          <img
            src={project.img}
            alt={`${project.name} — ${project.cat}`}
            loading="lazy"
            width={800}
            height={640}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[color:var(--ink)]/0 group-hover:bg-[color:var(--ink)]/10 transition-colors" />
        </Link>
        <div>
          <div className="eyebrow mb-4">{project.cat}</div>
          <Link to={`/proyectos/${project.id}`} className="block group">
            <h3 className="font-display text-4xl md:text-5xl font-medium text-foreground group-hover:text-[color:var(--amber-deep)] transition-colors leading-[1.02] mb-6">{project.name}</h3>
          </Link>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-lg mb-8">{project.stat}</p>
          <Link to={`/proyectos/${project.id}`} className="btn-outline px-8 py-3.5 rounded-xl text-sm inline-flex items-center gap-2">
            Ver el caso <span>→</span>
          </Link>
        </div>
      </Reveal>
    </div>
  );
}

/* ---------- TRACKER ---------- */
function Tracker() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:py-32 grid md:grid-cols-2 gap-14 items-center">
      <Reveal>
        <p className="eyebrow mb-5">El Tracker</p>
        <h2 className="text-4xl md:text-5xl">
          No promesas. <span className="text-[color:var(--amber-deep)]">Datos.</span>
        </h2>
        <div className="mt-8">
          <a href={WHATSAPP} className="btn-outline px-8 py-3.5 rounded-xl text-sm">Ver el panel →</a>
        </div>
      </Reveal>
      <Reveal delay={0.1}><TrackerMock /></Reveal>
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
    { name: "Presencia", price: "S/ 850", sub: "Pago único", features: ["Web + WhatsApp", "Formulario", "SEO base"] },
    { name: "Catálogo Mensual", price: "S/ 500", sub: "+ S/ 149 / mes", badge: "Recomendado", features: ["Catálogo con extras", "Pedido a WhatsApp", "Tracker mensual", "Hosting incluido"], highlight: true },
    { name: "Catálogo único", price: "S/ 1,650", sub: "Pago único", features: ["Catálogo completo", "Sin mensualidad", "Tu hosting"] },
    { name: "Tienda Completa", price: "S/ 2,900", sub: "Pago único", features: ["Pagos online", "Inventario", "Panel avanzado"] },
  ];
  return (
    <section id="planes" className="border-y border-border/60 bg-[color:var(--secondary)]/40">
      <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <Reveal>
          <p className="eyebrow mb-5">Planes</p>
          <h2 className="text-4xl md:text-5xl mb-14">Elige cómo empezar.</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((p, idx) => (
            <Reveal key={p.name} delay={idx * 0.05}>
              <div className={`p-7 rounded-2xl border relative flex flex-col h-full ${p.highlight ? "bg-[color:var(--amber-brand)]/10 border-[color:var(--amber-brand)] shadow-xl md:scale-[1.03]" : "bg-card border-border"}`}>
                {p.badge && (
                  <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-[color:var(--amber-brand)] text-[color:var(--ink)] text-[10px] eyebrow">
                    {p.badge}
                  </div>
                )}
                <h3 className="text-xl mb-1">{p.name}</h3>
                <div className="mt-3 mb-1"><span className="font-display text-4xl">{p.price}</span></div>
                <div className="text-xs text-foreground/60 mb-6">{p.sub}</div>
                <ul className="space-y-2.5 text-sm text-foreground/75 mb-8 flex-1">
                  {p.features.map(f => (
                    <li key={f} className="flex gap-2">
                      <span className="text-[color:var(--amber-deep)] mt-0.5">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href={WHATSAPP} className={p.highlight ? "btn-amber w-full rounded-xl text-sm" : "btn-outline w-full rounded-xl text-sm"}>Empezar</a>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-sm text-foreground/60 max-w-2xl">
          Proyectos a medida y empresas: bajo cotización, tras el diagnóstico gratuito.
        </p>
      </div>
    </section>
  );
}

/* ---------- DIAGNOSTIC ---------- */
function Diagnostic() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-24 md:py-32 text-center">
      <Reveal>
        <p className="eyebrow mb-5">Diagnóstico gratis</p>
        <h2 className="text-4xl md:text-5xl">¿Por dónde empezar? Te lo digo yo.</h2>
        <div className="mt-9">
          <Link to="/diagnostico" className="btn-amber px-8 py-3.5 rounded-xl text-sm">
            Solicita tu diagnóstico
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <section id="nosotros" className="border-y border-border/60 bg-[color:var(--secondary)]/40">
      <div className="mx-auto max-w-5xl px-5 py-24 md:py-32 grid md:grid-cols-[280px_1fr] gap-12 items-center">
        <Reveal>
          <div className="aspect-square rounded-full overflow-hidden border border-border bg-card mx-auto md:mx-0 w-64 md:w-full shadow-lg">
            <img
              src={jackPhoto}
              alt="Jack Luján"
              width={300}
              height={300}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="eyebrow mb-5">El fundador</p>
          <h2 className="text-4xl md:text-5xl">Soy Jack, de Ayacucho.</h2>
          <p className="mt-6 text-lg text-foreground/70 leading-relaxed">
            Yo también quemé meses vendiéndole a quien no compraba. Ahí aprendí que el problema nunca fue la web: era no tener dónde cerrar. Eso es exactamente lo que construyo para ti.
          </p>
          <div className="mt-8">
            <Link to="/fundador" className="btn-outline px-8 py-3.5 rounded-xl text-sm">
              Conóceme más de cerca →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function Faq() {
  const faqs = [
    { q: "¿Cuánto demora?", a: "Tu sistema listo en pocos días." },
    { q: "¿La web es mía?", a: "El dominio se registra a tu nombre. Es tuya." },
    { q: "¿Necesito saber de tecnología?", a: "No. Tú administras tu catálogo como quien sube una foto a Facebook." },
    { q: "¿Qué incluye la mensualidad?", a: "Hosting, mantenimiento, el Tracker y tu reporte." },
    { q: "¿Puedo cambiar productos y precios?", a: "Sí, cuando quieras, desde tu panel." },
    { q: "¿Aparezco en Google?", a: "Sí — tu web queda estructurada para que Google y la IA te encuentren." },
  ];
  return (
    <section className="mx-auto max-w-4xl px-5 py-24 md:py-32">
      <Reveal>
        <p className="eyebrow mb-5">Preguntas</p>
        <h2 className="text-4xl md:text-5xl mb-12">Lo que suelen preguntarnos.</h2>
      </Reveal>
      <div className="divide-y divide-border border-t border-b border-border">
        {faqs.map((f, i) => (
          <details key={i} className="group py-5">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="text-lg font-medium pr-4">{f.q}</span>
              <span className="text-2xl text-[color:var(--amber-deep)] group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p className="mt-3 text-foreground/70 leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ---------- FINAL CTA ---------- */
function FinalCta() {
  return (
    <section id="contacto" className="bg-[color:var(--ink)] text-[color:var(--bone)]">
      <div className="mx-auto max-w-4xl px-5 py-28 md:py-36 text-center">
        <Reveal>
          <h2 className="text-4xl md:text-6xl text-[color:var(--bone)]">
            Tu próxima venta ya te está escribiendo.
            <br />
            <em className="italic font-normal text-[color:var(--amber-brand)]">Que no se enfríe.</em>
          </h2>
          <div className="mt-10">
            <Link to="/diagnostico" className="btn-amber px-8 py-3.5 rounded-xl text-sm font-semibold">
              Cotiza tu sistema
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="bg-[color:var(--ink)] text-[color:var(--bone)]/70 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-12 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="mb-3">
            <Logo light />
          </div>
          <p className="max-w-xs">Sistemas de venta para detalles y regalos.</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="eyebrow text-[color:var(--bone)]/50 mb-2">Contacto</div>
          <a href={WHATSAPP} className="hover:text-[color:var(--amber-brand)]">WhatsApp +51 921 585 977</a>
          <a href="mailto:jack@idenza.site" className="hover:text-[color:var(--amber-brand)]">jack@idenza.site</a>
          <a
            href="https://www.facebook.com/idenza.site"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[color:var(--amber-brand)]"
          >
            Facebook
          </a>
          <a
            href="https://www.tiktok.com/@idenza.site"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[color:var(--amber-brand)]"
          >
            TikTok
          </a>
          <Link to="/contacto" className="hover:text-[color:var(--amber-brand)]">Contacto</Link>
        </div>
        <div className="flex flex-col gap-2">
          <div className="eyebrow text-[color:var(--bone)]/50 mb-2">Navegar</div>
          <a href="/#metodo" className="hover:text-[color:var(--amber-brand)]">Método</a>
          <Link to="/proyectos" className="hover:text-[color:var(--amber-brand)]">Proyectos</Link>
          <a href="/#planes" className="hover:text-[color:var(--amber-brand)]">Planes</a>
          <Link to="/fundador" className="hover:text-[color:var(--amber-brand)]">El fundador</Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-[color:var(--bone)]/50">
        © 2026 IDENZA · Hecho desde Ayacucho, Perú
      </div>
    </footer>
  );
}
