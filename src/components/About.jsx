export default function About() {
  return (
    <section id="nosotros" className="section py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Sobre Nosotros
            </h2>
            <p className="text-gray-600 leading-relaxed">
              En Digiano Asesores, nos dedicamos a brindar soluciones integrales
              en seguros, protegiendo lo que más valoras. Con años de
              experiencia en el mercado, nuestro equipo de profesionales está
              comprometido con ofrecer el mejor servicio y asesoramiento
              personalizado.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center group animate-fade-in hover:scale-105 transition-transform duration-300">
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
                  className="lucide lucide-award w-12 h-12 text-primary mb-2 group-hover:rotate-12 transition-transform duration-300"
                >
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                  <circle cx="12" cy="8" r="6"></circle>
                </svg>
                <div className="space-y-1">
                  <h4 className="text-2xl font-bold text-primary">10</h4>
                  <p className="text-gray-600 text-sm">
                    Años Asegurando Tranquilidad
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center group animate-fade-in hover:scale-105 transition-transform duration-300">
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
                  className="lucide lucide-users w-12 h-12 text-primary mb-2 group-hover:rotate-12 transition-transform duration-300"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <div className="space-y-1">
                  <h4 className="text-2xl font-bold text-primary">+200</h4>
                  <p className="text-gray-600 text-sm">Clientes Satisfechos</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center group animate-fade-in hover:scale-105 transition-transform duration-300">
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
                  className="lucide lucide-shield w-12 h-12 text-primary mb-2 group-hover:rotate-12 transition-transform duration-300"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
                <div className="space-y-1">
                  <h4 className="text-2xl font-bold text-primary">+400</h4>
                  <p className="text-gray-600 text-sm">Pólizas Emitidas</p>
                </div>
              </div>
            </div>
            <button className="bg-primary hover:bg-primary-light text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
              Conoce Más
            </button>
          </div>
          <div className="relative">
            <img
              src="https://i.postimg.cc/nLnpzdz7/img-about.avif"
              alt="Equipo de trabajo"
              className="rounded-lg shadow-xl animate-fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
