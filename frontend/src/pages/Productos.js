import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/inicio.css'; // Importa el archivo CSS

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: '',
    descripcion: '',
    precio: 0,
    stock: 0,
    categoria: ''
  });

  const cargarProductos = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/productos');
      setProductos(response.data);
    } catch (error) {
      console.error('Error al cargar productos:', error);
    }
  };

  const handleInputChange = (e) => {
    setNuevoProducto({
      ...nuevoProducto,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/api/productos', nuevoProducto);
      alert('Producto agregado correctamente');
      cargarProductos(); // Recargar la lista de productos
    } catch (error) {
      console.error('Error al agregar producto:', error);
    }
  };

  // Cargar productos al iniciar
  React.useEffect(() => {
    cargarProductos();
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-g navbar-dark bg-dark">
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

      {/* Contenido principal */}
      <div className="container">
        <h1>Productos</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              value={nuevoProducto.nombre}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label>Descripción</label>
            <input
              type="text"
              name="descripcion"
              value={nuevoProducto.descripcion}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label>Precio</label>
            <input
              type="number"
              name="precio"
              value={nuevoProducto.precio}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label>Stock</label>
            <input
              type="number"
              name="stock"
              value={nuevoProducto.stock}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label>Categoría</label>
            <input
              type="text"
              name="categoria"
              value={nuevoProducto.categoria}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">Agregar Producto</button>
        </form>

        {/* Tabla de productos */}
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Categoría</th>
            </tr>
          </thead>
          <tbody>
            {productos.map(producto => (
              <tr key={producto._id}>
                <td>{producto.nombre}</td>
                <td>{producto.descripcion}</td>
                <td>${producto.precio}</td>
                <td>{producto.stock}</td>
                <td>{producto.categoria}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-whit text-center py-3 mt-5">
        <div className="container">
          <p>&copy; 2023 Ferretería XYZ. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Productos;