import React from 'react';
import { Link } from 'react-router-dom';
import './SaludMental.css';
import mentalHealthImage from '../assets/meditacion.jpg'; // Asegúrate de tener esta imagen

const SaludMental = () => {
    const tips = [
        {
            title: "Meditación Diaria",
            description: "Dedica 10 minutos al día a meditar para reducir el estrés y mejorar tu enfoque.",
            icon: "🧘‍♀️"
        },
        {
            title: "Rutina de Sueño",
            description: "Mantén un horario regular de sueño para mejorar tu energía y estado de ánimo.",
            icon: "😴"
        },
        {
            title: "Apoyo Profesional",
            description: "No dudes en buscar ayuda de un psicólogo o terapeuta cuando lo necesites.",
            icon: "👩‍⚕️"
        },
        {
            title: "Ejercicio Físico",
            description: "El ejercicio regular libera endorfinas que mejoran tu estado de ánimo.",
            icon: "🏃‍♂️"
        },
        {
            title: "Alimentación Saludable",
            description: "Una dieta balanceada impacta positivamente en tu salud mental.",
            icon: "🍎"
        },
        {
            title: "Tiempo Social",
            description: "Mantén conexiones significativas con amigos y familiares.",
            icon: "👥"
        }
    ];

    return (
        <div className="salud-mental-container">
            {/* Sección Hero */}
            <div 
                className="hero-section"
                style={{ 
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), url(${mentalHealthImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '100px 20px',
                    color: 'white',
                    borderRadius: '10px',
                    marginBottom: '40px',
                }}
            >
                <h1>Cuidado de la Salud Mental</h1>
                <p>Descubre herramientas y consejos para mejorar tu bienestar emocional y psicológico.</p>
            </div>

            {/* Sección de Introducción */}
            <div className="intro-section">
                <h2>La Importancia del Bienestar Emocional</h2>
                <p>
                    La salud mental es fundamental para nuestro bienestar general. Incluye nuestro 
                    estado emocional, psicológico y social, afectando cómo pensamos, sentimos y actuamos.
                </p>
                <p>
                    Cuidar de nuestra mente es tan importante como cuidar de nuestro cuerpo. Pequeños 
                    cambios en nuestros hábitos diarios pueden tener un gran impacto en nuestra calidad 
                    de vida y relaciones interpersonales.
                </p>
            </div>

            {/* Sección de Consejos */}
            <div className="tips-section">
                <h2>Consejos para tu Bienestar Mental</h2>
                <div className="tips-grid">
                    {tips.map((tip, index) => (
                        <div className="tip-card" key={index}>
                            <div className="tip-icon">{tip.icon}</div>
                            <h3>{tip.title}</h3>
                            <p>{tip.description}</p>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default SaludMental;