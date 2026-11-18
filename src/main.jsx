import React from 'react'
import { createRoot } from 'react-dom/client'
/* Tema: wellpet (azul marino y amarillo). Otros temas en TEMAS.md */
import './temas/wellpet.css'
import './estilos.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
