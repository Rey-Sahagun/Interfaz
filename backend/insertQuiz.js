const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Quiz = require('./models/Quiz');
const Question = require('./models/Question');

dotenv.config();

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Datos del quiz
const quizData = {
    title: "Quiz de Personalidad",
    description: "Averigua cómo eres según tus respuestas.",
    questions: [], // Aquí se agregarán las preguntas
};

// Preguntas y opciones
const questionsData = [
    {
        text: "¿Cómo prefieres pasar tu tiempo libre?",
        options: [
            { text: "Pasando tiempo con amigos o familia, compartiendo momentos.", score: 1 },
            { text: "Relajándome solo, disfrutando de la calma.", score: 2 },
            { text: "Aprendiendo algo nuevo o trabajando en un proyecto personal.", score: 3 },
            { text: "Haciendo algo creativo, como pintar, escribir o jugar un juego.", score: 4 },
        ],
    },
    {
        text: "¿Cómo reaccionas ante situaciones inesperadas?",
        options: [
            { text: "Me siento energizado y trato de adaptarme rápidamente.", score: 1 },
            { text: "Prefiero tomarme un momento para reflexionar y luego actuar con calma.", score: 2 },
            { text: "Trato de analizarlo todo antes de tomar una decisión.", score: 3 },
            { text: "Me entusiasma lo nuevo, me lanzo sin pensarlo mucho.", score: 4 },
        ],
    },
    {
        text: "¿Qué tipo de tareas disfrutas más?",
        options: [
            { text: "Tareas que involucren interactuar con otras personas.", score: 1 },
            { text: "Tareas solitarias y reflexivas que me permitan estar tranquilo.", score: 2 },
            { text: "Tareas que me desafíen intelectualmente y me obliguen a pensar profundamente.", score: 3 },
            { text: "Tareas creativas que me permitan expresar mis ideas.", score: 4 },
        ],
    },
    {
        text: "Cuando tienes que tomar una decisión importante, ¿cómo lo haces?",
        options: [
            { text: "Consulto con otras personas y valoro sus opiniones.", score: 1 },
            { text: "Prefiero pensar en silencio y reflexionar por mi cuenta.", score: 2 },
            { text: "Analizo todos los pros y contras antes de decidir.", score: 3 },
            { text: "Sigo mi intuición y lo que me hace sentir más emocionado.", score: 4 },
        ],
    },
    {
        text: "¿Cómo prefieres que te describan tus amigos?",
        options: [
            { text: "Sociable y extrovertido.", score: 1 },
            { text: "Calmado y reflexivo.", score: 2 },
            { text: "Razonador y analítico.", score: 3 },
            { text: "Creativo y espontáneo.", score: 4 },
        ],
    },
];

// Función para insertar el quiz y las preguntas
const insertQuiz = async () => {
    try {
        // Insertar preguntas y obtener sus IDs
        const questionIds = [];
        for (const question of questionsData) {
            const newQuestion = new Question(question);
            const savedQuestion = await newQuestion.save();
            questionIds.push(savedQuestion._id);
        }

        // Asignar los IDs de las preguntas al quiz
        quizData.questions = questionIds;

        // Insertar el quiz
        const newQuiz = new Quiz(quizData);
        await newQuiz.save();

        console.log("Quiz y preguntas insertados correctamente.");
    } catch (err) {
        console.error("Error al insertar el quiz:", err);
    } finally {
        mongoose.connection.close();
    }
};

// Ejecutar la función
insertQuiz();