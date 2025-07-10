export default function AccordionItem({ title, text, number }) {
  return (
    <div className="item">
      <span className="number"> {number > 9 ? number : "0" + number}</span>
      <h2 className="title">{title}</h2>
      <span className="icon">+</span>
      <div className="content-box">{text}</div>
    </div>
  );
}
