import Options from "./Options";

function Question({ question: { question, options, correctOption, points }, answer, dispatch }) {
  return (
    <div>
      <h2> {question}</h2>
      <Options options={options} correctOption={correctOption} points={points} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
