"use client";

import React, { useState } from "react";

export default function AddExercise() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [muscles, setMuscles] = useState("");
  const [equipment, setEquipment] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate adding exercise
    setMessage(`Exercise "${name}" added (simulation).`);
    setName("");
    setDescription("");
    setMuscles("");
    setEquipment("");
  };

  return (
    <main className="min-h-screen p-6 bg-white text-black font-sans max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6">Add New Exercise</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-semibold mb-1">
            Exercise Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="description" className="block font-semibold mb-1">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={3}
          />
        </div>
        <div>
          <label htmlFor="muscles" className="block font-semibold mb-1">
            Muscles (comma separated)
          </label>
          <input
            id="muscles"
            type="text"
            value={muscles}
            onChange={(e) => setMuscles(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="equipment" className="block font-semibold mb-1">
            Equipment (comma separated)
          </label>
          <input
            id="equipment"
            type="text"
            value={equipment}
            onChange={(e) => setEquipment(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          Add Exercise
        </button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </main>
  );
}
