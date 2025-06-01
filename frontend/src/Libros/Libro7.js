import React from 'react';
import './Libros.css';

const Libro7 = () => {
    return (
        <div className="libro-container">
            <div className="libro-contenido">
                <div className="libro-imagen-container">
                    <img
                        src="https://m.media-amazon.com/images/I/311J7EUFaTL._SY445_SX342_.jpg"
                        alt="Fluir - Mihaly Csikszentmihalyi"
                        className="libro-imagen"
                    />
                </div>
                <div className="libro-detalles">
                    <h2>Fluir (Flow)</h2>
                    <h3>Mihaly Csikszentmihalyi</h3>
                    <p>
                        <strong>Descripción:</strong><br />
                        En <em>Fluir</em>, Mihaly Csikszentmihalyi explora el estado óptimo de experiencia humana conocido como “flow” o “fluir”, donde las personas están completamente inmersas en lo que hacen, sintiéndose plenas, concentradas y realizadas. A través de décadas de investigación en psicología positiva, el autor detalla cómo alcanzar este estado de flujo puede llevar a una vida más satisfactoria, feliz y productiva.
                    </p>
                    <p>
                        <strong>Sobre el autor:</strong><br />
                        Mihaly Csikszentmihalyi fue uno de los psicólogos más influyentes del siglo XX y es ampliamente reconocido como el padre de la psicología positiva. Su trabajo se centra en el bienestar, la creatividad y la experiencia óptima. Fue profesor en la Universidad de Chicago y en la Universidad de Claremont, y su concepto de “flow” ha sido adoptado en campos que van desde la educación hasta los negocios y el deporte.
                    </p>
                    <a href="/libros" className="back-link">← Volver a lista de libros</a>
                </div>
            </div>

            <div className="comentarios">
                <h3>Comentarios</h3>
                <p>★ "Una lectura transformadora sobre cómo encontrar sentido y disfrute en nuestras actividades diarias."</p>
                <p>★ "El concepto de 'fluir' me ha ayudado a mejorar mi enfoque y bienestar general."</p>
                <p>★ "Una obra esencial para entender cómo funciona la felicidad y la motivación."</p>
            </div>
        </div>
    );
};

export default Libro7;