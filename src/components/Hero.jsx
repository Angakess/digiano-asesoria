import video1 from "../assets/waves.mp4"

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full transition-opacity duration-1000 opacity-100 bg-black">
        <video className="object-cover w-full h-full animate-[fadeOutIn_21.03s_infinite]" src={video1} loop autoPlay muted ></video>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white sapce-y-8">
          <div>
            <h1 className="text-5xl font-bold mb-4">
              Bienvenido a Digiano Asesores
            </h1>
            <p className="text-xl mb-4">Asegurando tranquilidad</p>
          </div>
          <a className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#157f7e] to-teal-600 text-white font-semibold py-4 px-8 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(21,127,126,0.4)] active:scale-95 cursor-pointer"
            onClick={() => {
                const element = document.getElementById("contacto")
                element?.scrollIntoView({behavior:"smooth"})
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
              className="lucide lucide-shield w-5 h-5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
            </svg>
            <span className="relative z-10">Protege tu futuro hoy mismo</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-teal-600 to-[#157f7e]"></div>
          </a>
        </div>
      </div>
    </section>
  );
}
