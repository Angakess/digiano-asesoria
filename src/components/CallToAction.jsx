export default function CallToAction() {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a5f7a] via-[#157f7e] to-[#0d9488] opacity-95"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full opacity-5 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full opacity-5 translate-x-1/2 translate-y-1/2"></div>
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            ¿Listo para proteger tu futuro?
          </h2>
          <p className="text-xl md:text-2xl text-gray-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Contáctanos hoy y descubre cómo podemos ayudarte a encontrar la
            mejor cobertura para tus necesidades
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              className="group relative inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#157f7e] font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto cursor-pointer"
              onClick={() => {
                const element = document.getElementById("contacto");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
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
                className="lucide lucide-calculator w-5 h-5 transition-transform group-hover:rotate-12 duration-300"
              >
                <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                <line x1="8" x2="16" y1="6" y2="6"></line>
                <line x1="16" x2="16" y1="14" y2="18"></line>
                <path d="M16 10h.01"></path>
                <path d="M12 10h.01"></path>
                <path d="M8 10h.01"></path>
                <path d="M12 14h.01"></path>
                <path d="M8 14h.01"></path>
                <path d="M12 18h.01"></path>
                <path d="M8 18h.01"></path>
              </svg>
              <span>Solicita una cotización</span>
              <div className="absolute inset-0 rounded-lg border-2 border-white opacity-0 group-hover:opacity-30 scale-105 transition-all duration-300"></div>
            </a>
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
      </div>
    </section>
  );
}
