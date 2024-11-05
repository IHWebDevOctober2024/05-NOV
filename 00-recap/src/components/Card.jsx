import hexagon from "../assets/hexagon.svg";
import "./Card.css";

function Card(props) {
  const title = props.title;
  const content = props.content;
  const background = props.background;

  return (
    <div className={"card-container " + background}>
      <div className="card-header">
        <span>Nuevo!</span> <img src={hexagon} alt="hexagon" />
      </div>
      <h3>{title}</h3>
      <p>{content}</p>
      <button>Descubre el Bootcamp</button>
    </div>
  );
}

export default Card;
