import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contacto.css';
import contactoImage from '../assets/contacto.jpg'; // Asegúrate de tener esta imagen

const Contacto = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        asunto: 'Consulta general',
        mensaje: ''
    });

    const [formEnviado, setFormEnviado] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.nombre.trim()) {
            newErrors.nombre = 'El nombre es requerido';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'El email es requerido';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Email no válido';
        }
        
        if (!formData.mensaje.trim()) {
            newErrors.mensaje = 'El mensaje es requerido';
        } else if (formData.mensaje.length < 10) {
            newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            // Aquí iría la lógica para enviar el formulario
            console.log('Formulario enviado:', formData);
            setFormEnviado(true);
            setFormData({
                nombre: '',
                email: '',
                telefono: '',
                asunto: 'Consulta general',
                mensaje: ''
            });
            
            // Resetear el estado después de 5 segundos
            setTimeout(() => {
                setFormEnviado(false);
            }, 5000);
        }
    };

    return (
        <div className="contacto-container">
            {/* Sección Hero */}
            <div 
                className="hero-section"
                style={{ 
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), url(${contactoImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '100px 20px',
                    color: 'white',
                    borderRadius: '10px',
                    marginBottom: '40px',
                }}
            >
                <h1>Contacto</h1>
                <p>Estamos aquí para ayudarte. Contáctanos para cualquier consulta o sugerencia.</p>
            </div>

            <div className="contacto-content">
                {/* Formulario de Contacto */}
                <div className="form-section">
                    <h2>Envíanos un mensaje</h2>
                    
                    {formEnviado ? (
                        <div className="success-message">
                            <p>¡Gracias por contactarnos! Hemos recibido tu mensaje y te responderemos pronto.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre completo*</label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    className={errors.nombre ? 'error' : ''}
                                />
                                {errors.nombre && <span className="error-message">{errors.nombre}</span>}
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="email">Correo electrónico*</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={errors.email ? 'error' : ''}
                                />
                                {errors.email && <span className="error-message">{errors.email}</span>}
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="telefono">Teléfono</label>
                                <input
                                    type="tel"
                                    id="telefono"
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={handleChange}
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="asunto">Asunto</label>
                                <select
                                    id="asunto"
                                    name="asunto"
                                    value={formData.asunto}
                                    onChange={handleChange}
                                >
                                    <option value="Consulta general">Consulta general</option>
                                    <option value="Soporte técnico">Soporte técnico</option>
                                    <option value="Información sobre servicios">Información sobre servicios</option>
                                    <option value="Colaboraciones">Colaboraciones</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="mensaje">Mensaje*</label>
                                <textarea
                                    id="mensaje"
                                    name="mensaje"
                                    value={formData.mensaje}
                                    onChange={handleChange}
                                    rows="5"
                                    className={errors.mensaje ? 'error' : ''}
                                ></textarea>
                                {errors.mensaje && <span className="error-message">{errors.mensaje}</span>}
                            </div>
                            
                            <button type="submit" className="submit-btn">Enviar mensaje</button>
                        </form>
                    )}
                </div>
                
                {/* Información de Contacto */}
                <div className="info-section">
                    <h2>Otras formas de contacto</h2>
                    
                    <div className="contact-method">
                        <div className="icon">📧</div>
                        <div className="details">
                            <h3>Correo electrónico</h3>
                            <p>info@psicologiaapp.com</p>
                        </div>
                    </div>
                    
                    <div className="contact-method">
                        <div className="icon">📱</div>
                        <div className="details">
                            <h3>Teléfono</h3>
                            <p>+1 (555) 123-4567</p>
                            <p>Lunes a Viernes: 9:00 - 18:00</p>
                        </div>
                    </div>
                    
                    <div className="contact-method">
                        <div className="icon">📍</div>
                        <div className="details">
                            <h3>Dirección</h3>
                            <p>Calle Psicología 123</p>
                            <p>Ciudad Mental, CP 45678</p>
                        </div>
                    </div>
                    
                    <div className="social-media">
                        <h3>Síguenos en redes sociales</h3>
                        <div className="social-icons">
                            <Link to="#" className="social-icon">📘</Link>
                            <Link to="#" className="social-icon">📸</Link>
                            <Link to="#" className="social-icon">🐦</Link>
                            <Link to="#" className="social-icon">🔗</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacto;