import { NextRequest, NextResponse } from "next/server";
import { createTransport } from "nodemailer";

const { SMTP_PORT, SMTP_HOST, SMTP_USER, SMTP_PASS } = process.env;

export async function POST(request: NextRequest) {
  const { name, email, role, message } = await request.json();

  const transport = createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const mailOptions = {
    from: SMTP_USER,
    to: SMTP_USER,
    subject: `Novo contato de ${name} para a vaga de ${role}`,
    html: `
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Vaga:</strong> ${role}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transport.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}

