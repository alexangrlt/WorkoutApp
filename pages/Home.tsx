import { Link } from 'react-router-dom'

const days = [
  { day: 'Lundi', details: 'Chest/Biceps/Shoulders', id: 1 },
  { day: 'Mardi', details: 'Back/Triceps', id: 2 },
  { day: 'Mercredi', details: 'Legs/Abs', id: 3 },
  { day: 'Jeudi', details: 'Repos', id: 4 },
  { day: 'Vendredi', details: 'Chest/Biceps/Shoulders', id: 5 },
  { day: 'Samedi', details: 'Back/Triceps', id: 6 },
  { day: 'Dimanche', details: 'Repos', id: 7 },
]

export default function Home() {
  return (
    <div className="max-w-md mx-auto px-4 py-6 min-h-screen bg-gray-50">
      <nav className="flex justify-between items-center mb-8">
        <h1 className="font-extrabold text-3xl">📅 Planning</h1>
        <Link
          to="/workout/new/add-exercise"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          + Créer séance
        </Link>
      </nav>

      {days.map(({ day, details, id }) => (
        <div
          key={id}
          className="mb-6 bg-white rounded-2xl shadow p-5 flex justify-between items-center"
        >
          <div>
            <h2 className="font-semibold text-lg">{day}</h2>
            <p className="text-gray-600 text-sm">{details}</p>
          </div>
          <Link
            to={`/workout/${id}`}
            className="text-blue-600 font-semibold hover:underline"
          >
            Voir
          </Link>
        </div>
      ))}
    </div>
  )
}