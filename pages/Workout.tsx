import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { EXERCISES } from '../components/Data'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

type Set = {
  id: string
  reps: string
  weight: string
  rest: string
  feeling: string
}

type ExerciseSession = {
  id: string
  name: string
  sets: Set[]
}

function generateId() {
  return Math.random().toString(36).substring(2, 9)
}

export default function Workout() {
  const { workoutId } = useParams()
  const navigate = useNavigate()

  // State exercice / sets, initial exercise can be empty or with some sample
  const [exercises, setExercises] = useState<ExerciseSession[]>([
    {
      id: generateId(),
      name: 'Développé couché',
      sets: [{ id: generateId(), reps: '', weight: '', rest: '', feeling: '' }],
    },
  ])

  // Ajoute un exercice de la liste AddExercise
  const addExercise = (exName: string) => {
    setExercises((prev) => [
      ...prev,
      { id: generateId(), name: exName, sets: [{ id: generateId(), reps: '', weight: '', rest: '', feeling: '' }] },
    ])
  }

  // Modif valeur dans une série (reps, poids, rest ou feeling)
  const onChangeSet = (
    exIndex: number,
    setIndex: number,
    field: keyof Omit<Set, 'id'>,
    value: string,
  ) => {
    const updated = [...exercises]
    updated[exIndex].sets[setIndex][field] = value
    setExercises(updated)
  }

  // Ajouter une nouvelle série à exercice
  const addSet = (exIndex: number) => {
    const updated = [...exercises]
    const newSet: Set = { id: generateId(), reps: '', weight: '', rest: '', feeling: '' }
    updated[exIndex].sets.push(newSet)
    setExercises(updated)
  }

  // Supprimer une série
  const removeSet = (exIndex: number, setId: string) => {
    const updated = [...exercises]
    updated[exIndex].sets = updated[exIndex].sets.filter((set) => set.id !== setId)
    setExercises(updated)
  }

  // Supprimer un exercice complet
  const removeExercise = (exId: string) => {
    setExercises((prev) => prev.filter((ex) => ex.id !== exId))
  }

  // Calcul volume par série = reps * poids
  const getVolumeSerie = (set: Set) => {
    const repsNum = Number(set.reps)
    const weightNum = Number(set.weight)
    if (isNaN(repsNum) || isNaN(weightNum)) return 0
    return repsNum * weightNum
  }

  // Calcul volume total exercice
  const getVolumeExercice = (ex: ExerciseSession) =>
    ex.sets.reduce((total, set) => total + getVolumeSerie(set), 0)

  // Drag & drop reordering des exercices
  const onDragEnd = (result: any) => {
    if (!result.destination) return
    const updated = Array.from(exercises)
    const [removed] = updated.splice(result.source.index, 1)
    updated.splice(result.destination.index, 0, removed)
    setExercises(updated)
  }

  // Naviguer vers ajout d'exercice
  const onAddExerciseClick = () => {
    navigate(`/workout/${workoutId ?? 'new'}/add-exercise`, { state: { addExercise } })
  }

  return (
    <div className="max-w-md mx-auto p-6 min-h-screen bg-gray-50">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-extrabold">🏋️ Séance en cours</h1>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          onClick={onAddExerciseClick}
          aria-label="Ajouter un exercice"
        >
          + Exercice
        </button>
      </header>

      {exercises.length === 0 && (
        <p className="text-gray-600 text-center mt-20">Aucun exercice, ajoute-en un !</p>
      )}

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="exercises">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {exercises.map((ex, i) => (
                <Draggable key={ex.id} draggableId={ex.id} index={i}>
                  {(provided) => (
                    <div
                      className="bg-white rounded-2xl shadow-md p-5 mb-8"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {/* En-tête exercice avec suppression */}
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold text-gray-800">{ex.name}</h2>
                        <button
                          onClick={() => removeExercise(ex.id)}
                          aria-label={`Supprimer ${ex.name}`}
                          className="text-red-500 hover:text-red-600 font-semibold"
                        >
                          Supprimer
                        </button>
                      </div>

                      {/* Séries */}
                      {ex.sets.map((set, j) => (
                        <div
                          key={set.id}
                          className="grid grid-cols-[1fr_1fr_1fr_1fr_auto] gap-3 mb-3 items-center"
                        >
                          <input
                            type="number"
                            min={0}
                            placeholder="Réps"
                            className="border rounded-xl p-2 text-center text-gray-900"
                            value={set.reps}
                            onChange={(e) => onChangeSet(i, j, 'reps', e.target.value)}
                            aria-label={`Réps série ${j + 1} ${ex.name}`}
                          />
                          <input
                            type="number"
                            min={0}
                            step={0.1}
                            placeholder="Poids"
                            className="border rounded-xl p-2 text-center text-gray-900"
                            value={set.weight}
                            onChange={(e) => onChangeSet(i, j, 'weight', e.target.value)}
                            aria-label={`Poids série ${j + 1} ${ex.name}`}
                          />
                          <input
                            type="number"
                            min={0}
                            step={1}
                            placeholder="Repos (sec)"
                            className="border rounded-xl p-2 text-center text-gray-900"
                            value={set.rest}
                            onChange={(e) => onChangeSet(i, j, 'rest', e.target.value)}
                            aria-label={`Repos série ${j + 1} ${ex.name}`}
                          />
                          <input
                            type="text"
                            placeholder="Ressenti"
                            className="border rounded-xl p-2 text-center text-gray-900"
                            value={set.feeling}
                            onChange={(e) => onChangeSet(i, j, 'feeling', e.target.value)}
                            aria-label={`Ressenti série ${j + 1} ${ex.name}`}
                          />
                          <button
                            onClick={() => removeSet(i, set.id)}
                            aria-label={`Supprimer série ${j + 1} ${ex.name}`}
                            className="text-red-500 font-semibold hover:text-red-600"
                          >
                            ✕
                          </button>
                        </div>
                      ))}

                      <div className="flex justify-between items-center mt-3">
                        <button
                          onClick={() => addSet(i)}
                          className="text-blue-600 font-semibold hover:underline"
                          aria-label={`Ajouter une série à ${ex.name}`}
                        >
                          + Ajouter une série
                        </button>
                        <p className="text-gray-700 font-semibold">
                          Volume: {getVolumeExercice(ex).toLocaleString()} kg
                        </p>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}

              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}