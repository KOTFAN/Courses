import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import StartQuiz from "./StartQuiz";
import Error from "./Error";
import Loader from "./Loader";
import Question from "./Question";

function App() {
  const intialState = { status: "loading", questions: [], score: 0, bestScore: 0, questionIndex: 0, answer: null };
  const [{ questions, score, bestScore, questionIndex, status, answer }, dispatch] = useReducer(reducer, intialState);
  const questionsNum = questions.length;

  function reducer(state, action) {
    switch (action.type) {
      case "error":
        return { ...state, status: "error" }; //'loading', 'ready', 'active', 'finished', 'error'
      case "ready":
        return { ...state, status: "ready", questions: action.payload };
      case "start":
        return { ...state, status: "active" };
      case "addAnswer":
        return { ...state, answer: action.payload };
      case "nextQuestion":
        return { ...state, questionIndex: state.questionIndex + 1, answer: null };

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

        {status === "active" && <Question question={questions[questionIndex]} dispatch={dispatch} answer={answer} />}
      </Main>
    </div>
  );
}

export default App;
