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
              <br/>
              <a
                href="https://api.whatsapp.com/send/?phone=2213585481&amp;text=Hola%21+Quiero+hacer+una+cotizacion&amp;type=phone_number&amp;app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg border-2 border-white transition-all duration-300 w-full sm:w-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone-call w-5 h-5 transition-transform group-hover:rotate-12 duration-300"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  <path d="M14.05 2a9 9 0 0 1 8 7.94"></path>
                  <path d="M14.05 6A5 5 0 0 1 18 10"></path>
                </svg>
                <span>Habla con un asesor</span>
                <div className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-10 scale-105 transition-all duration-300"></div>
              </a>
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
