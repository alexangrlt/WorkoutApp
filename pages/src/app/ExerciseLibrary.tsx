"use client";

import React, { useEffect, useState } from "react";
import ExerciseCard from "../components/ExerciseCard";

interface Exercise {
  id: number;
  name: string;
  description?: string;
  muscles?: string[];
  equipment?: string[];
}

export default function ExerciseLibrary() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchExercises() {
      try {
        const res = await fetch("/api/exercises");
        const data = await res.json();
        setExercises(data);
      } catch (error) {
        console.error("Failed to fetch exercises", error);
      } finally {
        setLoading(false);
      }
    }
    fetchExercises();
  }, []);

  return (
    <main className="min-h-screen p-6 bg-white text-black font-sans">
      <h1 className="text-3xl font-bold mb-6">Exercise Library</h1>
      {loading ? (
        <p>Loading exercises...</p>
      ) : exercises.length === 0 ? (
        <p>No exercises found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((exercise) => (
            <ExerciseCard
              key={exercise.id}
              name={exercise.name}
              description={exercise.description}
              muscles={exercise.muscles}
              equipment={exercise.equipment}
            />
          ))}
        </div>
      )}
    </main>
  );
}
