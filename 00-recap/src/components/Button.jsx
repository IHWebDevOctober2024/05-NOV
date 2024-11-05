import "./Button.css";

// functional components?
// we call them functional components because we create them using functions

function Button(props) {
  console.log(props);
  
  return <button className={`btn ${props.color}`}>{props.content}</button>;
}

export default Button;
