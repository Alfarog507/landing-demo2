// app/components/FeaturesGrid.tsx
"use client";

import React from "react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    imageSrc: "/images/notes.svg",
    title: "Connect with potential buyers",
    description:
      "Highlight a specific service or product. It can be a property appraisal service, a consultation, or something uniquely yours. Give it room to shine here.",
  },
  {
    imageSrc: "/images/educator.svg",
    title: "Browse curated listings",
    description:
      "Highlight a specific service or product. It can be a property appraisal service, a consultation, or something uniquely yours. Give it room to shine here.",
  },
  {
    imageSrc: "/images/educator.svg",
    title: "Sell your products",
    description:
      "Highlight a specific service or product. It can be a property appraisal service, a consultation, or something uniquely yours. Give it room to shine here.",
  },
  {
    imageSrc: "/images/notes.svg",
    title: "Sell your products",
    description:
      "Highlight a specific service or product. It can be a property appraisal service, a consultation, or something uniquely yours. Give it room to shine here.",
  },
  // Añade más tarjetas aquí si es necesario
];

const FeaturesGrid: React.FC = () => {
  return (
    <section className="py-20 px-8 bg-cream">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            imageSrc={feature.imageSrc}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesGrid;
