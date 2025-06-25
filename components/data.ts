export type ExerciseData = {
  id: string
  name: string
  muscles: string[]
}

export const EXERCISES: ExerciseData[] = [
  { id: 'bench-press', name: 'Développé couché', muscles: ['Chest', 'Shoulders', 'Triceps'] },
  { id: 'pull-ups', name: 'Tractions', muscles: ['Back', 'Biceps'] },
  { id: 'squat', name: 'Squat', muscles: ['Legs', 'Glutes'] },
  { id: 'plank', name: 'Plank', muscles: ['Abs', 'Core'] },
  { id: 'deadlift', name: 'Deadlift', muscles: ['Back', 'Legs', 'Glutes'] },
  { id: 'overhead-press', name: 'Développé épaules', muscles: ['Shoulders', 'Triceps'] },
  // ajoute d'autres exercices ici
]

export const ALL_MUSCLES = [
  'Chest',
  'Back',
  'Legs',
  'Abs',
  'Shoulders',
  'Biceps',
  'Triceps',
  'Glutes',
  'Core',
]