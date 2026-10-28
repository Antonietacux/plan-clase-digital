import { useState } from 'react';

export default function ActivityCard({ titulo, descripcion }) {
  const [completado, setCompletado] = useState(false);

  return (
    <div className={`activity-card ${completado ? 'completed' : ''}`}>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <button onClick={() => setCompletado(!completado)}>
        {completado ? 'Completado ✓' : 'Marcar como completado'}
      </button>
    </div>
  );
}
