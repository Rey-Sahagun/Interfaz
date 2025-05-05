import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo-mental.png'; // Asegúrate de tener esta imagen en tu carpeta assets

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src={logo} alt="Logo Cuida tu Salud Mental" className="navbar-logo" />
                <Link to="/" className="navbar-title">MindCare</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/" className="nav-link">Inicio</Link></li>
                <li><Link to="/psicologia" className="nav-link">Psicología</Link></li>
                <li><Link to="/salud-mental" className="nav-link">Salud Mental</Link></li>
                <li><Link to="/libros" className="nav-link">Recursos</Link></li>
                <li><Link to="/contacto" className="nav-link contact-btn">Contacto</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;