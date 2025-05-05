import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css'; // Importa el archivo CSS
import heroImage from '../assets/corazon.jpg'; // Asegúrate de que la ruta sea correcta

const Home = () => {
    const [tests, setTests] = useState([]); // Estado para los test de psicología
    const [quizzes, setQuizzes] = useState([]); // Estado para los quizzes de personalidad

    // Función para obtener los test de psicología
    const fetchTests = async () => {
        try {
            const res = await axios.get('http://localhost:5001/api/tests');
            setTests(res.data);
        } catch (err) {
            console.error("Error fetching tests:", err);
        }
    };

    // Función para obtener los quizzes de personalidad
    const fetchQuizzes = async () => {
        try {
            const res = await axios.get('http://localhost:5001/api/quizzes');
            setQuizzes(res.data);
        } catch (err) {
            console.error("Error fetching quizzes:", err);
        }
    };

    // Llamar a ambas funciones al cargar el componente
    useEffect(() => {
        fetchTests();
        fetchQuizzes();
    }, []);

    return (
        <div className="home-container">
            {/* Sección Hero */}
            <div 
                className="hero-section"
                style={{ 
                    backgroundImage: `url(${heroImage})`, // Aplica la imagen de fondo aquí
                    backgroundSize: 'cover', // Ajusta la imagen al tamaño del contenedor
                    backgroundPosition: 'center', // Centra la imagen
                    padding: '100px 20px', // Añade padding para el texto
                    color: 'white', // Color del texto
                    borderRadius: '10px', // Bordes redondeados
                    marginBottom: '40px', // Margen inferior
                }}
            >
                <h1>Es increíble ser comprendido por fin</h1>
                <p>Descubre más sobre ti mismo con nuestros test de psicología y quizzes de personalidad.</p>
            </div>

            {/* Sección de Introducción a la Psicología */}
            <div className="intro-section" style={{
                padding: '30px',
                backgroundColor: '#f8f9fa',
                borderRadius: '10px',
                marginBottom: '40px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
                <h2 style={{color: '#2c3e50', marginBottom: '20px'}}>La Importancia de la Psicología</h2>
                <p style={{lineHeight: '1.6', fontSize: '16px'}}>
                    La psicología es la ciencia que estudia el comportamiento humano y los procesos mentales, 
                    ayudándonos a comprender mejor nuestras emociones, pensamientos y acciones. A través 
                    del autoconocimiento que proporcionan las herramientas psicológicas, podemos mejorar 
                    nuestras relaciones, tomar decisiones más acertadas y alcanzar un mayor bienestar emocional.
                </p>
                <p style={{lineHeight: '1.6', fontSize: '16px', marginTop: '15px'}}>
                    Nuestros test y cuestionarios están diseñados para ofrecerte insights valiosos sobre 
                    tu personalidad, fortalezas y áreas de oportunidad. Recuerda que estos instrumentos 
                    son orientativos y no sustituyen el diagnóstico de un profesional. ¡Empieza tu viaje 
                    de autodescubrimiento hoy mismo!
                </p>
            </div>

            {/* Sección de Test de Psicología */}
            <div className="tests-section">
                <h2>Test de Psicología</h2>
                <div className="tests-grid">
                    {tests.map(test => (
                        <Link to={`/test/${test._id}`} key={test._id} className="test-card">
                            <h3>{test.title}</h3>
                            <p>{test.description}</p>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Sección de Quizzes de Personalidad */}
            <div className="quizzes-section">
                <h2>Quizzes de Personalidad</h2>
                <div className="quizzes-grid">
                    {quizzes.map(quiz => (
                        <Link to={`/quiz/${quiz._id}`} key={quiz._id} className="quiz-card">
                            <h3>{quiz.title}</h3>
                            <p>{quiz.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;