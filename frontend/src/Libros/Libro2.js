import React from 'react';
import './Libros.css'; // Asegúrate de tener este archivo CSS correctamente configurado
import { Link } from 'react-router-dom';

const Libro2 = () => {
    return (
        <div className="libro-container">
            {/* Sección Hero */}
            <div 
                className="hero-section"
                style={{ 
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), url('https://www.example.com/your-background-image.jpg'))`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '100px 20px',
                    color: 'white',
                    borderRadius: '10px',
                    marginBottom: '40px',
                }}
            >
                <h1>Inteligencia Emocional</h1>
                <p>Un análisis profundo de cómo la inteligencia emocional puede influir en nuestras vidas.</p>
            </div>

            {/* Información del libro */}
            <div className="libro-info">
                <div className="libro-contenido">
                    <div className="libro-imagen-container">
                        <img 
                            src="https://m.media-amazon.com/images/I/411bIc+eOEL._SY445_SX342_.jpg" 
                            alt="Inteligencia emocional"
                            className="libro-imagen"
                        />
                    </div>

                    <div className="libro-detalles">
                        <h2>Información del Libro</h2>
                        <p><strong>Autor:</strong> Daniel Goleman</p>
                        <p><strong>Categoría:</strong> Psicología</p>
                        <p><strong>Calificación:</strong> ⭐ 4.7/5</p>

                        <h3>Descripción:</h3>
                        <p>
                            **Inteligencia Emocional** es un libro del psicólogo y periodista Daniel Goleman, publicado en 1995. 
                            En él, Goleman explica cómo la inteligencia emocional —la capacidad para reconocer, comprender y 
                            gestionar nuestras propias emociones, así como las emociones de los demás— juega un papel crucial 
                            en nuestra vida personal y profesional, a menudo más que el coeficiente intelectual (IQ).
                        </p>
                        <p>
                            Goleman identifica cinco componentes clave de la inteligencia emocional:
                            <ul>
                                <li><strong>Autoconocimiento emocional:</strong> La capacidad de reconocer y comprender nuestras propias emociones.</li>
                                <li><strong>Autorregulación:</strong> La habilidad para manejar nuestras emociones de manera adecuada.</li>
                                <li><strong>Motivación:</strong> La capacidad para mantener el impulso hacia metas a largo plazo.</li>
                                <li><strong>Empatía:</strong> La habilidad para reconocer y entender las emociones de los demás.</li>
                                <li><strong>Habilidades sociales:</strong> La capacidad para gestionar relaciones y construir redes de apoyo.</li>
                            </ul>
                        </p>
                        <p>
                            A través de numerosos estudios y ejemplos, Goleman ilustra cómo la inteligencia emocional se puede 
                            aprender y desarrollar, y cómo puede impactar nuestras relaciones, bienestar y éxito en la vida. El 
                            libro se ha convertido en un texto fundamental para entender la importancia de las emociones en nuestra 
                            vida cotidiana y en el trabajo.
                        </p>

                        <h3>Sobre el Autor:</h3>
                        <p>
                            Daniel Goleman es un psicólogo y periodista estadounidense conocido principalmente por su trabajo sobre 
                            la inteligencia emocional. Su carrera comenzó en el campo de la psicología, pero se hizo popular gracias 
                            a su libro **"Inteligencia Emocional"**, el cual ha sido traducido a más de 40 idiomas. Goleman ha trabajado 
                            en el campo de la psicología y la educación y ha sido director de la sección de Psicología en el 
                            **New York Times**. Sus investigaciones y escritos han influido profundamente en la forma en que entendemos 
                            las emociones y cómo estas impactan en nuestras vidas.
                        </p>
                        
                        <Link to="/libros" className="back-link">Volver a la lista de libros</Link>
                    </div>
                </div>
            </div>

            {/* Sección de Comentarios (opcional) */}
            <div className="comentarios">
                <h3>Comentarios</h3>
                <p>"Este libro cambió mi forma de ver la vida y el trabajo en equipo. Un imprescindible para todos." – Usuario</p>
                <p>"Muy revelador, especialmente en cuanto a la importancia de la empatía y la autorregulación emocional." – Usuario</p>
            </div>
        </div>
    );
};

export default Libro2;