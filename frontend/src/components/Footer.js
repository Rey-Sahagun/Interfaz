import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/logo-mental.png'; // Usando el mismo logo del navbar
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <img src={logo} alt="Logo MindCare" className="footer-logo" />
                    <h3>MindCare</h3>
                    <p className="footer-tagline">Tu bienestar mental es nuestra prioridad</p>
                    <div className="social-icons">
                        <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
                        <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
                        <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
                        <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
                    </div>
                </div>

                <div className="footer-links">
                    <div className="links-column">
                        <h4>Explorar</h4>
                        <Link to="/">Inicio</Link>
                        <Link to="/psicologia">Psicología</Link>
                        <Link to="/salud-mental">Salud Mental</Link>
                        <Link to="/libros">Recursos</Link>
                    </div>

                    <div className="links-column">
                        <h4>Legal</h4>
                        <Link to="/politica-privacidad">Política de Privacidad</Link>
                        <Link to="/terminos-servicio">Términos de Servicio</Link>
                        <Link to="/cookies">Política de Cookies</Link>
                    </div>

                    <div className="links-column">
                        <h4>Contacto</h4>
                        <p>info@mindcare.com</p>
                        <p>+1 (234) 567-8900</p>
                        <p>Ciudad de México, MX</p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} MindCare. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;