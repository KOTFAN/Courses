export default function Stats({ allItemsCount, packedItemsCount }) {
  if (allItemsCount === 0) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list</em>
      </footer>
    );
  }

  const packedProcent =
    allItemsCount === 0
      ? 0
      : Math.floor((packedItemsCount / allItemsCount) * 100);
  return (
    <footer className="stats">
      <em>
        {packedProcent === 100
          ? "You are ready to go🚉"
          : `You have ${allItemsCount} items on your list, and you already packed
        ${packedItemsCount}(${packedProcent}%)`}
      </em>
    </footer>
  );
}
