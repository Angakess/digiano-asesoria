import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {});

  // Array containing navigation items
  const navItems = [
    { id: 1, section: "inicio", text: "Inicio" },
    { id: 2, section: "servicios", text: "Servicios" },
    { id: 3, section: "nosotros", text: "Nosotros" },
    { id: 4, section: "testimonios", text: "Testimonios" },
    { id: 5, section: "contacto", text: "Contacto" },
  ];

  return (
    <div className="fixed left-0 right-0 z-[9999] bg-[#1F2937] flex justify-between items-center h-24 mx-auto px-4 text-white">
      {/* Logo */}
      <h1 className="w-full text-3xl font-bold text-[#ffffff]">
        DigianoAsesores
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:bg-[#ffffff] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            onClick={() => {
              const element = document.getElementById(item.section);
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "z-50 fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#1F2937] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-[#ffffff] m-4">LOGO</h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b hover:bg-[#ffffff] duration-300 hover:text-black cursor-pointer border-gray-600"
            onClick={() => {
              const element = document.getElementById(item.section);
              element?.scrollIntoView({ behavior: "smooth" });
              handleNav();
            }}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
