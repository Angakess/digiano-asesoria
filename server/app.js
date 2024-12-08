import express from "express";
import nodemailer from "nodemailer";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.use(
  cors({
    origin:"http://localhost:5173",
    /* origin: "https://franco-asesores.netlify.app",  */// URL del frontend durante el desarrollo
    methods: ["GET", "POST"], // Métodos permitidos
    allowedHeaders: ["Content-Type"],
  })
);

// Middleware para parsear JSON
app.use(express.json());

// Ruta para servir los archivos estáticos del frontend
app.use(express.static(path.join(__dirname, "../dist")));

// Ruta para manejar el envío de correos
app.post("/send-mail", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: process.env.SERVICE,
    host: process.env.HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.MAIL_SENDER,
      pass: process.env.SENDER_PASSWORD, // Usa variables de entorno para protegerlas
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.MAIL_OWNER,
    subject: subject,
    html: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; padding: 20px;">
<h2 style="text-align: center; color: #1f2937;"><span style="color: #003366;">Nuevo Mensaje de Contacto</span></h2>
<hr style="border: none; border-top: 2px solid #f0f0f0; margin: 20px 0;" />
<p><strong>Nombre:</strong> ${name}</p>
<p><strong>Correo Electr&oacute;nico:</strong> <a text-decoration: none;" href="mailto:${email}">${email}</a></p>
<p><strong>Mensaje:</strong></p>
<div style="background-color: #f9f9f9; border-left: 4px solid #1F2937; padding: 10px; margin: 10px 0;">${message.replace(
      /\n/g,
      "<br />"
    )} <!-- Convierte saltos de línea a <br> --></div>
<hr style="border: none; border-top: 2px solid #f0f0f0; margin: 20px 0;" /><footer style="text-align: center; font-size: 0.9em; color: #999;">Este mensaje fue enviado desde el formulario de contacto.</footer></div>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: "Error al enviar el mensaje - "+error });
    }
    res.status(200).json({ message: "Correo enviado correctamente" });
  });
});

// Ruta para manejar otras solicitudes (SPA)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
