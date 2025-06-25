"use client";

import React from "react";

interface ExerciseCardProps {
  name: string;
  description?: string;
  muscles?: string[];
  equipment?: string[];
}

export default function ExerciseCard({
  name,
  description,
  muscles,
  equipment,
}: ExerciseCardProps) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition cursor-pointer bg-white text-black max-w-md">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      {description && (
        <p className="text-sm mb-2 line-clamp-3">{description}</p>
      )}
      {muscles && muscles.length > 0 && (
        <p className="text-xs text-gray-600 mb-1">
          Muscles: {muscles.join(", ")}
        </p>
      )}
      {equipment && equipment.length > 0 && (
        <p className="text-xs text-gray-600">
          Equipment: {equipment.join(", ")}
        </p>
      )}
    </div>
  );
}
