import React from 'react';
import './Libros.css';

const Libro9 = () => {
    return (
        <div className="libro-container">
            <div className="libro-contenido">
                <div className="libro-imagen-container">
                    <img
                        src="https://m.media-amazon.com/images/I/51O1ezdBmCL._SY445_SX342_.jpg"
                        alt="El arte de amar - Erich Fromm"
                        className="libro-imagen"
                    />
                </div>
                <div className="libro-detalles">
                    <h2>El arte de amar</h2>
                    <h3>Erich Fromm</h3>
                    <p>
                        <strong>Descripción:</strong><br />
                        En esta obra clásica, el psicoanalista y filósofo Erich Fromm argumenta que el amor no es simplemente un sentimiento espontáneo, sino un arte que requiere conocimiento, esfuerzo y práctica. A través de un enfoque psicológico, filosófico y social, Fromm analiza diferentes formas de amor (como el amor fraternal, el amor erótico, el amor propio y el amor a Dios) y cómo la sociedad moderna ha distorsionado nuestra capacidad de amar genuinamente.
                    </p>
                    <p>
                        <strong>Sobre el autor:</strong><br />
                        Erich Fromm (1900–1980) fue un destacado psicoanalista, sociólogo y humanista alemán-estadounidense. Es conocido por combinar el pensamiento freudiano con las teorías sociales del marxismo. Autor de múltiples libros influyentes, Fromm se enfocó en temas como la libertad, el amor, la alienación y el sentido de la vida. Su trabajo ha dejado una huella profunda en la psicología humanista y el pensamiento crítico contemporáneo.
                    </p>
                    <a href="/libros" className="back-link">← Volver a lista de libros</a>
                </div>
            </div>

            <div className="comentarios">
                <h3>Comentarios</h3>
                <p>★ "Una obra atemporal que transforma la forma en que entendemos y practicamos el amor."</p>
                <p>★ "Fromm nos muestra que amar es una decisión y una habilidad, no solo un sentimiento."</p>
                <p>★ "Profundo, reflexivo y necesario en los tiempos actuales."</p>
            </div>
        </div>
    );
};

export default Libro9;
