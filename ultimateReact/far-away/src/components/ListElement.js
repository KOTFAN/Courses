export default function ListElement({
  description,
  quantity,
  packed,
  handleDelateItem,
  id,
  handleTogglePacked,
}) {
  return (
    <li>
      <input
        type="checkbox"
        value={packed}
        onChange={() => {
          console.log(id);
          handleTogglePacked(id);
        }}
      />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => handleDelateItem(id)}>❌</button>
    </li>
  );
}
