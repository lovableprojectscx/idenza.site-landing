import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const WHATSAPP = "https://wa.me/51921585977?text=Hola,%20solicito%20diagnostico%20gratis%20para%20mi%20negocio";

export function Footer() {
  return (
    <footer className="bg-[#0E1420] text-[color:var(--bone)]/70 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 grid md:grid-cols-3 gap-10 text-sm">
        <div>
          <Logo light />
          <p className="mt-6 max-w-xs text-[color:var(--bone)] leading-relaxed">
            Consultoría de crecimiento digital sobre demanda comprobada.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="eyebrow mb-1 text-[color:var(--bone)]/50">Contacto</div>
          <a
            href={WHATSAPP}
            className="text-[color:var(--bone)]/75 hover:text-white transition-colors"
          >
            WhatsApp · +51 921 585 977
          </a>
          <a
            href="mailto:jack@idenza.site"
            className="text-[color:var(--bone)]/75 hover:text-white transition-colors"
          >
            jack@idenza.site
          </a>
          <a
            href="https://www.facebook.com/idenza.site"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[color:var(--bone)]/75 hover:text-white transition-colors"
          >
            Facebook
          </a>
          <a
            href="https://www.tiktok.com/@idenza.site"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[color:var(--bone)]/75 hover:text-white transition-colors"
          >
            TikTok
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <div className="eyebrow mb-1 text-[color:var(--bone)]/50">Navegar</div>
          <a
            href="/#metodo"
            className="text-[color:var(--bone)]/75 hover:text-white transition-colors"
          >
            Método
          </a>
          <Link
            to="/proyectos"
            className="text-[color:var(--bone)]/75 hover:text-white transition-colors"
          >
            Proyectos
          </Link>
          <a
            href="/#planes"
            className="text-[color:var(--bone)]/75 hover:text-white transition-colors"
          >
            Planes
          </a>
          <Link
            to="/fundador"
            className="text-[color:var(--bone)]/75 hover:text-white transition-colors"
          >
            El fundador
          </Link>
          <Link
            to="/blog"
            className="text-[color:var(--bone)]/75 hover:text-white transition-colors"
          >
            Blog
          </Link>
          <Link
            to="/contacto"
            className="text-[color:var(--bone)]/75 hover:text-white transition-colors"
          >
            Contacto
          </Link>
          <Link
            to="/florerias"
            className="text-[color:var(--bone)]/75 hover:text-white transition-colors"
          >
            Florerías
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-[color:var(--bone)]">
        © 2026 IDENZA · Ayacucho, Perú
      </div>
    </footer>
  );
}
