const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// Obtener todas las preguntas
router.get('/', async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Crear una nueva pregunta
router.post('/', async (req, res) => {
    const question = new Question({
        text: req.body.text,
        options: req.body.options,
    });

    try {
        const newQuestion = await question.save();
        res.status(201).json(newQuestion);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;