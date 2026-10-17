export default function LessonInfo({ asignatura, grado, docente }) {
  return (
    <div className="lesson-info-card">
      <h2>Asignatura: {asignatura}</h2>
      <p><strong>Grado:</strong> {grado}</p>
      <p><strong>Docente:</strong> {docente}</p>
    </div>
  );
}