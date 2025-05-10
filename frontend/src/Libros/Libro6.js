import React from 'react';
import './Libros.css';

const Libro7 = () => {
    return (
        <div className="libro-container">
            <div className="libro-contenido">
                <div className="libro-imagen-container">
                    <img
                        src="https://m.media-amazon.com/images/I/51C8AbIsLTL._SX342_SY445_.jpg"
                        alt="Hábitos atómicos - James Clear"
                        className="libro-imagen"
                    />
                </div>
                <div className="libro-detalles">
                    <h2>Hábitos atómicos</h2>
                    <h3>James Clear</h3>
                    <p>
                        <strong>Descripción:</strong><br />
                        En <em>Hábitos atómicos</em>, James Clear demuestra cómo pequeños cambios pueden producir resultados notables. Basado en investigaciones científicas sobre psicología, neurociencia y biología del comportamiento, el autor presenta un sistema práctico para formar buenos hábitos, romper los malos y dominar los comportamientos cotidianos. Es un enfoque claro y sencillo para mejorar cada día un 1%, con el poder de cambiar la trayectoria de tu vida.
                    </p>
                    <p>
                        <strong>Sobre el autor:</strong><br />
                        James Clear es un autor y conferencista reconocido internacionalmente por su trabajo en el desarrollo de hábitos, toma de decisiones y mejora continua. Su blog personal atrae a millones de lectores cada año, y ha trabajado con equipos deportivos profesionales, empresas Fortune 500 y organizaciones educativas para ayudarlos a alcanzar su máximo potencial a través de pequeños cambios consistentes.
                    </p>
                    <a href="/libros" className="back-link">← Volver a lista de libros</a>
                </div>
            </div>

            <div className="comentarios">
                <h3>Comentarios</h3>
                <p>★ "Este libro cambió mi forma de ver el progreso personal. Lo recomiendo al 100%."</p>
                <p>★ "Práctico, directo y muy motivador. Una lectura indispensable."</p>
                <p>★ "Ideal para quienes quieren mejorar su productividad y hábitos sin sentirse abrumados."</p>
            </div>
        </div>
    );
};

export default Libro7;
