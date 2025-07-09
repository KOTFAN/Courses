import { useState } from "react";
import "./App.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Socks", quantity: 12, packed: false },
  { id: 4, description: "Socks", quantity: 12, packed: true },
  { id: 5, description: "Socks", quantity: 12, packed: false },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌅Far Away🌄</h1>;
}
function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    const item = { description, quantity, pasked: false };
    console.log(item);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip👀?</h3>

      <select
        value={quantity}
        onChange={(e) => {
          //  console.log(e.target.value);
          setQuantity(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (el, i) => {
          return (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          );
        })}
      </select>
      <input
        placeholder="your item..."
        value={description}
        onChange={(e) => {
          //  console.log(e.target.value);
          setDescription(e.target.value);
        }}
      />
      <button>ADD</button>
    </form>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map(({ description, quantity, packed, id }) => {
          return (
            <ListElement
              description={description}
              quantity={quantity}
              packed={packed}
              key={id}
            />
          );
        })}
      </ul>
    </div>
  );
}

function ListElement({ description, quantity, packed }) {
  return (
    <li>
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have N items on your list, and you already packed X(X%)</em>
    </footer>
  );
}

export default App;
