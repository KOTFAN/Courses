import "./App.css";
import BillSize from "./BillSize";
import ResetButton from "./ResetButton";
import ServiceImpression from "./ServiceImpression";
import YouWillPay from "./YouWillPay";

function App() {
  return (
    <div className="App" style={{ fontFamily: "cursive" }}>
      <BillSize />
      <ServiceImpression>
        <p>How did you like the service?</p>
      </ServiceImpression>
      <ServiceImpression>
        <p>How did your friend like the service?</p>
      </ServiceImpression>
      <YouWillPay />
      <ResetButton />
    </div>
  );
}

export default App;
