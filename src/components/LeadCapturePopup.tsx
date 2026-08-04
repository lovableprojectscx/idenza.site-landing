import { useState, useEffect, useRef } from "react";
import { useRouterState, Link } from "@tanstack/react-router";
import { X, Loader2, AlertCircle, Sparkles } from "lucide-react";
import popupHeaderImg from "@/assets/popup-header.webp";
import { sendPopupLeadEmail } from "@/lib/mail";

export function LeadCapturePopup() {
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileBar, setShowMobileBar] = useState(false);
  const [whatsapp, setWhatsapp] = useState("");
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [consentError, setConsentError] = useState("");
  const [serverError, setServerError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const previousFocusRef = useRef<HTMLElement | null>(null);
  const widgetRef = useRef<HTMLDivElement | null>(null);

  // Check route & suppression rules
  const isSuppressed = () => {
    if (typeof window === "undefined") return true;
    if (pathname.startsWith("/diagnostico")) return true;
    if (sessionStorage.getItem("idza_popup_closed") === "true") return true;
    if (localStorage.getItem("idza_popup_submitted") === "true") return true;
    return false;
  };

  // Detect mobile screen size
  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Trigger handlers (Auto show after 4s OR 25% scroll OR exit intent)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isSuppressed()) return;

    // Trigger timer after 4 seconds for fast presentation
    const timer = setTimeout(() => {
      if (window.innerWidth < 768) {
        setShowMobileBar(true);
      } else {
        openWidget();
      }
    }, 4000);

    const handleExitIntent = (e: MouseEvent) => {
      if (isSuppressed() || isOpen) return;
      if (window.innerWidth >= 768 && e.clientY <= 8) {
        openWidget();
      }
    };

    const handleScroll = () => {
      if (isSuppressed() || isOpen) return;
      const scrollPercent =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);

      if (window.innerWidth >= 768 && scrollPercent >= 0.25) {
        openWidget();
      } else if (window.innerWidth < 768 && scrollPercent >= 0.25) {
        setShowMobileBar(true);
      }
    };

    window.addEventListener("mouseleave", handleExitIntent);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mouseleave", handleExitIntent);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname, isOpen]);

  const openWidget = () => {
    if (isSuppressed()) return;
    previousFocusRef.current = document.activeElement as HTMLElement;
    setIsOpen(true);
    setShowMobileBar(false);
  };

  const closeWidget = () => {
    setIsOpen(false);
    sessionStorage.setItem("idza_popup_closed", "true");
    if (previousFocusRef.current) {
      previousFocusRef.current.focus();
    }
  };

  const closeMobileBar = () => {
    setShowMobileBar(false);
    sessionStorage.setItem("idza_popup_closed", "true");
  };

  // Keyboard accessibility (Escape key)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeWidget();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Validate Peru Phone (9 digits starting with 9, optional +51)
  const validatePhone = (raw: string): string | null => {
    const cleaned = raw.replace(/\D/g, "");
    let digits = cleaned;
    if (digits.startsWith("51") && digits.length === 11) {
      digits = digits.slice(2);
    }
    if (digits.length === 9 && digits.startsWith("9")) {
      return digits;
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneError("");
    setConsentError("");
    setServerError("");

    // Anti-spam Honeypot check: silently drop submission
    if (honeypot.trim() !== "") {
      localStorage.setItem("idza_popup_submitted", "true");
      closeWidget();
      return;
    }

    // Validate phone
    const normalizedPhone = validatePhone(whatsapp);
    if (!normalizedPhone) {
      setPhoneError("Ingresa un número de WhatsApp peruano válido (9 dígitos).");
      return;
    }

    // Validate consent
    if (!consent) {
      setConsentError("Debes aceptar la política de privacidad para continuar.");
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Send data to form service (Web3Forms API if key provided, and server email function)
      const web3Key =
        (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string) ||
        (process.env.WEB3FORMS_ACCESS_KEY as string) ||
        "";

      let web3Success = true;

      if (web3Key) {
        const formData = new FormData();
        formData.append("access_key", web3Key);
        formData.append("whatsapp", normalizedPhone);
        formData.append("origen", "popup");
        formData.append("subject", "Nuevo Lead de WhatsApp desde Popup IDENZA");
        formData.append("botcheck", "");

        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });

        const resData = await res.json();
        if (!res.ok || resData.success === false) {
          web3Success = false;
        }
      }

      // Also trigger Nodemailer server function for zero lead loss
      const emailResult = await sendPopupLeadEmail({
        data: { whatsapp: normalizedPhone, origen: "popup" },
      });

      if (!web3Success && !emailResult?.success) {
        throw new Error("Form submission failed");
      }

      // 2. Mark as submitted in localStorage
      localStorage.setItem("idza_popup_submitted", "true");

      // 3. Redirect to WhatsApp with prefilled message
      const waMessage = "Hola Jack, quiero saber cuántas personas buscan mi servicio.";
      const waUrl = `https://wa.me/51921585977?text=${encodeURIComponent(waMessage)}`;

      window.location.href = waUrl;
    } catch (err) {
      console.error("Popup lead submission error:", err);
      setServerError("Ocurrió un error al enviar. Por favor reinténtalo.");
      setIsSubmitting(false);
    }
  };

  if (isSuppressed()) return null;

  return (
    <>
      {/* Mobile Fixed Bottom Bar */}
      {isMobile && showMobileBar && !isOpen && (
        <div className="fixed bottom-0 inset-x-0 z-[990] bg-[#0E1420] border-t border-[#E2A63D]/40 p-4 shadow-[0_-4px_25px_rgba(0,0,0,0.6)] flex items-center justify-between gap-3 animate-in slide-in-from-bottom duration-300">
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-bold text-[#E2A63D] uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Diagnóstico exprés
            </p>
            <p className="text-sm font-bold text-[#F4F2ED] truncate">
              ¿Cuántos te buscan este mes?
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={openWidget}
              className="bg-[#E2A63D] hover:bg-[#d4962d] text-[#0E1420] font-bold text-xs px-4 py-2.5 rounded-lg transition-colors cursor-pointer shadow-sm"
            >
              Ver mi número
            </button>
            <button
              onClick={closeMobileBar}
              aria-label="Cerrar barra"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[#F4F2ED]/60 hover:text-[#F4F2ED] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Corner Widget Card (Post-it style at bottom-left corner on Desktop) */}
      {isOpen && (
        <div
          ref={widgetRef}
          role="dialog"
          aria-modal="false"
          aria-labelledby="popup-title"
          className={`fixed z-[995] bg-[#0E1420] text-[#F4F2ED] rounded-2xl border border-[#E2A63D]/40 overflow-hidden shadow-[0_12px_45px_rgba(0,0,0,0.65)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-6 ${
            isMobile
              ? "bottom-0 inset-x-0 rounded-b-none border-b-0 max-h-[85vh] overflow-y-auto"
              : "bottom-6 left-6 w-[360px] md:w-[380px] max-h-[90vh] overflow-y-auto"
          }`}
        >
          {/* Header Image (4:3 format, occupies full width, no margins) */}
          <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#161F30] shrink-0">
            <img
              src={popupHeaderImg}
              alt="¿Cuántas personas buscan tu servicio?"
              className="w-full h-full object-cover select-none"
              loading="eager"
            />
            {/* Overlay Gradient for Badge & Close Button */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Badge */}
            <div className="absolute top-3 left-3 bg-[#0E1420]/80 backdrop-blur-md border border-[#E2A63D]/40 text-[#E2A63D] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3 h-3 text-[#E2A63D]" />
              <span>Diagnóstico gratis</span>
            </div>

            {/* Close Button (X) - 44x44px touch target */}
            <button
              onClick={closeWidget}
              aria-label="Cerrar ventana"
              className="absolute top-2.5 right-2.5 z-20 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-black/60 hover:bg-black/80 text-white transition-all cursor-pointer backdrop-blur-md shadow-md"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content */}
          <div className="p-5 md:p-6 space-y-4">
            <div>
              <h2
                id="popup-title"
                className="text-lg md:text-xl font-bold font-sans text-[#F4F2ED] tracking-tight leading-snug"
              >
                ¿Cuántas personas buscaron tu servicio este mes?
              </h2>
              <p className="text-xs text-[#F4F2ED]/70 leading-relaxed mt-1.5">
                Te doy el número exacto de tu rubro y tu ciudad. Después vemos si te conviene hacer algo, o si te conviene no hacer nada.
              </p>
            </div>

            {serverError && (
              <div className="flex items-center gap-2 text-xs text-red-400 bg-red-950/40 border border-red-500/30 p-2.5 rounded-xl">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{serverError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
              {/* Hidden origin field */}
              <input type="hidden" name="origen" value="popup" />

              {/* Honeypot field for anti-spam */}
              <div className="sr-only" aria-hidden="true">
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              {/* WhatsApp Input */}
              <div className="space-y-1">
                <label
                  htmlFor="popup-whatsapp"
                  className="block text-[11px] font-bold uppercase tracking-wider text-[#F4F2ED]/80"
                >
                  Tu número de WhatsApp <span className="text-[#E2A63D]">*</span>
                </label>
                <input
                  id="popup-whatsapp"
                  type="tel"
                  required
                  placeholder="921 585 977"
                  value={whatsapp}
                  onChange={(e) => {
                    setWhatsapp(e.target.value);
                    if (phoneError) setPhoneError("");
                  }}
                  className={`w-full bg-[#161F30] text-[#F4F2ED] placeholder:text-[#F4F2ED]/30 px-3.5 py-3 rounded-xl border text-sm transition-colors focus:outline-none ${
                    phoneError
                      ? "border-red-500 focus:border-red-500"
                      : "border-white/15 focus:border-[#E2A63D]"
                  }`}
                />
                {phoneError && (
                  <p className="text-[11px] text-red-400 mt-1">{phoneError}</p>
                )}
              </div>

              {/* Consent Checkbox */}
              <div className="space-y-1">
                <label className="flex items-start gap-2.5 cursor-pointer group select-none">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => {
                      setConsent(e.target.checked);
                      if (consentError) setConsentError("");
                    }}
                    className="mt-0.5 w-4 h-4 rounded border-white/20 bg-[#161F30] text-[#E2A63D] focus:ring-[#E2A63D] focus:ring-offset-[#0E1420] shrink-0 cursor-pointer"
                  />
                  <span className="text-[11px] text-[#F4F2ED]/70 group-hover:text-[#F4F2ED] transition-colors leading-normal">
                    Acepto ser contactado y el tratamiento de mis datos según la{" "}
                    <Link
                      to="/politica-de-privacidad"
                      target="_blank"
                      className="underline text-[#E2A63D] hover:text-[#d4962d] transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      política de privacidad
                    </Link>
                  </span>
                </label>
                {consentError && (
                  <p className="text-[11px] text-red-400 mt-1">{consentError}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#E2A63D] hover:bg-[#d4962d] text-[#0E1420] font-bold text-sm py-3 px-5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50 disabled:cursor-not-allowed mt-1"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <span>Quiero mi número</span>
                )}
              </button>

              {/* Microcopy */}
              <p className="text-[11px] text-[#F4F2ED]/50 text-center pt-0.5 font-sans">
                Te respondo en menos de 24 horas.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
