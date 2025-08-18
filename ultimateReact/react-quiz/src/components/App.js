import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import StartQuiz from "./StartQuiz";
import Error from "./Error";

function App() {
  const intialState = { questions: [], score: 0, bestScore: 0, answer: null, status: "loading" };
  const [{ questions, score, bestScore, answer, status }, dispatch] = useReducer(reducer, intialState);

  function reducer(state, action) {
    switch (
      action.type //'loading', 'ready', 'active', 'finished', 'error'
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
      <Main>
        {status === "error" && <Error />}

        {status === "ready" && <StartQuiz />}
      </Main>
    </div>
  );
}

export default App;
