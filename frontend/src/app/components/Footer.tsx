// app/components/Footer.tsx
"use client";

import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-cream text-black py-16 px-8">
      <div className="container mx-auto">
        <div className="text-center md:text-left mb-8">
          <h1 className="text-4xl font-bold font-poppins">SW Library</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Join our community */}
          <div className="border border-black p-6 rounded-lg">
            <h2 className="text-2xl font-semibold font-poppins mb-4">
              Join our community
            </h2>
            <p className="text-gray-800 font-itim">
              123 Anywhere St, Any City ST
              <br />
              12345
              <br />
              Tel: +123-456-7890
              <br />
              hello@reallygreatsite.com
            </p>
          </div>
          {/* Business Hours */}
          <div className="border border-black p-6 rounded-lg">
            <h2 className="text-2xl font-semibold font-poppins mb-4">
              Business Hours
            </h2>
            <p className="text-gray-800 font-itim">
              Monday - Friday: 9 AM — 6 PM
              <br />
              Saturday: 9 AM — 12 NN
            </p>
          </div>
          {/* Get social */}
          <div className="border border-black p-6 rounded-lg flex flex-col justify-between items-center md:items-start h-full">
            <h2 className="text-2xl font-semibold font-poppins mb-4">
              Get social
            </h2>
            <div className="flex space-x-4 mt-auto">
              <a
                href="#"
                aria-label="Facebook"
                className="bg-black text-cream rounded-full w-14 h-14 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <FaFacebookF size={30} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="bg-black text-cream rounded-full w-14 h-14 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <FaTwitter size={30} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="bg-black text-cream rounded-full w-14 h-14 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
