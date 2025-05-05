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
    title: "Quiz Psicológico: Profundizando en Tu Personalidad",
    description: "Descubre más sobre tu personalidad con este test psicológico.",
    questions: [], // Aquí se agregarán las preguntas
};

// Preguntas y opciones
const questionsData = [
    {
        text: "Cuando enfrentas un conflicto, ¿cómo prefieres manejarlo?",
        options: [
            { text: "Evito el conflicto a toda costa.", score: 1 },
            { text: "Busco una solución rápida, aunque no siempre sea la mejor.", score: 2 },
            { text: "Prefiero analizar la situación antes de actuar.", score: 3 },
            { text: "Enfrento directamente el conflicto, incluso si eso genera tensión.", score: 4 },
        ],
    },
    {
        text: "¿Te consideras una persona muy emocional?",
        options: [
            { text: "Sí, suelo sentir las cosas de manera intensa.", score: 1 },
            { text: "No, prefiero mantener mis emociones controladas.", score: 2 },
            { text: "A veces, depende de la situación.", score: 3 },
            { text: "No me gusta mostrar mis emociones a otros.", score: 4 },
        ],
    },
    {
        text: "¿Cómo te enfrentas a una situación que te causa miedo?",
        options: [
            { text: "Intento evitarla a toda costa.", score: 1 },
            { text: "Afronto el miedo, aunque de manera cautelosa.", score: 2 },
            { text: "Lo analizo y trato de entender la causa detrás del miedo.", score: 3 },
            { text: "Me lanzo sin pensar, tratando de superarlo rápidamente.", score: 4 },
        ],
    },
    {
        text: "En una conversación, ¿cómo reaccionas cuando alguien te interrumpe?",
        options: [
            { text: "Me siento molesto, pero prefiero no decir nada.", score: 1 },
            { text: "Intento continuar hablando, aunque con incomodidad.", score: 2 },
            { text: "Me detengo y trato de comprender por qué la otra persona interrumpió.", score: 3 },
            { text: "Respondo de inmediato, intentando retomar el control de la conversación.", score: 4 },
        ],
    },
    {
        text: "¿Con qué frecuencia te sientes agotado emocionalmente?",
        options: [
            { text: "Casi siempre, me siento sobrepasado.", score: 1 },
            { text: "De vez en cuando, especialmente en situaciones estresantes.", score: 2 },
            { text: "Rara vez, suelo manejar bien mis emociones.", score: 3 },
            { text: "Nunca, siempre me siento equilibrado.", score: 4 },
        ],
    },
    {
        text: "¿Cómo gestionas las críticas que te hacen otras personas?",
        options: [
            { text: "Me lo tomo de manera personal, lo siento profundamente.", score: 1 },
            { text: "Intento no tomarlo de manera personal, pero me afecta.", score: 2 },
            { text: "Trato de analizar la crítica para ver si puedo mejorar.", score: 3 },
            { text: "No me afecta en absoluto, sé que no siempre tienen razón.", score: 4 },
        ],
    },
    {
        text: "¿Qué tan importante es para ti la aprobación de los demás?",
        options: [
            { text: "Muy importante, me preocupa mucho lo que piensan de mí.", score: 1 },
            { text: "Bastante importante, aunque trato de no obsesionarme.", score: 2 },
            { text: "No me importa mucho, pero me gustaría que me respeten.", score: 3 },
            { text: "No me importa en absoluto.", score: 4 },
        ],
    },
    {
        text: "¿Cómo te enfrentas a los cambios en tu vida?",
        options: [
            { text: "Me cuesta adaptarme, prefiero la estabilidad.", score: 1 },
            { text: "Me adapto poco a poco, pero con cierta ansiedad.", score: 2 },
            { text: "Acepto los cambios como parte de la vida y trato de aprovecharlos.", score: 3 },
            { text: "Disfruto del cambio, me da una sensación de novedad y emoción.", score: 4 },
        ],
    },
    {
        text: "¿Te consideras una persona impulsiva?",
        options: [
            { text: "Sí, actúo sin pensar mucho.", score: 1 },
            { text: "A veces, dependiendo de la situación.", score: 2 },
            { text: "No, siempre suelo pensar antes de actuar.", score: 3 },
            { text: "Nunca, prefiero planificar todo cuidadosamente.", score: 4 },
        ],
    },
    {
        text: "Cuando estás estresado, ¿qué es lo que más te ayuda a relajarte?",
        options: [
            { text: "Hablar con alguien cercano sobre lo que me preocupa.", score: 1 },
            { text: "Hacer ejercicio o caminar al aire libre.", score: 2 },
            { text: "Practicar la meditación o técnicas de relajación.", score: 3 },
            { text: "Distracción, como ver televisión o leer algo ligero.", score: 4 },
        ],
    },
    {
        text: "¿Cómo prefieres tomar decisiones importantes?",
        options: [
            { text: "De manera impulsiva, confiando en mis instintos.", score: 1 },
            { text: "Tomando el tiempo necesario para considerar todas las opciones.", score: 2 },
            { text: "Consultando a otras personas antes de decidir.", score: 3 },
            { text: "Dejándome llevar por lo que me haga sentir mejor en ese momento.", score: 4 },
        ],
    },
    {
        text: "¿Con qué frecuencia te sientes inseguro de ti mismo?",
        options: [
            { text: "Frecuentemente, me cuestiono constantemente.", score: 1 },
            { text: "Ocasionalmente, pero trato de superarlo.", score: 2 },
            { text: "Rara vez, generalmente me siento seguro de mis capacidades.", score: 3 },
            { text: "Nunca, tengo plena confianza en mí mismo.", score: 4 },
        ],
    },
    {
        text: "¿Cómo te comportas en situaciones de alta presión?",
        options: [
            { text: "Me siento abrumado y tengo dificultad para concentrarme.", score: 1 },
            { text: "Trato de mantener la calma, pero me cuesta manejar el estrés.", score: 2 },
            { text: "Me esfuerzo por pensar claramente y tomar decisiones racionales.", score: 3 },
            { text: "Me motiva la presión, me siento más productivo bajo estrés.", score: 4 },
        ],
    },
    {
        text: "¿Cómo describirías tus relaciones interpersonales?",
        options: [
            { text: "Profundas y emocionales, suelo conectar fácilmente con las personas.", score: 1 },
            { text: "Estables, pero no siempre muy cercanas.", score: 2 },
            { text: "Razonadas, suelo ser selectivo con las personas que dejo entrar en mi vida.", score: 3 },
            { text: "Amplias, tengo muchos conocidos pero pocos amigos cercanos.", score: 4 },
        ],
    },
    {
        text: "¿Qué tan importante es para ti la autonomía?",
        options: [
            { text: "Muy importante, me gusta tomar mis propias decisiones sin depender de nadie.", score: 1 },
            { text: "Moderadamente importante, aunque a veces disfruto de la compañía de otros.", score: 2 },
            { text: "No me importa mucho, prefiero trabajar en equipo.", score: 3 },
            { text: "No me importa en absoluto, disfruto seguir las directrices de otros.", score: 4 },
        ],
    },
    {
        text: "Cuando alguien te hace enojar, ¿qué haces?",
        options: [
            { text: "Me guardo el enojo y trato de no mostrarlo.", score: 1 },
            { text: "Me exalto brevemente, pero luego trato de calmarme.", score: 2 },
            { text: "Expreso mi enojo de forma controlada, explicando por qué me siento así.", score: 3 },
            { text: "Dejo que el enojo salga de inmediato, sin importar las consecuencias.", score: 4 },
        ],
    },
    {
        text: "¿Cómo te sientes respecto a la competencia?",
        options: [
            { text: "Me siento motivado y me gusta desafiarme.", score: 1 },
            { text: "Me pone nervioso, pero trato de superarlo.", score: 2 },
            { text: "Prefiero evitarla, ya que no me gusta sentirme en competencia.", score: 3 },
            { text: "No me importa mucho, no busco competir con los demás.", score: 4 },
        ],
    },
    {
        text: "¿Cómo te gustaría que los demás te vean?",
        options: [
            { text: "Como una persona fuerte y capaz.", score: 1 },
            { text: "Como alguien amable y confiable.", score: 2 },
            { text: "Como alguien inteligente y reflexivo.", score: 3 },
            { text: "Como alguien creativo y original.", score: 4 },
        ],
    },
    {
        text: "¿Te consideras una persona perfeccionista?",
        options: [
            { text: "Sí, siempre quiero que todo salga perfectamente.", score: 1 },
            { text: "A veces, especialmente en tareas importantes.", score: 2 },
            { text: "No demasiado, trato de hacer lo mejor posible sin obsesionarme.", score: 3 },
            { text: "No, prefiero hacer las cosas lo suficientemente bien y no preocuparme por los detalles.", score: 4 },
        ],
    },
    {
        text: "Cuando te enfrentas a una tarea difícil, ¿cómo la abordas?",
        options: [
            { text: "La dejo para después porque me agobia.", score: 1 },
            { text: "La divido en partes más pequeñas y las enfrento una a una.", score: 2 },
            { text: "Busco ayuda de otros o trato de aprender todo lo necesario antes de comenzar.", score: 3 },
            { text: "Me lanzo sin pensarlo, confiando en que lo resolveré sobre la marcha.", score: 4 },
        ],
    },
    {
        text: "¿Te sientes cómodo expresando tus pensamientos y emociones?",
        options: [
            { text: "Sí, soy bastante abierto con los demás.", score: 1 },
            { text: "Depende de la situación y de las personas con las que esté.", score: 2 },
            { text: "No me gusta hablar demasiado sobre mis emociones o pensamientos.", score: 3 },
            { text: "Prefiero guardarlos para mí mismo, ya que me siento vulnerable cuando los comparto.", score: 4 },
        ],
    },
    {
        text: "¿Cómo manejas la frustración cuando las cosas no salen como esperabas?",
        options: [
            { text: "Me siento muy frustrado y suelo rendirme fácilmente.", score: 1 },
            { text: "Intento calmarme y encontrar otra forma de hacerlo.", score: 2 },
            { text: "Me esfuerzo más para superar los obstáculos.", score: 3 },
            { text: "Lo acepto y trato de aprender de la experiencia.", score: 4 },
        ],
    },
    {
        text: "¿Te resulta fácil perdonar a los demás?",
        options: [
            { text: "No, me cuesta mucho dejar ir el resentimiento.", score: 1 },
            { text: "Depende de la situación y de la persona involucrada.", score: 2 },
            { text: "Sí, suelo perdonar rápidamente para seguir adelante.", score: 3 },
            { text: "Siempre perdono, no me gusta guardar rencor.", score: 4 },
        ],
    },
    {
        text: "¿Cómo te sientes cuando estás solo por mucho tiempo?",
        options: [
            { text: "Me siento muy solo y desconectado.", score: 1 },
            { text: "Me siento un poco incómodo, pero trato de disfrutar la soledad.", score: 2 },
            { text: "Me siento cómodo, disfruto de mi propio espacio.", score: 3 },
            { text: "Me siento tranquilo y renovado, la soledad me da paz.", score: 4 },
        ],
    },
    {
        text: "¿Qué tan importante es para ti tener una rutina diaria?",
        options: [
            { text: "Es crucial para mantener mi bienestar.", score: 1 },
            { text: "Es importante, pero puedo adaptarme a cambios.", score: 2 },
            { text: "No me importa mucho, me gusta la flexibilidad.", score: 3 },
            { text: "No me gusta tener una rutina estricta, prefiero la espontaneidad.", score: 4 },
        ],
    },
    {
        text: "Cuando alguien te necesita, ¿cómo reaccionas?",
        options: [
            { text: "Siempre trato de ayudar, incluso si me cuesta.", score: 1 },
            { text: "Trato de ayudar, pero a veces me siento sobrepasado.", score: 2 },
            { text: "Ayudo cuando me siento capaz, pero no me gusta comprometerme demasiado.", score: 3 },
            { text: "Ayudo si es conveniente para mí, pero no siempre me siento responsable.", score: 4 },
        ],
    },
    {
        text: "¿Te resulta fácil adaptarte a nuevas situaciones?",
        options: [
            { text: "No, me lleva tiempo acostumbrarme a lo desconocido.", score: 1 },
            { text: "Un poco, pero prefiero tener algo de tiempo para ajustarme.", score: 2 },
            { text: "Sí, suelo adaptarme rápidamente.", score: 3 },
            { text: "No me cuesta nada, disfruto de la novedad.", score: 4 },
        ],
    },
    {
        text: "¿Con qué frecuencia te preocupa el futuro?",
        options: [
            { text: "Casi siempre, tengo mucha ansiedad por lo que vendrá.", score: 1 },
            { text: "A veces, pero trato de no pensar demasiado en ello.", score: 2 },
            { text: "Rara vez, suelo estar más enfocado en el presente.", score: 3 },
            { text: "Nunca, me siento tranquilo respecto al futuro.", score: 4 },
        ],
    },
    {
        text: "¿Qué tan importante es para ti ser aceptado por los demás?",
        options: [
            { text: "Muy importante, me esfuerzo por agradar a los demás.", score: 1 },
            { text: "Bastante importante, pero sin obsesionarme.", score: 2 },
            { text: "No me preocupa demasiado, pero valoro las buenas relaciones.", score: 3 },
            { text: "No es importante en absoluto, prefiero ser yo mismo sin importar lo que piensen.", score: 4 },
        ],
    },
    {
        text: "¿Cómo te gustaría que te recordaran?",
        options: [
            { text: "Como alguien que siempre estuvo ahí para los demás.", score: 1 },
            { text: "Como alguien que siempre dijo la verdad, aunque fuera difícil.", score: 2 },
            { text: "Como alguien que dejó un impacto intelectual o creativo.", score: 3 },
            { text: "Como alguien que vivió de manera auténtica y sin arrepentimientos.", score: 4 },
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