import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Psicologia from './pages/Psicologia';
import SaludMental from './pages/SaludMental';
import Contacto from './pages/Contacto';
import Libros from './pages/Libros';
import Libro1 from './Libros/Libro1';  // Importa las páginas de libros individuales
import Libro2 from './Libros/Libro2';
import Libro3 from './Libros/Libro3';
import Libro4 from './Libros/Libro4';
import Libro5 from './Libros/Libro5';
import Libro6 from './Libros/Libro6';
import Libro7 from './Libros/Libro7';
import Libro8 from './Libros/Libro8';
import QuizDetail from './components/QuizDetail';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quiz/:id" element={<QuizDetail />} />
                <Route path="/psicologia" element={<Psicologia />} />
                <Route path="/salud-mental" element={<SaludMental />} />
                <Route path="/libros" element={<Libros />} />
                <Route path="/contacto" element={<Contacto />} />
                {/* Aquí agregamos las rutas para los libros específicos */}
                <Route path="/libro/1" element={<Libro1 />} />
                <Route path="/libro/2" element={<Libro2 />} />
                <Route path="/libro/3" element={<Libro3 />} />
                <Route path="/libro/4" element={<Libro4 />} />
                <Route path="/libro/5" element={<Libro5 />} />
                <Route path="/libro/6" element={<Libro6 />} />
                <Route path="/libro/7" element={<Libro7 />} />
                <Route path="/libro/8" element={<Libro8 />} />

            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
