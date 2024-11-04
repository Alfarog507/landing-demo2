// app/components/Header.tsx
"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-cream border-b-2 border-gray-950 p-4 md:px-8 flex items-center justify-between z-50">
      <div className="flex items-center">
        <a href="#hero" className="flex items-center">
          <img
            src="/images/Logo.png"
            alt="Logo de la Empresa"
            className="h-20"
          />
          <span className="ml-3 text-2xl font-bold font-poppins text-black">
            SW Library
          </span>
        </a>
      </div>
      {/* Icono de Hamburguesa en Móviles */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="text-gray-700 hover:text-black focus:outline-none"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {/* Menú de Navegación */}
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col md:flex-row md:flex space-y-4 md:space-y-0 space-x-0 md:space-x-8 absolute md:relative top-full left-0 w-full md:w-auto bg-cream md:bg-transparent p-4 md:p-0 border-t border-gray-200 md:border-none`}
      >
        <a
          href="#features"
          className="text-gray-700 text-xl hover:text-black font-itim transition"
        >
          Comunidad
        </a>
        <a
          href="#features"
          className="text-gray-700 text-xl hover:text-black font-itim transition"
        >
          Características
        </a>
        <a
          href="#testimonials"
          className="text-gray-700 text-xl hover:text-black font-itim transition"
        >
          Testimonios
        </a>
        <a
          href="#contact"
          className="text-gray-700 text-xl hover:text-black font-itim transition"
        >
          Contacto
        </a>
      </nav>
    </header>
  );
};

export default Header;
