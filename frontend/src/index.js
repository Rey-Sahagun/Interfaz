import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot
import './index.css';
import App from './App';

// Selecciona el contenedor raíz
const container = document.getElementById('root');
const root = createRoot(container); // Crea la raíz

// Renderiza la aplicación
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);