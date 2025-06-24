import { Link } from 'react-router-dom'

export default function Home() {
  const days = [
    { day: 'Lundi', details: 'Chest/Biceps/Shoulders', id: 1 },
    { day: 'Mardi', details: 'Back/Triceps', id: 2 },
    { day: 'Mercredi', details: 'Legs/Abs', id: 3 },
    { day: 'Jeudi', details: 'Repos', id: 4 },
    { day: 'Vendredi', details: 'Chest/Biceps/Shoulders', id: 5 },
    { day: 'Samedi', details: 'Back/Triceps', id: 6 },
    { day: 'Dimanche', details: 'Repos', id: 7 },
  ]

  return (
    <div className="main-content">
      {/* Barre de navigation haute */}
      <nav className="top-nav flex justify-between items-center mb-4">
        <Link to="/" className="font-bold text-lg nav-btn">📅Planning</Link>
        <Link to="/history" className="nav-btn">📈 Historique</Link>
        <Link to="/workout/new" className="nav-btn bg-blue-500 text-white px-3 py-1 rounded">+ Créer</Link>
      </nav>

      {/* Planning de la semaine */}
      <section className="workout-list">
        {days.map(({ day, details, id }) => (
          <div key={day} className="workout-card">
            <div className="flex justify-between items-start w-full">
              <span className="text-lg font-semibold">{day}</span>

              <div className="flex flex-col items-end text-right ml-auto">
                <Link
                  to={`/workout/${id}`}
                  className="text-xs text-blue-500 font-semibold mb-1"
                >
                  Voir
                </Link>
                <Link
                  to={`/workout/${id}/edit`}
                  className="text-xs text-gray-500 hover:text-blue-500"
                >
                  Modifier
                </Link>
              </div>
            </div>

            <div className="workout-details">{details}</div>
          </div>
        ))}
      </section>
    </div>
  )
}
