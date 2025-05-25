import React from 'react';
import './Contacto.css'; // Importa el archivo CSS
import Maps from '../components/Mapas/Mapa';


const Contacto = () => { // funcion la cual permite renderizar el html
    return (
        <div className="contacto-container" align="center">
            <h1>Contáctanos</h1>           
            
            
            <p >
                ¿Tienes alguna duda, comentario o sugerencia? Estamos aquí para escucharte.
            </p>
            <ul>
                <li><strong>Correo electrónico:</strong> info@mindcare.com</li>
                <li><strong>Teléfono:</strong> +1 (234) 567-8900</li>
                <li><strong>Ubicación:</strong> Ciudad de México, MX</li>
                <li><strong>Horario de atención:</strong> Lunes a Viernes de 9:00 AM a 6:00 PM</li>
            </ul>

            {/*<button className='btn btn-danger'>OK</button>   */}
            <Maps />                   
        </div>
        
    );
    
};

export default Contacto;



