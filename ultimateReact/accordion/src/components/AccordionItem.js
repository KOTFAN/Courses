import { useState } from "react";

export default function AccordionItem({ title, text, number }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenClose() {
    setIsOpen((c) => !c);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleOpenClose}>
      <span className="number"> {number > 9 ? number : "0" + number}</span>
      <h2 className="title">{title}</h2>
      <span className="icon">{isOpen ? "-" : "+"}</span>
      {isOpen ? <div className="content-box">{text}</div> : null}
    </div>
  );
}
