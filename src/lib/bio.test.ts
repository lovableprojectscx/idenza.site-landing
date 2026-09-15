import { describe, it, expect, beforeEach } from "vitest";
import {
  BIO_CONFIG,
  cleanPhoneNumber,
  validateWhatsAppNumber,
  validateBusinessName,
  validateConsent,
  buildBioWhatsAppUrl,
  captureAndStoreUtms,
  getStoredUtms,
  trackButtonClick,
  trackSocialClick,
  trackFormSubmit,
} from "@/config/bio";

// Mock sessionStorage in Node / vitest environment
const storageMock: Record<string, string> = {};
const mockSessionStorage = {
  getItem: (key: string) => storageMock[key] ?? null,
  setItem: (key: string, value: string) => {
    storageMock[key] = value;
  },
  removeItem: (key: string) => {
    delete storageMock[key];
  },
  clear: () => {
    for (const k in storageMock) delete storageMock[k];
  },
};

// Ensure global window and sessionStorage are defined in Node test runner
interface GlobalWithMockWindow {
  window?: {
    location?: { search?: string };
    sessionStorage?: typeof mockSessionStorage;
  };
}

const g = globalThis as unknown as GlobalWithMockWindow;
if (typeof g.window === "undefined") {
  g.window = {
    location: { search: "" },
    sessionStorage: mockSessionStorage,
  };
} else if (!g.window.sessionStorage) {
  g.window.sessionStorage = mockSessionStorage;
}

describe("Bio Link Unit Tests (/bio)", () => {
  beforeEach(() => {
    mockSessionStorage.clear();
  });

  describe("cleanPhoneNumber", () => {
    it("cleans spaces, dashes, and extra characters", () => {
      expect(cleanPhoneNumber("921-585-977")).toBe("921585977");
      expect(cleanPhoneNumber(" 921 585 977 ")).toBe("921585977");
      expect(cleanPhoneNumber("(921) 585-977")).toBe("921585977");
    });

    it("strips country code 51 when 11 digits are passed", () => {
      expect(cleanPhoneNumber("+51 921 585 977")).toBe("921585977");
      expect(cleanPhoneNumber("51921585977")).toBe("921585977");
    });

    it("handles empty or falsy strings gracefully", () => {
      expect(cleanPhoneNumber("")).toBe("");
    });
  });

  describe("validateWhatsAppNumber", () => {
    it("accepts valid 9-digit Peruvian phone numbers", () => {
      expect(validateWhatsAppNumber("921585977").valid).toBe(true);
      expect(validateWhatsAppNumber("+51 921 585 977").valid).toBe(true);
      expect(validateWhatsAppNumber("999111222").valid).toBe(true);
    });

    it("rejects phone numbers with less or more than 9 digits", () => {
      const tooShort = validateWhatsAppNumber("92158597");
      expect(tooShort.valid).toBe(false);
      expect(tooShort.error).toContain("9 dígitos");

      const tooLong = validateWhatsAppNumber("9215859778");
      expect(tooLong.valid).toBe(false);
      expect(tooLong.error).toContain("9 dígitos");
    });

    it("rejects empty phone input", () => {
      const empty = validateWhatsAppNumber("");
      expect(empty.valid).toBe(false);
      expect(empty.error).toBeDefined();
    });
  });

  describe("validateBusinessName", () => {
    it("accepts valid business names", () => {
      expect(validateBusinessName("IDENZA").valid).toBe(true);
      expect(validateBusinessName("Florería Bella").valid).toBe(true);
    });

    it("rejects empty or whitespace-only names", () => {
      expect(validateBusinessName("").valid).toBe(false);
      expect(validateBusinessName("   ").valid).toBe(false);
    });
  });

  describe("validateConsent", () => {
    it("validates checked consent", () => {
      expect(validateConsent(true).valid).toBe(true);
      expect(validateConsent(false).valid).toBe(false);
    });
  });

  describe("buildBioWhatsAppUrl", () => {
    it("generates correct WhatsApp redirection URL with required prefilled text", () => {
      const url = buildBioWhatsAppUrl("Florería Rosal", "921 585 977");
      expect(url).toContain(`https://wa.me/${BIO_CONFIG.contact.whatsappNumber}`);
      expect(url).toContain("Florer%C3%ADa%20Rosal");
      expect(url).toContain("921585977");

      const decoded = decodeURIComponent(url);
      expect(decoded).toContain(
        "Hola Jack, soy de Florería Rosal y quiero más información. Mi WhatsApp es 921585977",
      );
    });
  });

  describe("UTM extraction & session storage", () => {
    it("extracts and retains UTM params across the session", () => {
      const search = "?utm_source=instagram&utm_medium=bio&utm_campaign=promo_ayacucho";
      const captured = captureAndStoreUtms(search);
      expect(captured.utm_source).toBe("instagram");
      expect(captured.utm_medium).toBe("bio");
      expect(captured.utm_campaign).toBe("promo_ayacucho");

      // Verify retrieval
      const stored = getStoredUtms();
      expect(stored.utm_source).toBe("instagram");
      expect(stored.utm_medium).toBe("bio");
      expect(stored.utm_campaign).toBe("promo_ayacucho");
    });
  });

  describe("Analytics event dispatching", () => {
    it("creates valid event payloads for button clicks", () => {
      const payload = trackButtonClick("Nuestra web", "https://idenza.site/?utm_source=biolink");
      expect(payload.event).toBe("bio_button_click");
      expect(payload.metadata?.button_name).toBe("Nuestra web");
      expect(payload.timestamp).toBeDefined();
    });

    it("creates valid event payloads for social clicks", () => {
      const payload = trackSocialClick("instagram", "https://instagram.com/jacklujanm");
      expect(payload.event).toBe("bio_social_click");
      expect(payload.metadata?.platform).toBe("instagram");
    });

    it("creates valid event payloads for form submissions", () => {
      const payload = trackFormSubmit("Restaurante Andino", "921585977");
      expect(payload.event).toBe("bio_form_submit");
      expect(payload.metadata?.business_name).toBe("Restaurante Andino");
      expect(payload.metadata?.whatsapp_digits).toBe("921585977");
    });
  });
});
