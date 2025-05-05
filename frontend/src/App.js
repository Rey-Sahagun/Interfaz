import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Psicologia from './pages/Psicologia';
import SaludMental from './pages/SaludMental';
import Libros from './pages/Libros';
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
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;