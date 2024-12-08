import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  function handleOnChange(value) {
    setEmail(value);
  }

  function handleOnClick(e) {
    const section = e.innerHTML;
  }

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-6 inline-block relative after:content-[''] after:absolute after:w-2/3 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-gradient-to-r after:from-[rgb(19,120,119)] after:to-transparent">
              Digiano Asesores
            </h3>
            <p className="mb-4">
              Tu seguridad y tranquilidad son nuestra prioridad
            </p>
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-6 inline-block relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-gradient-to-r after:from-[rgb(19,120,119)] after:to-transparent">
                Asesoría Personalizada
              </h4>
              <form className="relative">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-[rgb(19,120,119)] focus:ring-2 focus:ring-[rgb(19,120,119)] focus:ring-opacity-20 transition-all duration-200"
                  required=""
                  onChange={(e) => handleOnChange(e.target.value)}
                  value={email}
                />
                <button
                  type="submit"
                  className="mt-2 w-full bg-[rgb(19,120,119)] hover:bg-[rgb(19,120,119)]/90 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 disabled:opacity-50"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6 inline-block relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-gradient-to-r after:from-[rgb(19,120,119)] after:to-transparent">
              Enlaces rápidos
            </h4>
            <ul
              className="space-y-2"
              onClick={(event) => {
                const target = event.target;
                const id = target.innerHTML.toLowerCase();
                const element = document.getElementById(id);
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <li>
                <a
                  className="hover:text-[rgb(19,120,119)] cursor-pointer"
                  onClick={(e) => handleOnClick(e)}
                >
                  Inicio
                </a>
              </li>
              <li>
                <a className="hover:text-[rgb(19,120,119)] cursor-pointer">
                  Servicios
                </a>
              </li>
              <li>
                <a className="hover:text-[rgb(19,120,119)] cursor-pointer">
                  Nosotros
                </a>
              </li>
              <li>
                <a className="hover:text-[rgb(19,120,119)] cursor-pointer">
                  Testimonios
                </a>
              </li>
              <li>
                <a className="hover:text-[rgb(19,120,119)] cursor-pointer">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6 inline-block relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-gradient-to-r after:from-[rgb(19,120,119)] after:to-transparent">
              Contáctanos
            </h4>
            <p>Email: atencion@digianoasesores.com</p>
            <p>Teléfono: 2213585481</p>
            <div className="mt-4">
              <h5 className="text-sm font-semibold mb-6 inline-block relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-gradient-to-r after:from-[rgb(19,120,119)] after:to-transparent">
                Síguenos
              </h5>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100087191461502"
                  target="_blank"
                  className="hover:text-[rgb(19,120,119)]"
                >
                  Facebook
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=2213585481&amp;text=Hola%21+Quiero+hacer+una+cotizacion&amp;type=phone_number&amp;app_absent=0"
                  target="_blank"
                  className="hover:text-[rgb(19,120,119)]"
                >
                  WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/digiano.asesores/"
                  target="_blank"
                  className="hover:text-[rgb(19,120,119)]"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>© 2024 Digiano Asesores. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
