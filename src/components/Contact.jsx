import { useEffect, useState } from "react";

export default function Contact() {
  const [info, setInfo] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  //3798fcf9-ac16-467c-bce2-fda624b800b4

  function handleOnChange(key, value) {
    setInfo({
      ...info,
      [key]: value,
    });
  }
  async function handleOnSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/send-mail",{
      /* const res = await fetch(
        "https://digiano-asesores-backend-285770e645e0.herokuapp.com/send-mail", */
        //{
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(info),
        }
      );

      if (!res.ok) {
        // Manejo de errores si el servidor responde con un código no exitoso
        console.error(`Error: ${res.status}`);
        return;
      }

      // Parsear el JSON solo si la respuesta es exitosa
      const result = await res.json();
      console.log(result);
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  }

  return (
    <div
      id="contacto"
      className="section min-h-screen bg-gradient-to-b from-white to-gray-50 py-16"
    >
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Contáctanos
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Déjanos tu mensaje y un asesor se comunicará contigo a la brevedad
        </p>
        <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
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
                placeholder="Nombre de su empresa"
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
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[rgb(19,120,119)] to-teal-600 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transform hover:-translate-y-0.5 transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-[rgb(19,120,119)] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              disabled={
                info.name == "" || info.email == "" || info.message == ""
              }
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
