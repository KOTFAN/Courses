import { useState } from "react";
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
export default Form;
