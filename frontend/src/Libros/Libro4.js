import React from 'react';
import './Libros.css';

const Libro4 = () => {
    return (
        <div className="libro-container">
            <div className="libro-contenido">
                <div className="libro-imagen-container">
                    <img
                        src="https://m.media-amazon.com/images/I/419nwdB9h+L._SY445_SX342_.jpg"
                        alt="Mindset: La actitud del éxito"
                        className="libro-imagen"
                    />
                </div>
                <div className="libro-detalles">
                    <h2>Mindset: La actitud del éxito</h2>
                    <h3>Carol S. Dweck</h3>
                    <p>
                        <strong>Descripción:</strong><br />
                        En este influyente libro, la psicóloga de renombre mundial Carol S. Dweck explica cómo el éxito puede ser influenciado de manera fundamental
                        por la mentalidad que adoptamos. Dweck distingue entre una "mentalidad fija", en la que creemos que nuestras cualidades son inamovibles,
                        y una "mentalidad de crecimiento", que se basa en la creencia de que podemos desarrollar nuestras habilidades a través del esfuerzo, la estrategia y el aprendizaje continuo.
                        Este enfoque transformador ha cambiado la forma en que padres, maestros, entrenadores y líderes guían a otros hacia el éxito.
                    </p>
                    <p>
                        <strong>Sobre la autora:</strong><br />
                        Carol S. Dweck es profesora de psicología en la Universidad de Stanford y una de las investigadoras más destacadas en el campo de la motivación.
                        Su trabajo sobre la mentalidad ha influenciado ampliamente la educación, el deporte y el liderazgo empresarial. Es reconocida por su enfoque científico y práctico para ayudar
                        a las personas a alcanzar su máximo potencial.
                    </p>
                    <a href="/libros" className="back-link">← Volver a lista de libros</a>
                </div>
            </div>

            <div className="comentarios">
                <h3>Comentarios</h3>
                <p>★ "Una obra que cambia vidas, especialmente para educadores y padres."</p>
                <p>★ "Aprendí a valorar más el esfuerzo y la perseverancia que el talento natural."</p>
                <p>★ "El concepto de mentalidad de crecimiento es una herramienta poderosa para el éxito."</p>
            </div>
        </div>
    );
};

export default Libro4;