const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    options: [{
        text: {
            type: String,
            required: true,
        },
        score: {
            type: Number,
            required: true,
        },
    }],
});

module.exports = mongoose.model('Question', QuestionSchema);