// app/components/Hero.tsx
"use client";

import React from "react";

type HeroProps = {
  title: string;
  subtitle: string;
  buttonText: string;
};

const Hero: React.FC<HeroProps> = ({ title, subtitle, buttonText }) => {
  return (
    <section className="bg-cream text-black py-20 px-4 text-center md:text-left">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold font-poppins mb-4">{title}</h1>
          <p className="text-xl text-gray-700 mb-6 font-itim">{subtitle}</p>
          <button className="bg-transparent border border-gray-400 text-gray-700 py-2 px-6 rounded-lg font-semibold transition duration-300 hover:bg-black hover:text-cream hover:border-black">
            {buttonText}
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src="/images/image1.jpg"
            alt="Imagen del Producto"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
