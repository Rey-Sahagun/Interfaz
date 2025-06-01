import React from 'react';
import './Libros.css';

const Libro5 = () => {
    return (
        <div className="libro-container">
            <div className="libro-contenido">
                <div className="libro-imagen-container">
                    <img
                        src="https://m.media-amazon.com/images/I/61By+AvZOVL._SY425_.jpg"
                        alt="El hombre en busca de sentido"
                        className="libro-imagen"
                    />
                </div>
                <div className="libro-detalles">
                    <h2>El hombre en busca de sentido</h2>
                    <h3>Viktor E. Frankl</h3>
                    <p>
                        <strong>Descripción:</strong><br />
                        Este libro es un relato conmovedor sobre la experiencia de Viktor Frankl como prisionero en campos de concentración nazis durante la Segunda Guerra Mundial.
                        A través de su experiencia, Frankl desarrolló la logoterapia, una forma de psicoterapia centrada en encontrar sentido a la vida incluso en las condiciones más adversas.
                        El mensaje central del libro es que la vida nunca deja de tener sentido, incluso en el sufrimiento, y que el deseo de encontrar propósito es la motivación más poderosa del ser humano.
                    </p>
                    <p>
                        <strong>Sobre el autor:</strong><br />
                        Viktor E. Frankl fue un psiquiatra y neurólogo austríaco, fundador de la logoterapia y sobreviviente del Holocausto.
                        Su enfoque humanista de la psicoterapia influyó profundamente en la psicología moderna. A lo largo de su vida, escribió más de 30 libros
                        y dio conferencias en todo el mundo, convirtiéndose en una figura clave en el estudio del sentido de la vida y la resiliencia humana.
                    </p>
                    <a href="/libros" className="back-link">← Volver a lista de libros</a>
                </div>
            </div>

            <div className="comentarios">
                <h3>Comentarios</h3>
                <p>★ "Un libro profundamente transformador que cambia tu percepción del sufrimiento."</p>
                <p>★ "Una lectura esencial para quienes buscan propósito en la vida."</p>
                <p>★ "La resiliencia de Frankl es inspiradora y su mensaje sigue siendo relevante hoy."</p>
            </div>
        </div>
    );
};

export default Libro5;