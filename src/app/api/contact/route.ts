import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactSchema } from "@/app/lib/contact.schema";

const RATE_LIMIT = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const windowMs = 60_000;

  const requests = RATE_LIMIT.get(ip) || [];
  const recent = requests.filter((t) => now - t < windowMs);

  recent.push(now);
  RATE_LIMIT.set(ip, recent);

  return recent.length > 5;
}

export async function POST(req: Request) {
  try {
    const raw = await req.json();

    // honeypot
    if (raw.company) {
      return NextResponse.json({ success: true });
    }

    // too fast
    if (raw.startedAt && Date.now() - raw.startedAt < 3000) {
      return NextResponse.json({ success: true });
    }

    // rate limit
    const ip = req.headers.get("x-forwarded-for") ?? "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json({ success: true });
    }

    // ZOD – jedyne źródło prawdy
    const parsed = contactSchema.safeParse(raw);
    if (!parsed.success) {
      return NextResponse.json({ success: true });
    }

    const data = parsed.data;

    // mailer
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Formularz kontaktowy" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: data.email,
      subject: "Nowa wiadomość z formularza",
      html: `
        <h2>Nowa wiadomość</h2>
        <p><strong>Imię:</strong> ${data.name}</p>
        <p><strong>Telefon:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p>${data.purpose}</p>
      `,
    });

    await transporter.sendMail({
      from: `"Natura Uśmiechu" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: "Otrzymaliśmy Twoją wiadomość",
      html: `
        <p>Cześć ${data.name},</p>
        <p>Dziękujemy za kontakt. Odezwiemy się wkrótce.</p>
        <br/>
        <h3>Twoje zgłoszenie</h3>
        <p><strong>Imię:</strong> ${data.name}</p>
        <p><strong>Telefon:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p>${data.purpose}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("CONTACT ERROR:", err);
    return NextResponse.json({ success: true });
  }
}
