import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//data from server
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

//main component
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Mamma Reactia 🍕</h1>
      <Slogan />
    </header>
  );
}

function Slogan() {
  return React.createElement(
    "p",
    { className: "slogan" },
    "Best pizzarella in all internet"
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <div>
        {pizzaData.map(({ name, ingredients, price, soldOut, photoName }) => (
          <Pizza
            name={name}
            ingredients={ingredients}
            img={photoName}
            price={price}
          />
        ))}
      </div>
    </main>
  );
}

function Pizza({ name, ingredients, img, price }) {
  return (
    <div className="pizza">
      <img src={img} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openTime = 8;
  const closeTime = 22;
  const isOpen = openTime <= hour && hour <= closeTime;
  console.log(isOpen);

  return <div>{isOpen ? "We are open" : "we are closed"}</div>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
