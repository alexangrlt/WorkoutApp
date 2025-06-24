export default function ExerciseCard({ name }: { name: string }) {
    return (
    <div className="bg-white p-4 rounded-2xl shadow-sm mb-4">
        <h2 className="text-lg font-bold mb-2">{name}</h2>
        <div className="flex gap-2">
        <input
            type="number"
            placeholder="Reps"
            className="flex-1 border p-2 rounded-md text-sm"
        />
        <input
            type="number"
            placeholder="Poids (kg)"
            className="flex-1 border p-2 rounded-md text-sm"
        />
        </div>
    </div>
    )
}
