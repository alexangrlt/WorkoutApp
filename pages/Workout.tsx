import { useState } from 'react'
import ExerciseCard from '../components/ExerciseCard.tsx'


export default function Workout() {
    const [exercises, setExercises] = useState([
    { name: 'Développé couché', sets: [{ reps: '', weight: '' }] },
    { name: 'Tractions', sets: [{ reps: '', weight: '' }] }
    ])

    return (
    <div>
        <h1 className="text-2xl font-bold mb-4">🏋️ Séance en cours</h1>
        {exercises.map((ex, i) => (
            <div key={i} className="mb-6 bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{ex.name}</h2>
            {ex.sets.map((set, j) => (
            <div key={j} className="flex gap-2 mt-2">
                <input
                type="number"
                placeholder="Reps"
                className="w-1/2 p-1 border rounded"
                />
                <input
                    type="number"
                    placeholder="Poids (kg)"
                    className="w-1/2 p-1 border rounded"
                />
            </div>
            ))}
        </div>
        ))}
    </div>
    )
}
