import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const user = process.env.FROM_EMAIL;
const pass = process.env.FROM_EMAIL_PASS;
const toEmail = process.env.TO_EMAIL;

export async function POST(request) {
  const body = await request.json();

  console.log(body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });

  const mailOptions = {
    from: user,
    to: toEmail,
  };

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `JKFIX.fi - Uusi yhteydenotto henkilöltä ${body.firstName}`,
      html: `<h1>Olet saanut uuden viestin 🎉</h1>
      <h2>Lähettäjän tiedot</h2>
      <p><strong>Päiväys:</strong> ${body.date}</p>
      <p><strong>Aika:</strong> ${body.time}</p>
      <p><strong>Etunimi:</strong> ${body.firstName}</p>
      <p><strong>Sukunimi:</strong> ${body.lastName}</p>
      <p><strong>Puhelinnumero:</strong> ${body.phoneNumber}</p>
      <p><strong>Sähköpostiosoite:</strong> ${body.email}</p>
      <h2>Viestin tiedot</h2>
      <p><strong>Sisältö:</strong> ${body.content}</p>`,
    });

    return NextResponse.json({
      status: "ok",
      message: "Viesti lähetetty onnistuneesti",
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      status: "error",
      message: "Jotain meni pieleen",
    });
  }

  return NextResponse.json({ status: "ok", message: "kaikki hyvin" });
}
