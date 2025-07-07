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
  const pizzasCount = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {pizzasCount > 0 && (
        <ul className="pizzas">
          {pizzaData.map(({ name, ingredients, price, soldOut, photoName }) => (
            <Pizza
              name={name}
              ingredients={ingredients}
              img={photoName}
              price={price}
              key={name}
              soldOut={soldOut}
            />
          ))}
        </ul>
      )}
    </main>
  );
}

function Pizza({ name, ingredients, img, price, soldOut }) {
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={img} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openTime = 8;
  const closeTime = 22;
  const isOpen = openTime <= hour && hour <= closeTime;
  console.log(isOpen);

  return (
    <footer>
      {isOpen ? (
        <div className="order">
          <p>We are open, you can order online, or visit as in real life</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>We are closed, but we will open in {openTime}</p>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
