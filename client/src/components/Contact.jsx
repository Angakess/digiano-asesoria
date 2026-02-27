import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [info, setInfo] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({ type: "", msg: "" });
  const recaptcha = useRef();

  function handleOnChange(key, value) {
    setInfo({
      ...info,
      [key]: value,
    });
  }
  async function handleOnSubmit(e) {
    e.preventDefault();

    setLoading(true);

    const captchaValue = recaptcha.current.getValue();
    if (!captchaValue) {
      setResponse({
        type: "error",
        msg: "Por favor verifique que no sea un robot",
      });
      setLoading(false);
      return;
    }
    try {
      const res = await fetch("/api/verify", {
        method: "POST",
        body: JSON.stringify({ captchaValue }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!data.success) {
        setResponse({ type: "error", msg: "Error al verificar el reCAPTCHA" });
        setLoading(false);
        return;
      }
    } catch (error) {
      console.log(error);
      setResponse({ type: "error", msg: "Error al verificar el reCAPTCHA" });
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info),
      });

      if (!res.ok) {
        // Manejo de errores si el servidor responde con un código no exitoso
        setResponse({
          type: "error",
          msg: "Error al enviar el mensaje, vuelva a intentarlo más tarde",
        });
        return;
      }

      // Parsear el JSON solo si la respuesta es exitosa
      const result = await res.json();
      setResponse({ type: "success", msg: result.message });
      setInfo({
        name: "",
        subject: "",
        email: "",
        message: "",
      });
      recaptcha.current.reset();
    } catch (error) {
      setResponse({
        type: "error",
        msg: "Error al enviar el mensaje, vuelva a intentarlo más tarde",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      id="contacto"
      className="section min-h-screen bg-gradient-to-b from-white to-gray-50 py-8"
    >
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Contáctanos
        </h2>
        <p className="text-center text-gray-600 mb-4">
          Déjanos tu mensaje y un asesor se comunicará contigo a la brevedad
        </p>
        <div className="bg-white rounded-2xl shadow-xl p-5 transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
          <form className="space-y-6" onSubmit={(e) => handleOnSubmit(e)}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nombre <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nombre Completo"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[rgb(19,120,119)] focus:ring-2 focus:ring-[rgb(19,120,119)] focus:ring-opacity-20 transition-all duration-200"
                required=""
                onChange={(e) => {
                  handleOnChange(e.target.name, e.target.value);
                }}
                value={info.name}
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Empresa
              </label>
              <input
                type="text"
                id="business"
                name="subject"
                placeholder="Nombre de su empresa (opcional)"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[rgb(19,120,119)] focus:ring-2 focus:ring-[rgb(19,120,119)] focus:ring-opacity-20 transition-all duration-200"
                onChange={(e) => {
                  handleOnChange(e.target.name, e.target.value);
                }}
                value={info.subject}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Correo electrónico <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Su correo"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[rgb(19,120,119)] focus:ring-2 focus:ring-[rgb(19,120,119)] focus:ring-opacity-20 transition-all duration-200"
                required=""
                onChange={(e) => {
                  handleOnChange(e.target.name, e.target.value);
                }}
                value={info.email}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mensaje <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Ingrese su mensaje"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[rgb(19,120,119)] focus:ring-2 focus:ring-[rgb(19,120,119)] focus:ring-opacity-20 transition-all duration-200 resize-none"
                required=""
                onChange={(e) => {
                  handleOnChange(e.target.name, e.target.value);
                }}
                value={info.message}
              ></textarea>
            </div>
            <div className="flex justify-center">
              <ReCAPTCHA
                ref={recaptcha}
                sitekey={import.meta.env.VITE_CAPTCHA_SITE_KEY}
              ></ReCAPTCHA>
            </div>
            {response.msg && (
              <div
                className={`mt-4 text-center text-sm font-medium ${
                  response.type === "success"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {response.msg}
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[rgb(19,120,119)] to-teal-600 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transform hover:-translate-y-0.5 transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-[rgb(19,120,119)] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
              disabled={
                info.name === "" ||
                info.email === "" ||
                info.message === "" ||
                loading
              }
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 12a8 8 0 118 8 8 8 0 01-8-8zm0 0v.01M4 12h16"
                  />
                </svg>
              ) : null}
              {loading ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
