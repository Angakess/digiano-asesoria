import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const CAPTCHA_SERVER_KEY = process.env.CAPTCHA_SERVER_KEY;

/*
CORS
Permitir requests desde tu frontend
Ejemplo:
https://web.midominio.com
*/
app.use(
  cors({
    origin: [
      "http://localhost:8081", // desarrollo
      process.env.BASE_URL // producción
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// Parsear JSON
app.use(express.json());

/*
Enviar mail
Endpoint:
POST /send-mail
*/
app.post("/api/send-mail", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: process.env.SERVICE,
    host: process.env.HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.MAIL_SENDER,
      pass: process.env.SENDER_PASSWORD,
    },
  });

  const mailOptions = {
    from: "Web Digiano <web@digianoasesores.com>",
    to: process.env.MAIL_OWNER,
    replyTo: email,
    subject: (subject === "" ? name : subject) + " - Contacto",
    html: `
<h2>Nuevo mensaje</h2>
<p><b>Nombre:</b> ${name}</p>
<p><b>Email:</b> ${email}</p>
<p><b>Empresa:</b> ${subject || "N/A"}</p>
<p><b>Mensaje:</b></p>
<p>${message.replace(/\n/g, "<br>")}</p>
`,
  };

  try {
    await transporter.sendMail(mailOptions);

    res.json({
      message: "Mensaje enviado correctamente",
    });

  } catch (error) {

    res.status(500).json({
      message: "Error al enviar mensaje",
    });

  }
});


/*
Verificar captcha
Endpoint:
POST /verify
*/
app.post("/api/verify", async (req, resp) => {

  const { captchaValue } = req.body;

  try {

    const res = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: CAPTCHA_SERVER_KEY,
          response: captchaValue,
        }),
      }
    );

    const data = await res.json();

    console.log("CAPTCHA RESPONSE:", data);

    resp.send(data);

  } catch (error) {

    console.log(error)
    resp.status(500).send({
      message:
        "Error al verificar el captcha",
    });

  }

});


app.listen(PORT, "0.0.0.0", () => {

  console.log(
    `API corriendo en puerto ${PORT}`
  );

});
