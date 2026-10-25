// src/components/HeaderClase.jsx
import React from 'react';

function HeaderClase({ tituloTema, nombreDocente, horario }) {
    return (
        <header style={{ background: '#3f9df0', color: 'white', padding: '60px', borderRadius: '8px' }}>
            <h1 style={{ margin: '0 0 5px 0' }}>{tituloTema}</h1>
            <p style={{ margin: 0, fontSize: '0.9em', opacity: '0.9' }}>Docente: {nombreDocente} | Horario: {horario}</p>
        </header>
    );
}
export default HeaderClase;