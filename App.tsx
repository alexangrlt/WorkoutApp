import { Route, Routes, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Workout from './pages/Workout'

function App() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
            <main className="flex-1 p-4 overflow-y-auto">
                <nav className="mb-4 flex justify-between">
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/workout" element={<Workout />} />
                </Routes>
            </main>
            <nav className="bottom-nav">
                <NavLink
                    to="/"
                    className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}
                >
                    🏠<span>Accueil</span>
                </NavLink>
                <NavLink
                    to="/workout"
                    className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}
                >
                    💪<span>Workout</span>
                </NavLink>
                <NavLink
                    to="/profil"
                    className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}
                >
                    👤<span>Profil</span>
                </NavLink>
            </nav>
        </div>
    )
}

export default App
