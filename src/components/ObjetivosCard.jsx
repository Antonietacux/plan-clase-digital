// src/components/ObjetivosCard.jsx
import React from 'react';

function ObjetivosCard({ competencia, indicadorLogro }) {
    return (
        <div style={{ border: '5px solid #cbd5e1', borderLeft: '10px solid #0ea5e9', padding: '40px', borderRadius: '6px', background: '#f8fafc', margin: '15px 0' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#0f172a', fontSize: '1.1em' }}>🎯 Competencia: {competencia}</h3>
            <p style={{ margin: 0, fontSize: '0.9em', color: '#475569' }}>Indicador de Logro: {indicadorLogro}</p>
        </div>
    );
}

export default ObjetivosCard;
