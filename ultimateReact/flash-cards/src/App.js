import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCards() {
  const [activeElement, setActiveElement] = useState(null);

  return (
    <div className="flashcards">
      {questions.map(({ id, question, answer }) => {
        return (
          <FlashCard
            key={id}
            question={question}
            answer={answer}
            index={id}
            activeElement={activeElement}
            setActiveElement={setActiveElement}
          />
        );
      })}
    </div>
  );
}

function FlashCard({
  question,
  answer,
  activeElement,
  index,
  setActiveElement,
}) {
  const isActive = index === activeElement;

  return (
    <div
      className={isActive ? "selected" : ""}
      onClick={() => {
        if (activeElement === index) {
          setActiveElement(null);
        } else {
          setActiveElement(index);
        }
      }}
    >
      {isActive ? answer : question}
    </div>
  );
}
