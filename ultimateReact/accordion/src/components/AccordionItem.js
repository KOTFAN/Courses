export default function AccordionItem({
  title,
  number,
  handleOpenClose,
  openItem,
  children,
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
      {isOpen ? <div className="content-box">{children}</div> : null}
    </div>
  );
}
