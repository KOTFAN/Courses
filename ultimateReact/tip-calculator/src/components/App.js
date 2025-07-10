import "./App.css";

function App() {
  return <div className="App" style={{ fontFamily: "cursive" }}></div>;
}

function BillSize() {
  return (
    <div>
      How much was the bill? <input value={90} />
    </div>
  );
}

function ServiceImpression({ children }) {
  return (
    <div>
      {children}{" "}
      <select value={20}>
        <option value={0}>(0%) It was awfull !!!</option>
        <option value={5}>(5%) It was normal </option>
        <option value={10}>(10%) It was good !</option>
        <option value={15}>(15%) It was wery good !!</option>
        <option value={20}>(20%) It was fantastic !!!</option>
      </select>
    </div>
  );
}

function YouWillPay({ bill, tip }) {
  return (
    <h2 style={{ fontWeight: 900 }}>
      You will pay ${bill + tip} (${bill} + ${tip} tip)
    </h2>
  );
}

function ResetButton({ onClick }) {
  <button onClick={onClick}>Reset</button>;
}
export default App;
