import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './QuizDetail.css';
import quizHeroImage from '../assets/quiz-bg.jpg'; // Asegúrate de tener esta imagen

const QuizDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [quiz, setQuiz] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [result, setResult] = useState(null);
    const [progress, setProgress] = useState(0);

    // Obtener los detalles del quiz
    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                const res = await axios.get(`http://localhost:5001/api/quizzes/${id}`);
                setQuiz(res.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching quiz:", err);
                setError("Error al cargar el quiz. Por favor intenta nuevamente.");
                setLoading(false);
            }
        };
        fetchQuiz();
    }, [id]);

    // Actualizar progreso
    useEffect(() => {
        if (quiz) {
            const newProgress = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;
            setProgress(newProgress);
        }
    }, [currentQuestionIndex, quiz]);

    // Manejar la selección de una opción
    const handleOptionSelect = (questionId, optionScore) => {
        setSelectedOptions(prev => ({
            ...prev,
            [questionId]: optionScore,
        }));
    };

    // Calcular el resultado
    const calculateResult = () => {
        const scores = Object.values(selectedOptions);
        if (scores.length !== quiz.questions.length) {
            setError("Por favor responde todas las preguntas antes de ver el resultado.");
            return;
        }

        const totalScore = scores.reduce((acc, score) => acc + score, 0);
        const averageScore = totalScore / scores.length;

        let personalityType, description;
        
        if (averageScore <= 1.5) {
            personalityType = "Introspectivo/Emocional";
            description = "Tienes una personalidad introspectiva y emocional. Eres muy consciente de tus sentimientos y los de los demás, lo que te hace empático y compasivo.";
        } else if (averageScore <= 2.5) {
            personalityType = "Reflexivo/Cauteloso";
            description = "Tu personalidad es reflexiva y cautelosa. Analizas las situaciones cuidadosamente antes de actuar, lo que te ayuda a tomar decisiones bien pensadas.";
        } else if (averageScore <= 3.5) {
            personalityType = "Analítico/Lógico";
            description = "Eres una persona analítica y lógica. Te basas en hechos y datos para tomar decisiones, y tienes una mente estructurada y organizada.";
        } else {
            personalityType = "Espontáneo/Extrovertido";
            description = "Tienes una personalidad espontánea y extrovertida. Eres energético, sociable y te adaptas fácilmente a nuevas situaciones.";
        }

        setResult({
            type: personalityType,
            description,
            averageScore: averageScore.toFixed(2),
            strengths: getStrengths(personalityType),
            suggestions: getSuggestions(personalityType)
        });
    };

    const getStrengths = (type) => {
        const strengths = {
            "Introspectivo/Emocional": ["Empatía", "Sensibilidad", "Creatividad", "Profundidad emocional"],
            "Reflexivo/Cauteloso": ["Paciencia", "Precisión", "Confiabilidad", "Pensamiento crítico"],
            "Analítico/Lógico": ["Razonamiento", "Objetividad", "Eficiencia", "Habilidad para resolver problemas"],
            "Espontáneo/Extrovertido": ["Sociabilidad", "Adaptabilidad", "Entusiasmo", "Habilidades comunicativas"]
        };
        return strengths[type];
    };

    const getSuggestions = (type) => {
        const suggestions = {
            "Introspectivo/Emocional": "Practica establecer límites emocionales y dedicar tiempo a actividades que te recarguen energías.",
            "Reflexivo/Cauteloso": "Intenta salir de tu zona de confort ocasionalmente para desarrollar mayor flexibilidad.",
            "Analítico/Lógico": "Dedica tiempo a actividades creativas o intuitivas para equilibrar tu enfoque racional.",
            "Espontáneo/Extrovertido": "Reserva momentos de reflexión para considerar las consecuencias a largo plazo de tus decisiones."
        };
        return suggestions[type];
    };

    // Navegación entre preguntas
    const goToNextQuestion = () => {
        if (!selectedOptions[quiz.questions[currentQuestionIndex]._id]) {
            setError("Por favor selecciona una opción antes de continuar.");
            return;
        }
        setError(null);
        
        if (currentQuestionIndex < quiz.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            calculateResult();
        }
    };

    const goToPreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setError(null);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setSelectedOptions({});
        setResult(null);
        setError(null);
    };

    if (loading) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Cargando quiz...</p>
            </div>
        );
    }

    if (error && !loading && !quiz) {
        return (
            <div className="error-container">
                <p>{error}</p>
                <button onClick={() => navigate('/quizzes')}>Volver a quizzes</button>
            </div>
        );
    }

    const currentQuestion = quiz.questions[currentQuestionIndex];

    return (
        <div className="quiz-detail-container">
            {/* Sección Hero */}
            <div 
                className="quiz-hero"
                style={{ 
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), url(${quizHeroImage})`,
                }}
            >
                <h1>{quiz.title}</h1>
                <p>{quiz.description}</p>
            </div>

            {/* Barra de progreso */}
            <div className="progress-container">
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                <span className="progress-text">Pregunta {currentQuestionIndex + 1} de {quiz.questions.length}</span>
            </div>

            {!result ? (
                <div className="quiz-content">
                    <div className="question-container">
                        <h2>{currentQuestion.text}</h2>
                        {error && <p className="error-message">{error}</p>}
                        
                        <div className="options-grid">
                            {currentQuestion.options.map((option, index) => (
                                <div 
                                    key={index}
                                    className={`option-card ${
                                        selectedOptions[currentQuestion._id] === option.score ? "selected" : ""
                                    }`}
                                    onClick={() => handleOptionSelect(currentQuestion._id, option.score)}
                                >
                                    <div className="option-letter">{String.fromCharCode(65 + index)}</div>
                                    <div className="option-text">{option.text}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="navigation-buttons">
                        {currentQuestionIndex > 0 && (
                            <button 
                                onClick={goToPreviousQuestion}
                                className="nav-button prev-button"
                            >
                                Anterior
                            </button>
                        )}
                        <button 
                            onClick={goToNextQuestion}
                            className="nav-button next-button"
                        >
                            {currentQuestionIndex < quiz.questions.length - 1 ? "Siguiente" : "Ver resultado"}
                        </button>
                    </div>
                </div>
            ) : (
                <div className="result-container">
                    <h2>Tu resultado</h2>
                    <div className="result-card">
                        <h3>{result.type}</h3>
                        <div className="result-score">Puntuación promedio: {result.averageScore}/4</div>
                        <p>{result.description}</p>
                        
                        <div className="result-details">
                            <div className="strengths-section">
                                <h4>Tus fortalezas:</h4>
                                <ul>
                                    {result.strengths.map((strength, index) => (
                                        <li key={index}>{strength}</li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="suggestions-section">
                                <h4>Sugerencias:</h4>
                                <p>{result.suggestions}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="result-actions">
                        <button onClick={restartQuiz} className="action-button restart-button">
                            Volver a hacer el test
                        </button>
                        <button 
                        onClick={() => navigate('/')} 
                        className="action-button browse-button"
                    >
                        Volver al inicio
                    </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuizDetail;