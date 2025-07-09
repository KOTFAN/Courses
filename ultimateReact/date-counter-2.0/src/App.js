import { useState } from "react";
import "./App.css";

function App() {
  const [stepSize, setStepSize] = useState(1);
  const [stepsCount, setStepsCount] = useState(0);

  return (
    <div className="App">
      <div className="counter">
        <input
          type="range"
          min={1}
          max={10}
          value={stepSize}
          onChange={(e) => setStepSize(Number(e.target.value))}
        />
        <p>Step: {stepSize}</p>
      </div>
      <div className="counter">
        <button
          onClick={() => setStepsCount((currenCount) => currenCount - stepSize)}
        >
          -
        </button>
        <p>Count: {stepsCount}</p>
        <button
          onClick={() => setStepsCount((currenCount) => currenCount + stepSize)}
        >
          +
        </button>
      </div>
      <ShowDate stepsCount={stepsCount} />
    </div>
  );
}

function ShowDate({ stepsCount }) {
  const date = new Date();
  if (stepsCount === 0) return <p>Today is: {date.toDateString()}</p>;

  //can be refactored to one conditional
  if (stepsCount < 0)
    return (
      <p>
        {Math.abs(stepsCount)} days ago was:{" "}
        {new Date(
          date.getTime() + stepsCount * 1000 * 60 * 60 * 24
        ).toDateString()}
      </p>
    );
  //stepsCount > 0
  else {
    return (
      <p>
        In {stepsCount} days will be:
        {new Date(
          date.getTime() + stepsCount * 1000 * 60 * 60 * 24
        ).toDateString()}
      </p>
    );
  }
}

export default App;
