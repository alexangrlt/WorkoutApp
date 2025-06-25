import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { EXERCISES, ALL_MUSCLES } from '../components/data'

export default function AddExercise() {
  const navigate = useNavigate()
  const location = useLocation()

  // récupère la fonction addExercise passée en navigation state
  // (sinon fallback console.warn)
  const addExercise = (location.state as any)?.addExercise

  const [selectedMuscle, setSelectedMuscle] = useState<string | 'All'>('All')
  const [searchTerm, setSearchTerm] = useState('')

  // filtre des exercices selon muscle sélectionné + recherche texte
  const filteredExercises = EXERCISES.filter((ex) => {
    const matchMuscle = selectedMuscle === 'All' || ex.muscles.includes(selectedMuscle)
    const matchSearch = ex.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchMuscle && matchSearch
  })

  const onAdd = (name: string) => {
    if (addExercise) {
      addExercise(name)
      navigate(-1) // retour à la page workout
    } else {
      console.warn('addExercise function not provided')
      navigate(-1)
    }
  }

  return (
    <div className="max-w-md mx-auto min-h-screen p-6 bg-gray-50">
      <header className="mb-6 flex justify-between items-center">
        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 hover:underline font-semibold"
        >
          ← Retour
        </button>
        <h1 className="text-3xl font-extrabold">Ajouter un exercice</h1>
      </header>

      <div className="mb-4">
        <input
          type="search"
          placeholder="Rechercher un exercice..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-xl border border-gray-300 p-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Recherche d'exercice"
        />
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedMuscle('All')}
          className={`px-4 py-2 rounded-full border ${
            selectedMuscle === 'All' ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 text-gray-700'
          } font-semibold`}
        >
          Tous
        </button>
        {ALL_MUSCLES.map((muscle) => (
          <button
            key={muscle}
            onClick={() => setSelectedMuscle(muscle)}
            className={`px-4 py-2 rounded-full border ${
              selectedMuscle === muscle
                ? 'bg-blue-600 text-white border-blue-600'
                : 'border-gray-300 text-gray-700'
            } font-semibold`}
          >
            {muscle}
          </button>
        ))}
      </div>

      <ul className="divide-y divide-gray-200 border-t border-b border-gray-200 rounded-xl bg-white">
        {filteredExercises.length === 0 && (
          <li className="p-4 text-center text-gray-500">Aucun exercice trouvé</li>
        )}
        {filteredExercises.map(({ id, name, muscles }) => (
          <li
            key={id}
            className="p-4 cursor-pointer hover:bg-blue-50 flex justify-between items-center"
            onClick={() => onAdd(name)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') onAdd(name)
            }}
            aria-label={`Ajouter exercice ${name}`}
          >
            <span>{name}</span>
            <span className="text-gray-400 text-sm italic">{muscles.join(', ')}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}