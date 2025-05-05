import React from 'react';
import './Psicologia.css'; // Importa el archivo CSS
import teoriaRasgos from '../assets/gente.jpg'; // Imagen de teoría de rasgos
import teoriaFreud from '../assets/people.jpg'; // Imagen de teoría de Freud
import teoriaMaslow from '../assets/woman.jpg'; // Imagen de teoría de Maslow
import estres from '../assets/woman.jpg'; // Imagen de manejo del estrés
import inteligenciaEmocional from '../assets/people.jpg'; // Imagen de inteligencia emocional

const Psicologia = () => {
    return (
        <div className="psicologia-container">
            <h1>Datos Psicológicos</h1>
            <p>
                Aquí tienes información psicológica útil sobre <strong>teorías de la personalidad, manejo del estrés e inteligencia emocional</strong>, incluyendo conceptos básicos y consejos para mejorar el bienestar emocional.
            </p>

            <section className="section">
                <h2>Teorías de la Personalidad</h2>
                <p>
                    La <strong>personalidad</strong> es un conjunto de patrones de pensamiento, comportamiento y emociones que definen a una persona. Existen diversas teorías que intentan explicarla:
                </p>

                <div className="card">
                    <img src={teoriaRasgos} alt="Teoría de los Rasgos" className="card-image" />
                    <div className="card-content">
                        <h3>1. Teoría de los Rasgos (Big Five o Modelo de los Cinco Grandes)</h3>
                        <p>
                            Esta teoría clasifica la personalidad en cinco dimensiones principales:
                        </p>
                        <ul>
                            <li><strong>Apertura a la experiencia:</strong> Creatividad, curiosidad e interés por nuevas experiencias.</li>
                            <li><strong>Responsabilidad (Escrupulosidad):</strong> Organización, autodisciplina y planificación.</li>
                            <li><strong>Extroversión:</strong> Sociabilidad, expresividad y nivel de energía.</li>
                            <li><strong>Amabilidad:</strong> Empatía, cooperación y confianza en los demás.</li>
                            <li><strong>Neuroticismo:</strong> Estabilidad emocional y tendencia a la ansiedad o la tristeza.</li>
                        </ul>
                        <p className="tip">💡 <strong>Consejo:</strong> Reflexiona sobre cuál de estos rasgos predomina en ti y trabaja en equilibrar los que puedan afectar tu bienestar.</p>
                    </div>
                </div>

                <div className="card">
                    <img src={teoriaFreud} alt="Teoría Psicodinámica" className="card-image" />
                    <div className="card-content">
                        <h3>2. Teoría Psicodinámica (Freud)</h3>
                        <p>
                            Freud propuso que la personalidad está estructurada en tres partes:
                        </p>
                        <ul>
                            <li><strong>Ello (Id):</strong> Impulsos instintivos y deseos primarios.</li>
                            <li><strong>Yo (Ego):</strong> Parte racional que equilibra los impulsos y la realidad.</li>
                            <li><strong>Superyó (Superego):</strong> Normas morales y valores inculcados.</li>
                        </ul>
                        <p className="tip">💡 <strong>Consejo:</strong> Toma conciencia de tus impulsos y creencias, y trabaja en equilibrarlos para tomar decisiones más saludables.</p>
                    </div>
                </div>

                <div className="card">
                    <img src={teoriaMaslow} alt="Teoría Humanista" className="card-image" />
                    <div className="card-content">
                        <h3>3. Teoría Humanista (Maslow y Rogers)</h3>
                        <p>
                            <strong>Maslow</strong> propuso la <strong>pirámide de necesidades</strong>, donde la autorrealización es la meta final. <strong>Rogers</strong> enfatizó la importancia de la autoestima y la autenticidad.
                        </p>
                        <p className="tip">💡 <strong>Consejo:</strong> Acepta tus emociones y busca experiencias que te ayuden a crecer personalmente.</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2>Manejo del Estrés</h2>
                <p>
                    El <strong>estrés</strong> es una respuesta natural a situaciones desafiantes, pero cuando es crónico, puede afectar la salud física y mental. Aquí hay estrategias clave para manejarlo:
                </p>

                <div className="card">
                    <img src={estres} alt="Manejo del Estrés" className="card-image" />
                    <div className="card-content">
                        <h3>1. Identificar los Factores de Estrés</h3>
                        <ul>
                            <li>Haz una lista de situaciones que te generan estrés y analiza cuáles puedes controlar.</li>
                            <li>Divide los problemas en pasos pequeños para afrontarlos mejor.</li>
                        </ul>
                        <p className="tip">💡 <strong>Consejo:</strong> No puedes controlar todo, pero sí tu reacción ante los problemas.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-content">
                        <h3>2. Técnicas de Relajación</h3>
                        <ul>
                            <li><strong>Respiración profunda:</strong> Inhala en 4 segundos, retén el aire 4 segundos y exhala en 6 segundos.</li>
                            <li><strong>Meditación y mindfulness:</strong> Concéntrate en el presente sin juzgar.</li>
                            <li><strong>Ejercicio físico:</strong> Caminar, correr o hacer yoga reduce el cortisol (hormona del estrés).</li>
                        </ul>
                        <p className="tip">💡 <strong>Consejo:</strong> Dedica al menos 10 minutos al día a la relajación para mejorar tu bienestar.</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2>Inteligencia Emocional (Daniel Goleman)</h2>
                <p>
                    La <strong>inteligencia emocional</strong> es la capacidad de reconocer, comprender y gestionar las emociones propias y ajenas. Se compone de cinco habilidades clave:
                </p>

                <div className="card">
                    <img src={inteligenciaEmocional} alt="Inteligencia Emocional" className="card-image" />
                    <div className="card-content">
                        <h3>1. Autoconciencia</h3>
                        <p>
                            Reconocer tus propias emociones y cómo influyen en tus pensamientos y acciones.
                        </p>
                        <p className="tip">💡 <strong>Ejemplo:</strong> ¿Te sientes frustrado? Antes de reaccionar, analiza la causa real.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-content">
                        <h3>2. Autorregulación</h3>
                        <p>
                            Controlar impulsos y adaptarse a circunstancias difíciles.
                        </p>
                        <p className="tip">💡 <strong>Consejo:</strong> Antes de reaccionar ante una situación, respira profundo y cuenta hasta 10.</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2>Conclusión</h2>
                <p>
                    La <strong>personalidad, el manejo del estrés y la inteligencia emocional</strong> son aspectos clave del bienestar psicológico. Desarrollar habilidades en estas áreas te ayudará a <strong>tomar mejores decisiones, manejar conflictos y mejorar tus relaciones</strong>.
                </p>
                <p className="tip">🚀 <strong>Consejo final:</strong> Practica diariamente la autoconciencia y el control emocional para mejorar tu calidad de vida.</p>
            </section>
        </div>
    );
};

export default Psicologia;