import { createServerFn } from "@tanstack/react-start";
import nodemailer from "nodemailer";

export const sendDiagnosticEmail = createServerFn({ method: "POST" })
  .validator((data: { nombre: string; negocio?: string; ciudad?: string; whatsapp: string }) => data)
  .handler(async ({ data }) => {
    // Read SMTP config from environment variables (fallback to default Zoho Mail SMTP)
    const host = process.env.SMTP_HOST || "smtp.zoho.com";
    const port = parseInt(process.env.SMTP_PORT || "465");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const receiver = process.env.CONTACT_RECEIVER || user;

    if (!user || !pass) {
      console.warn("SMTP_USER or SMTP_PASS not set. Email notification skipped.");
      return { success: false, error: "SMTP credentials not configured" };
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: `IDENZA Web <${user}>`,
      to: receiver,
      subject: `Nuevo Diagnóstico Solicitado - ${data.nombre}`,
      text: `Se ha recibido una nueva solicitud de diagnóstico gratuito en la web de IDENZA:

- Nombre: ${data.nombre}
- Negocio y rubro: ${data.negocio || "No especificado"}
- Ciudad: ${data.ciudad || "No especificada"}
- WhatsApp: ${data.whatsapp}

Fecha: ${new Date().toLocaleString("es-PE", { timeZone: "America/Lima" })}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`Diagnostic request email sent to ${receiver}`);
      return { success: true };
    } catch (error) {
      console.error("Error sending diagnostic email:", error);
      return { success: false, error: (error as Error).message };
    }
  });

export const sendContactEmail = createServerFn({ method: "POST" })
  .validator((data: { nombre: string; whatsapp: string; mensaje?: string }) => data)
  .handler(async ({ data }) => {
    const host = process.env.SMTP_HOST || "smtp.zoho.com";
    const port = parseInt(process.env.SMTP_PORT || "465");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const receiver = process.env.CONTACT_RECEIVER || user;

    if (!user || !pass) {
      console.warn("SMTP_USER or SMTP_PASS not set. Email notification skipped.");
      return { success: false, error: "SMTP credentials not configured" };
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: `IDENZA Web <${user}>`,
      to: receiver,
      subject: `Nuevo Mensaje de Contacto - ${data.nombre}`,
      text: `Se ha recibido un nuevo mensaje de contacto en la web de IDENZA:

- Nombre: ${data.nombre}
- WhatsApp: ${data.whatsapp}
- Mensaje: ${data.mensaje || "Sin mensaje adicional"}

Fecha: ${new Date().toLocaleString("es-PE", { timeZone: "America/Lima" })}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`Contact message email sent to ${receiver}`);
      return { success: true };
    } catch (error) {
      console.error("Error sending contact email:", error);
      return { success: false, error: (error as Error).message };
    }
  });
