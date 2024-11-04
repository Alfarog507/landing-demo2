// app/components/FeatureCard.tsx
"use client";

import React from "react";

type FeatureCardProps = {
  imageSrc: string;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="border border-black bg-cream rounded-lg p-6 text-center flex flex-col items-center">
      <img
        src={imageSrc}
        alt={title}
        className="mb-4 h-32 w-32 object-contain"
      />
      <h3 className="text-xl text-black font-bold mb-2 border-b-2 border-black">
        {title}
      </h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default FeatureCard;
