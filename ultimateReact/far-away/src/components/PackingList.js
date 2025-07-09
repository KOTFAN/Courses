import { useState } from "react";
import ListElement from "./ListElement";
import SortingActions from "./SortingActions";

export default function PackingList({
  items,
  handleDelateItem,
  handleTogglePacked,
  handleClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  function handleSorting(method) {
    setSortBy(method);
  }

  if (sortBy === "input") {
    sortedItems = items.slice();
  }
  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  if (sortBy === "quantity") {
    sortedItems = items.slice().sort((a, b) => b.quantity - a.quantity);
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map(({ description, quantity, packed, id }) => {
          return (
            <ListElement
              description={description}
              quantity={quantity}
              packed={packed}
              key={id}
              handleDelateItem={handleDelateItem}
              id={id}
              handleTogglePacked={handleTogglePacked}
            />
          );
        })}
      </ul>
      <SortingActions
        sortBy={sortBy}
        handleSorting={handleSorting}
        handleClearList={handleClearList}
      />
    </div>
  );
}
