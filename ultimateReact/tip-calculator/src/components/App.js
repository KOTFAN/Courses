import { useState } from "react";
import "./App.css";
import BillSize from "./BillSize";
import ResetButton from "./ResetButton";
import ServiceImpression from "./ServiceImpression";
import YouWillPay from "./YouWillPay";

function App() {
  const [bill, setBill] = useState(0);
  return (
    <div className="App" style={{ fontFamily: "cursive" }}>
      <BillSize bill={bill} setBill={setBill} />
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
