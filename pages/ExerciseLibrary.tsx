import allExercises from '../exercises/all_exercises.json'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const allMuscles = Array.from(
  new Set(
    allExercises.flatMap((ex: any) => ex.primaryMuscles || [])
  )
).sort()

export default function ExerciseLibrary() {
  const [search, setSearch] = useState('')
  const [muscle, setMuscle] = useState('')
  const navigate = useNavigate()

  const filtered = (allExercises as any[])
    .filter(ex =>
      (!muscle || (ex.primaryMuscles && ex.primaryMuscles.includes(muscle))) &&
      (!search || ex.name.toLowerCase().includes(search.toLowerCase()))
    )
    .slice(0, 100)

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <button onClick={() => navigate(-1)} className="text-blue-500">← Retour</button>
        <h1 className="text-xl font-bold">Bibliothèque d'exercices</h1>
      </div>
      <input
        type="text"
        placeholder="Recherche..."
        className="w-full mb-3 p-2 border rounded"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <select
        className="w-full mb-3 p-2 border rounded"
        value={muscle}
        onChange={e => setMuscle(e.target.value)}
      >
        <option value="">Tous les muscles</option>
        {allMuscles.map(m => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>
      <ul>
        {filtered.map(ex => (
          <li key={ex.id || ex.name} className="mb-2">
            <div className="p-3 bg-white rounded shadow flex items-center gap-3">
              {ex.images && ex.images.length > 0 && (
                <img
                  src={`/exercises/${ex.images[0]}`}
                  alt={ex.name}
                  style={{ width: 60, borderRadius: 8 }}
                />
              )}
              <div>
                <div className="font-semibold">{ex.name}</div>
                <div className="text-xs text-gray-500">{(ex.primaryMuscles || []).join(', ')}</div>
              </div>
              {/* Ajoute ici un bouton pour sélectionner l'exercice si besoin */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}