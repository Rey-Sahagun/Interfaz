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
    title: "Quiz: ¿Qué tipo de aventurero eres?",
    description: "Descubre tu estilo de aventura según tus respuestas.",
    questions: [], // Aquí se agregarán las preguntas
};

// Preguntas y opciones
const questionsData = [
    {
        text: "Si pudieras elegir un destino para viajar, ¿cuál elegirías?",
        options: [
            { text: "Un lugar lejano y misterioso, como una isla desierta o una ciudad antigua.", score: 1 },
            { text: "Una gran ciudad llena de cultura, arte y vida nocturna.", score: 2 },
            { text: "Una montaña remota donde puedo desconectarme completamente de la tecnología.", score: 3 },
            { text: "Un lugar exótico, rodeado de naturaleza, como la selva tropical o el desierto.", score: 4 },
        ],
    },
    {
        text: "¿Qué harías si estuvieras en medio de un viaje y de repente te encuentras con un problema inesperado?",
        options: [
            { text: "Buscaría la ayuda de los locales y trataría de entender su cultura y costumbres.", score: 1 },
            { text: "Me adaptaría rápidamente a la situación, usando mi ingenio para encontrar una solución.", score: 2 },
            { text: "Preferiría tener tiempo para pensar con calma antes de decidir qué hacer.", score: 3 },
            { text: "Lo tomaría con calma y buscaría disfrutar del momento, sin preocuparme demasiado por los problemas.", score: 4 },
        ],
    },
    {
        text: "¿Cómo prefieres pasar tus vacaciones?",
        options: [
            { text: "Explorando lugares nuevos, conociendo gente interesante y participando en actividades locales.", score: 1 },
            { text: "Disfrutando de una experiencia lujosa en un resort o un hotel de cinco estrellas.", score: 2 },
            { text: "Haciendo senderismo, acampando y desconectando del mundo.", score: 3 },
            { text: "En una aventura extrema, como el buceo, el paracaidismo o el trekking en lugares inexplorados.", score: 4 },
        ],
    },
    {
        text: "Si tuvieras que llevar solo tres cosas en un viaje, ¿qué elegirías?",
        options: [
            { text: "Mi cámara para capturar momentos únicos y mi diario para escribir sobre mis experiencias.", score: 1 },
            { text: "Un mapa detallado y una guía de viajes con los mejores restaurantes y actividades.", score: 2 },
            { text: "Una mochila con lo esencial: ropa, un buen par de botas y mi equipo de supervivencia.", score: 3 },
            { text: "Mi equipo de aventura, como una linterna, un saco de dormir y un teléfono satelital.", score: 4 },
        ],
    },
    {
        text: "¿Cómo te gustaría describir tu personalidad como aventurero?",
        options: [
            { text: "Curioso y abierto a nuevas experiencias, siempre dispuesto a aprender.", score: 1 },
            { text: "Práctico y organizado, me gusta planear todo antes de embarcarme en una aventura.", score: 2 },
            { text: "Independiente y tranquilo, prefiero ir a mi propio ritmo y tomarme mi tiempo.", score: 3 },
            { text: "Audaz y arriesgado, siempre buscando lo desconocido y lo emocionante.", score: 4 },
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