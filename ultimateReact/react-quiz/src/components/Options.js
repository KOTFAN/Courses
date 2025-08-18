function Options({ options, correctOption, points, dispatch, answer }) {
  const isAnswered = answer !== null;
  console.log(answer, isAnswered, correctOption);

  return (
    <div className="options">
      {options.map((option, currIndex) => (
        <button
          className={`btn btn-option ${isAnswered && (currIndex === correctOption ? "correct" : "wrong")} ${answer === currIndex && "answer"}`}
          key={currIndex}
          onClick={() => {
            dispatch({ type: "addAnswer", payload: currIndex });
          }}
          disabled={isAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
