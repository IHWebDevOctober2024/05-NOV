import "./App.css";
import lessonsArray from "./data/lessons.json";
import LessonCard from "./components/LessonCard";

function App() {
  return (
    <>
      {lessonsArray.map(({ title, _id }) => {
        return <LessonCard key={_id} title={title} />;
      })}
    </>
  );
}

export default App;
