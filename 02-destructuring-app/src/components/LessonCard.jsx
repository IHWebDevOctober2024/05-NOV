import "./LessonCard.css";

function LessonCard({ title }) {
  return (
    <div className="lesson-container">
      <div>
        <div>
          <h4>Lesson</h4>
          <h4>{title}</h4>
        </div>
      </div>
    </div>
  );
}

export default LessonCard;
