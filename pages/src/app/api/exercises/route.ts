import { NextResponse } from "next/server";

const exercises = [
  {
    id: 1,
    name: "Push Up",
    description: "A basic upper body exercise.",
    muscles: ["Chest", "Triceps", "Shoulders"],
    equipment: ["Bodyweight"],
  },
  {
    id: 2,
    name: "Squat",
    description: "A fundamental lower body exercise.",
    muscles: ["Quadriceps", "Glutes", "Hamstrings"],
    equipment: ["Bodyweight"],
  },
  {
    id: 3,
    name: "Deadlift",
    description: "A compound exercise for the posterior chain.",
    muscles: ["Back", "Glutes", "Hamstrings"],
    equipment: ["Barbell"],
  },
];

export async function GET() {
  return NextResponse.json(exercises);
}
