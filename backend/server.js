const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const quizzesRouter = require('./routes/quizzes'); // Importa las rutas de quizzes
const questionsRouter = require('./routes/questions'); // Importa las rutas de questions

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Rutas
app.use('/api/quizzes', quizzesRouter); // Usa las rutas de quizzes
app.use('/api/questions', questionsRouter); // Usa las rutas de questions

// Iniciar servidor
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));