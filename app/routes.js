const express = require('express');
const router = express.Router();

let workouts = [
  { id: 1, name: "Treino Funcional", duration: 45 },
  { id: 2, name: "Musculação", duration: 60 }
];

router.get('/health', (req, res) => {
  res.json({ status: "UP" });
});

router.get('/workouts', (req, res) => {
  res.json(workouts);
});

router.post('/workouts', (req, res) => {
  const { name, duration } = req.body;
  workouts.push({ id: workouts.length + 1, name, duration });
  res.status(201).json({ message: "Workout created" });
});

module.exports = router;
