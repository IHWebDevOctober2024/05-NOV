import "./App.css";
import dittoLogo from "./assets/react.svg"; // recomended import
import Button from "./components/Button";
import Card from "./components/Card";
import cardData from "./data/cards.json";

/*
Files in the public folder are normally static files that should be available globally
Like: 
- The favicon (the icon for the tab)
- robots.txt (file where we add extra info for robots)

The images or files related to our app or components should be inside the src/assets or src/images, etc
By importing the image like it was a module we are going to be able to manage it dinamically.
Example: if a user is logged in we display their profile image. If not, we display default image
*/

function App() {
  console.log(cardData);

  return (
    <>
      {/* <section className="cards-container">
        <Card
          title="Marketing Digital"
          content="Empieza de nuevo o mejora tus habilidades—¡en solo unas semanas, domina las habilidades de marketing digital que necesitas para hacer crecer cualquier negocio en línea!"
          background="bg-1"
        />
        <Card
          title="Ingeniería en Inteligencia Artificial"
          content="De cero a héroe en IA con nuestro bootcamp para principiantes. Aprende y lanza tu carrera en la especialidad tech que más crece."
          background="bg-2"
        />
        <Card
          title="Data Science y Machine Learning"
          content="Domina las habilidades más demandadas en tech y abre puertas en cualquier sector que te apasione. eSports, FinTech, moda... ¡elige tu destino!"
          background="bg-3"
        />
      </section> */}



      {/* REFACTORED VERSION */}
      <section className="cards-container">
        {cardData.map((eachCard) => {
          return (
            <Card
              key={eachCard._id}
              title={eachCard.title}
              content={eachCard.content}
              background={eachCard.background}
            />
          );
        })}
      </section>

      
      <Button content="Hello" color="red" />
      <Button content="Another content" color="green" />
      <Button content="Yellow button" color="yellow" />
      {/*  <Button />
      <Button /> */}
      <img src="/vite.svg" alt="" />
      <img src={dittoLogo} alt="react logo" />
      <p>Hello world</p>
    </>
  );
}

export default App;
