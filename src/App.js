import React from "react";
import PropTypes from "prop-types";

const favFood = [
  {
    id: 1,
    name: "nigiri",
    image:
      "https://img.freepik.com/free-photo/nigiri-sushi-set-with-salmon-tuna-shrimp-prawn-eel-shell_74190-6215.jpg?size=626&ext=jpg",
    rating: 5.0,
  },
  {
    id: 2,
    name: "sashimi",
    image:
      "https://www.rokaakor.com/wp-content/uploads/2018/10/Nigiri-vs-Sashimi_-Whats-the-Difference-768x512.jpg",
    rating: 4.8,
  },
  {
    id: 3,
    name: "ramen",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Shoyu_Ramen.jpg/1200px-Shoyu_Ramen.jpg",
    rating: 4.1,
  },
];

function Food({ name, picture, rating }) {
  // console.log(fav);
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating} / 5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  // return <div className="App">Hello!</div>;
  return (
    <div>
      {favFood.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
