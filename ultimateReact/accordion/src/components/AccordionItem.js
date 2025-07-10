export default function AccordionItem({
  title,
  text,
  number,
  handleOpenClose,
  openItem,
}) {
  const isOpen = openItem === number;
  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => handleOpenClose(number)}
    >
      <span className="number"> {number > 9 ? number : "0" + number}</span>
      <h2 className="title">{title}</h2>
      <span className="icon">{isOpen ? "-" : "+"}</span>
      {isOpen ? <div className="content-box">{text}</div> : null}
    </div>
  );
}
