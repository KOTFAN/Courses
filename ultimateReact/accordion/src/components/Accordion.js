import AccordionItem from "./AccordionItem";
import { useState } from "react";

function Accordion() {
  const [openItem, setOpenItem] = useState(null);

  function handleOpenClose(number) {
    if (openItem === number) {
      setOpenItem(null);
    } else {
      setOpenItem(number);
    }
  }
  const faqs = [
    {
      title: "Where are these chairs assembled?",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    },
    {
      title: "How long do I have to return my chair?",
      text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
    },
    {
      title: "Do you ship to countries outside the EU?",
      text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    },
  ];
  return (
    <div className="accordion">
      {faqs.map(({ title, text }, index) => (
        <AccordionItem
          title={title}
          text={text}
          number={index + 1}
          key={index}
          handleOpenClose={handleOpenClose}
          openItem={openItem}
        />
      ))}
    </div>
  );
}

export default Accordion;
