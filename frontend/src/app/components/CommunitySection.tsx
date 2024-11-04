// app/components/CommunitySection.tsx
"use client";

import React from "react";

type CommunitySectionProps = {
  title: string;
  description: string;
  imageSrc: string;
};

const CommunitySection: React.FC<CommunitySectionProps> = ({
  title,
  description,
  imageSrc,
}) => {
  return (
    <section className="bg-cream text-black py-16 px-8 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Imagen */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={imageSrc}
            alt="Comunidad"
            className="w-full h-auto rounded-lg border-black border-8"
          />
        </div>
        {/* Texto y Botones */}
        <div className="md:w-1/2 flex flex-col items-start md:items-end">
          <h2 className="text-5xl font-bold leading-tight font-poppins mb-6 text-left md:text-right">
            {title}
          </h2>
          <p className="text-lg text-gray-700 font-itim mb-8 text-left md:text-right">
            {description}
          </p>
          {/* <div className="flex flex-col space-y-4 w-full md:w-auto">
            <button className="border border-gray-700 text-gray-700 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Buy
            </button>
            <button className="border border-gray-700 text-gray-700 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Sell
            </button>
            <button className="border border-gray-700 text-gray-700 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Rent
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
