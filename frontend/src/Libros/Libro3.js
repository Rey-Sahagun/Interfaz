import React from 'react';
import './Libros.css';

const Libro4 = () => {
    return (
        <div className="libro-container">
            <div className="libro-contenido">
                <div className="libro-imagen-container">
                    <img
                        src="https://m.media-amazon.com/images/I/51JQDV3YDEL._SY425_.jpg"
                        alt="Los 7 hábitos de la gente altamente efectiva"
                        className="libro-imagen"
                    />
                </div>
                <div className="libro-detalles">
                    <h2>Los 7 hábitos de la gente altamente efectiva</h2>
                    <h3>Stephen R. Covey</h3>
                    <p>
                        <strong>Descripción:</strong><br />
                        Esta obra clásica de liderazgo y desarrollo personal ofrece un enfoque basado en principios para alcanzar la efectividad en todos los ámbitos de la vida.
                        Stephen R. Covey presenta un camino claro y práctico con siete hábitos fundamentales que, si se adoptan, permiten lograr cambios sostenibles y duraderos.
                        Entre los hábitos se encuentran: ser proactivo, comenzar con un fin en mente, establecer primero lo primero, pensar en ganar/ganar, buscar comprender antes de ser comprendido,
                        sinergizar y afilar la sierra. El libro proporciona herramientas prácticas y poderosas para una vida con propósito.
                    </p>
                    <p>
                        <strong>Sobre el autor:</strong><br />
                        Stephen R. Covey fue un reconocido autor, conferencista y consultor organizacional. Conocido por su enfoque en principios éticos y valores universales,
                        Covey ayudó a millones de personas y empresas a mejorar su liderazgo, efectividad y relaciones. Su legado continúa a través de su organización FranklinCovey.
                    </p>
                    <a href="/libros" className="back-link">← Volver a lista de libros</a>
                </div>
            </div>

            <div className="comentarios">
                <h3>Comentarios</h3>
                <p>★ "Un libro que realmente me ayudó a reestructurar mi vida personal y profesional."</p>
                <p>★ "Los principios que enseña Covey son atemporales y extremadamente valiosos."</p>
                <p>★ "Lectura obligada para cualquier persona que quiera ser más efectiva."</p>
            </div>
        </div>
    );
};

export default Libro4;
