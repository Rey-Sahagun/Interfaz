import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/inicio.css';
import imagenFerreteria from '../images/imagen.png'; // Importa la imagen

const Inicio = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-ne bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Ferretería</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/productos">Productos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section text-center py-5 bg-light">
        <div className="container">
          <h1 className="display-4">Bienvenido a Ferretería XYZ</h1>
          <p className="lead">Tu tienda de confianza para herramientas y materiales de construcción.</p>
          {/* Espacio para la imagen */}
          <div className="mt-4">
            <img
              src={imagenFerreteria} // Usa la imagen importada
              alt="Ferretería XYZ"
              className="img-fluid rounded"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
          <Link to="/productos" className="btn btn-primary btn-lg mt-4">
            Ver Productos
          </Link>
        </div>
        <div className="mt-4">
  <Link to="/contacto" className="btn btn-outline-primary btn-lg mx-2">
    Contacto
  </Link>
  <Link to="/productos" className="btn btn-primary btn-lg mx-2">
    Ver Productos
  </Link>
</div>
      </div>
      <div className="services-section py-5">
  <div className="container">
    <h2 className="text-center mb-4">Nuestros Servicios</h2>
    <div className="row">
      <div className="col-md-4 text-center">
        <h3>Venta de Herramientas</h3>
        <p>Amplia variedad de herramientas de alta calidad.</p>
      </div>
      <div className="col-md-4 text-center">
        <h3>Asesoría Técnica</h3>
        <p>Expertos en construcción y reparación.</p>
      </div>
      <div className="col-md-4 text-center">
        <h3>Entrega a Domicilio</h3>
        <p>Servicio de entrega rápido y confiable.</p>
      </div>
    </div>
  </div>
</div>

      {/* Footer */}
      <footer className="bg-dark text-red text-center py-3 mt-5">
        <div className="container">
          <p>&copy; 2023 Ferretería XYZ. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Inicio;