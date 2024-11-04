// app/components/TestimonialsSection.tsx
"use client";

import React from "react";

const testimonials = [
  {
    text: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
    name: "Ndemi Otieno",
    title: "Real Estate Agent",
  },
  {
    text: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
    name: "Anonymous",
    title: "Satisfied Customer",
  },
  {
    text: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
    name: "Wanda Strom",
    title: "Small Business Owner",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-8 md:px-20">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold font-poppins mb-12 leading-tight">
          Our platform is tried and trusted by both realtors and consumers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border border-cream bg-transparent p-6 rounded-lg"
            >
              <p className="text-white font-itim mb-4">{testimonial.text}</p>
              <p className="font-semibold text-cream">
                {testimonial.name},{" "}
                <span className="font-normal">{testimonial.title}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
