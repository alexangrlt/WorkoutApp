"use client";

import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-white text-black font-sans">
      <h1 className="text-4xl font-bold mb-6">Welcome to Hevy Clone</h1>
      <p className="mb-8 text-lg max-w-xl text-center">
        This is a perfect clone of the Hevy app built with React and Tailwind CSS.
      </p>
      <nav className="flex space-x-6">
        <Link
          href="/Workout"
          className="px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition"
        >
          Workout
        </Link>
        <Link
          href="/ExerciseLibrary"
          className="px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition"
        >
          Exercise Library
        </Link>
        <Link
          href="/AddExercise"
          className="px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition"
        >
          Add Exercise
        </Link>
        <Link
          href="/Profil"
          className="px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition"
        >
          Profile
        </Link>
      </nav>
    </main>
  );
}
