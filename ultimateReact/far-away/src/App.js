import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDelateItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function togglePacked(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : { ...item }
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form handleAddItem={handleAddItem} />
      <PackingList
        items={items}
        handleDelateItem={handleDelateItem}
        togglePacked={togglePacked}
      />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌅Far Away🌄</h1>;
}
function Form({ handleAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    const item = { description, quantity, packed: false, id: Date.now() };

    handleAddItem(item);

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
function PackingList({ items, handleDelateItem, togglePacked }) {
  return (
    <div className="list">
      <ul>
        {items.map(({ description, quantity, packed, id }) => {
          return (
            <ListElement
              description={description}
              quantity={quantity}
              packed={packed}
              key={id}
              handleDelateItem={handleDelateItem}
              id={id}
              togglePacked={togglePacked}
            />
          );
        })}
      </ul>
    </div>
  );
}

function ListElement({
  description,
  quantity,
  packed,
  handleDelateItem,
  id,
  togglePacked,
}) {
  return (
    <li>
      <input
        type="checkbox"
        value={packed}
        onChange={() => {
          console.log(id);
          togglePacked(id);
        }}
      />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => handleDelateItem(id)}>❌</button>
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
