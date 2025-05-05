const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz');

// Obtener todos los quizzes
router.get('/', async (req, res) => {
    try {
        const quizzes = await Quiz.find().populate('questions');
        res.json(quizzes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Obtener un quiz por ID
router.get('/:id', async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id).populate('questions');
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz no encontrado' });
        }
        res.json(quiz);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;