import { describe, it, expect, vi } from "vitest";

// Helper function to validate Peru phone number format (9 digits starting with 9)
function validatePeruPhone(raw: string): string | null {
  const cleaned = raw.replace(/\D/g, "");
  let digits = cleaned;
  if (digits.startsWith("51") && digits.length === 11) {
    digits = digits.slice(2);
  }
  if (digits.length === 9 && digits.startsWith("9")) {
    return digits;
  }
  return null;
}

describe("Lead Capture & Email Notification Tests", () => {
  it("should correctly validate valid 9-digit Peru WhatsApp numbers", () => {
    expect(validatePeruPhone("921585977")).toBe("921585977");
    expect(validatePeruPhone("921 585 977")).toBe("921585977");
    expect(validatePeruPhone("+51 921 585 977")).toBe("921585977");
    expect(validatePeruPhone("51921585977")).toBe("921585977");
  });

  it("should reject invalid phone numbers", () => {
    expect(validatePeruPhone("123456789")).toBeNull(); // Doesn't start with 9
    expect(validatePeruPhone("92158597")).toBeNull(); // Only 8 digits
    expect(validatePeruPhone("921585977123")).toBeNull(); // Too long
    expect(validatePeruPhone("abc")).toBeNull();
  });

  it("should format email payload with WhatsApp lead data", () => {
    const rawPhone = "+51 921 585 977";
    const validPhone = validatePeruPhone(rawPhone);

    expect(validPhone).not.toBeNull();

    const leadPayload = {
      whatsapp: validPhone!,
      origen: "popup",
      subject: `🔥 Nuevo Lead desde Popup IDENZA - WhatsApp: ${validPhone}`,
    };

    expect(leadPayload.whatsapp).toBe("921585977");
    expect(leadPayload.origen).toBe("popup");
    expect(leadPayload.subject).toContain("921585977");
  });
});
