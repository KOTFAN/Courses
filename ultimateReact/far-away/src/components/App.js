import { useState } from "react";
import "./App.css";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./PackingList.js";
import Stats from "./Stats.js";

function App() {
  const [items, setItems] = useState([]);
  const allItemsCount = items.length;
  const packedItemsCount = items.reduce(
    (a, { packed }) => (packed ? a + 1 : a),
    0
  );

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDelateItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleTogglePacked(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : { ...item }
      )
    );
  }

  function handleClearList() {
    const shoudDelate = window.confirm(
      "Are you realy whona delate all items in list?"
    );
    if (shoudDelate) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form handleAddItem={handleAddItem} />
      <PackingList
        items={items}
        handleDelateItem={handleDelateItem}
        handleTogglePacked={handleTogglePacked}
        handleClearList={handleClearList}
      />
      <Stats
        allItemsCount={allItemsCount}
        packedItemsCount={packedItemsCount}
      />
    </div>
  );
}

export default App;
