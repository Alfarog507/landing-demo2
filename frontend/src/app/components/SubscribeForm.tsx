// app/components/SubscribeForm.tsx
"use client";

import React, { useState } from "react";

const SubscribeForm: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    // Aquí podrías agregar lógica para enviar el email a un servicio de suscripción.
  };

  return (
    <section className="bg-black text-white py-16 px-8 md:px-20 text-center">
      <div className="container mx-auto max-w-lg">
        <h2 className="text-4xl font-bold font-poppins mb-4">
          Join Our Newsletter
        </h2>
        <p className="text-lg text-gray-300 font-itim mb-8">
          Subscribe to stay updated on our latest products and offers.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-auto flex-grow py-3 px-4 rounded-lg bg-white text-black focus:outline-none"
            required
          />
          <button
            type="submit"
            className="border border-cream text-cream py-3 px-8 rounded-lg font-semibold hover:bg-cream hover:text-black transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeForm;
