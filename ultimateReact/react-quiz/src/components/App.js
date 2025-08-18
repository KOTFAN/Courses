import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import StartQuiz from "./StartQuiz";
import Error from "./Error";
import Loader from "./Loader";

function App() {
  const intialState = { questions: [], score: 0, bestScore: 0, answer: null, status: "loading" };
  const [{ questions, score, bestScore, answer, status }, dispatch] = useReducer(reducer, intialState);
  const questionsNum = questions.length;

  function reducer(state, action) {
    switch (
      action.type //'loading', 'ready', 'active', 'finished', 'error'
    ) {
      case "error":
        return { ...state, status: "error" };
      case "ready":
        return { ...state, status: "ready", questions: action.payload };
      case "start":
        return { ...state, status: "active" };

      default:
        throw new Error("Wrong action🔥");
    }
  }

  useEffect(() => {
    fetch("http://localhost:3004/questions")
      .then((data) => {
        return data.json();
      })
      .then((questions) => {
        dispatch({ type: "ready", payload: questions });
      })
      .catch((err) => {
        dispatch({ type: "error" });
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "error" && <Error />}

        {status === "loading" && <Loader />}

        {status === "ready" && <StartQuiz questionsNum={questionsNum} dispatch={dispatch} />}
      </Main>
    </div>
  );
}

export default App;
