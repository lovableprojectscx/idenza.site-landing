import { useState, useEffect, useRef } from "react";
import { useRouterState, Link } from "@tanstack/react-router";
import { X, Loader2, AlertCircle, TrendingUp } from "lucide-react";
import popupHeaderImg from "@/assets/popup-header.webp";
import { sendPopupLeadEmail } from "@/lib/mail";

export function LeadCapturePopup() {
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [whatsapp, setWhatsapp] = useState("");
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [consentError, setConsentError] = useState("");
  const [serverError, setServerError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const previousFocusRef = useRef<HTMLElement | null>(null);
  const widgetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Check route & suppression rules
  const isSuppressed = () => {
    if (!isMounted || typeof window === "undefined") return true;
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

    const timer = setTimeout(() => {
      openWidget();
    }, 4000);

    const handleExitIntent = (e: MouseEvent) => {
      if (isSuppressed() || isOpen) return;
      if (e.clientY <= 8) {
        openWidget();
      }
    };

    const handleScroll = () => {
      if (isSuppressed() || isOpen) return;
      const scrollPercent =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);

      if (scrollPercent >= 0.25) {
        openWidget();
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
  };

  const closeWidget = () => {
    setIsOpen(false);
    sessionStorage.setItem("idza_popup_closed", "true");
    if (previousFocusRef.current) {
      previousFocusRef.current.focus();
    }
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

  if (!isMounted || isSuppressed()) return null;

  return (
    <>
      {/* Sticky Collapsed Side Tab on Left Edge */}
      {!isOpen && (
        <button
          onClick={openWidget}
          aria-label="¿Cuántos buscan tu servicio este mes?"
          className="fixed left-0 top-1/2 -translate-y-1/2 z-[990] bg-[#0E1420] border-y border-r border-[#E2A63D]/50 text-[#F4F2ED] py-4 px-2.5 rounded-r-2xl shadow-[4px_0_25px_rgba(0,0,0,0.6)] flex flex-col items-center gap-3 group hover:bg-[#161F30] transition-all cursor-pointer animate-in fade-in slide-in-from-left duration-300"
        >
          <div className="w-8 h-8 rounded-xl bg-[#E2A63D]/15 border border-[#E2A63D]/40 text-[#E2A63D] flex items-center justify-center group-hover:scale-110 transition-transform">
            <TrendingUp className="w-4 h-4" />
          </div>
          <span className="[writing-mode:vertical-lr] text-[11px] font-bold tracking-wider uppercase text-[#F4F2ED]/90 rotate-180 py-1 font-sans">
            ¿Cuántos te buscan?
          </span>
        </button>
      )}

      {/* Expanded Floating Side Card (Light Bone Background #F4F2ED) */}
      {isOpen && (
        <>
          {/* Mobile backdrop */}
          {isMobile && (
            <div
              className="fixed inset-0 z-[998] bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
              onClick={closeWidget}
            />
          )}

          <div
            ref={widgetRef}
            role="dialog"
            aria-modal="false"
            aria-labelledby="popup-title"
            className={`fixed z-[999] bg-[#F4F2ED] text-[#0E1420] border border-[#0E1420]/15 overflow-hidden shadow-[0_16px_50px_rgba(0,0,0,0.5)] transition-all duration-300 ${
              isMobile
                ? "bottom-0 inset-x-0 rounded-t-3xl border-b-0 max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom duration-300"
                : "left-5 top-1/2 -translate-y-1/2 w-[340px] md:w-[360px] rounded-2xl max-h-[92vh] overflow-y-auto animate-in slide-in-from-left-6 duration-300"
            }`}
          >
            {/* Header Image (4:3 format, occupies 100% width, no margins) */}
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#0E1420] shrink-0">
              <img
                src={popupHeaderImg}
                alt="¿Cuántos te buscaron este mes?"
                className="w-full h-full object-cover select-none"
                loading="eager"
              />
              {/* Overlay Gradient for Close Button */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent pointer-events-none" />

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
            <div className="p-5 space-y-4">
              <p className="text-xs md:text-sm text-[#0E1420]/80 leading-relaxed font-sans font-medium">
                Te doy el número exacto de tu rubro y tu ciudad. Después vemos si te conviene hacer algo, o si te conviene no hacer nada.
              </p>

              {serverError && (
                <div className="flex items-center gap-2 text-xs text-red-700 bg-red-100 border border-red-300 p-2.5 rounded-xl">
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
                    className="block text-[11px] font-bold uppercase tracking-wider text-[#0E1420]/75"
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
                    className={`w-full bg-[#EAE8E1] text-[#0E1420] placeholder:text-[#0E1420]/40 px-3.5 py-3 rounded-xl border text-sm transition-colors focus:outline-none ${
                      phoneError
                        ? "border-red-500 focus:border-red-500"
                        : "border-[#0E1420]/15 focus:border-[#E2A63D]"
                    }`}
                  />
                  {phoneError && (
                    <p className="text-[11px] text-red-600 mt-1 font-medium">{phoneError}</p>
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
                      className="mt-0.5 w-4 h-4 rounded border-[#0E1420]/30 bg-[#EAE8E1] text-[#E2A63D] focus:ring-[#E2A63D] focus:ring-offset-[#F4F2ED] shrink-0 cursor-pointer"
                    />
                    <span className="text-[11px] text-[#0E1420]/75 group-hover:text-[#0E1420] transition-colors leading-normal font-sans">
                      Acepto ser contactado y el tratamiento de mis datos según la{" "}
                      <Link
                        to="/politica-de-privacidad"
                        target="_blank"
                        className="underline text-[#0E1420] font-semibold hover:text-[#E2A63D] transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        política de privacidad
                      </Link>
                    </span>
                  </label>
                  {consentError && (
                    <p className="text-[11px] text-red-600 mt-1 font-medium">{consentError}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#E2A63D] hover:bg-[#d4962d] text-[#0E1420] font-bold text-sm py-3.5 px-5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50 disabled:cursor-not-allowed mt-1"
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
                <p className="text-[11px] text-[#0E1420]/60 text-center pt-0.5 font-sans font-medium">
                  Te respondo en menos de 24 horas.
                </p>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
