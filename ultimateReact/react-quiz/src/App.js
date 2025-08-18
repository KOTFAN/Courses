import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import StartQuiz from "./StartQuiz";

function App() {
  const intialState = { questions: [], score: 0, bestScore: 0, answer: null, status: "loading" };
  const [{ questions, score, bestScore, answer, status }, dispatch] = useReducer(reducer, intialState);

  function reducer(state, action) {
    switch (
      action.type //
    ) {
      case "loading":
        return { ...state };
      case "ready":
        return { ...state, status: "ready" };

      default:
        throw new Error("Wrong action🔥");
    }
  }

  useEffect(() => {
    dispatch({ type: "ready" });
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>{status === "ready" && <StartQuiz />}</Main>
    </div>
  );
}

export default App;
