import nodemailer from "nodemailer";
import { setTimeout as setTimeoutPromise } from "node:timers/promises";

const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const toEmail = process.env.CONTACT_TO ?? "contact@e-nova.dev";

function getTransport() {
  if (!smtpHost || !smtpUser || !smtpPass) {
    throw new Error("SMTP env vars missing. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS.");
  }

  return nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
    auth: {
      user: smtpUser,
      pass: smtpPass
    }
  });
}

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Name, email, and message are required." }), {
        status: 400
      });
    }

    const transporter = getTransport();

    const sendMailPromise = transporter.sendMail({
      from: `E-Nova Dev <${smtpUser}>`,
      to: toEmail,
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>`
    });

    await Promise.race([
      sendMailPromise,
      setTimeoutPromise(15000).then(() => {
        throw new Error("SMTP timeout");
      })
    ]);

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err: unknown) {
    console.error("Contact form error", err);
    const message =
      err instanceof Error ? err.message : "Failed to send";
    return new Response(JSON.stringify({ error: message }), { status: 500 });
  }
}
