// src/components/HeaderClase.jsx
import React from 'react';

function HeaderClase({ tituloTema, nombreDocente, horario }) {
    return (
        <header style={{ background: '#0f4c81', color: 'white', padding: '20px', borderRadius: '8px' }}>
            <h1 style={{ margin: '0 0 5px 0' }}>{tituloTema}</h1>
            <p style={{ margin: 0, fontSize: '0.9em', opacity: '0.9' }}>Docente: {nombreDocente} | Horario: {horario}</p>
        </header>
    );
}

export default HeaderClase;