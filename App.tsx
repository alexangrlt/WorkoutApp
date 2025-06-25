import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Workout from './pages/Workout'
import AddExercise from './pages/AddExercise'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/workout/:workoutId" element={<Workout />} />
      <Route path="/workout/:workoutId/add-exercise" element={<AddExercise />} />
    </Routes>
  )
}