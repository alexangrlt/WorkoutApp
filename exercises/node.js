const fs = require('fs');
const path = require('path');

const exercisesDir = path.join(__dirname, '../exercises');
const outputFile = path.join(__dirname, '../exercises/all_exercises.json');

const files = fs.readdirSync(exercisesDir).filter(f => f.endsWith('.json'));

const allExercises = files.map(file => {
  const content = fs.readFileSync(path.join(exercisesDir, file), 'utf-8');
  return JSON.parse(content);
});

fs.writeFileSync(outputFile, JSON.stringify(allExercises, null, 2));
console.log('Fusion terminé:', allExercises.length, 'exercices.');