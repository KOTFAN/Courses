import { useState } from "react";
import "./App.css";
import BillSize from "./BillSize";
import ResetButton from "./ResetButton";
import ServiceImpression from "./ServiceImpression";
import YouWillPay from "./YouWillPay";

function App() {
  const [bill, setBill] = useState(0);
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  const averageTip = ((myTip + friendTip) / 2 / 100) * bill; //in $

  function handleReset() {
    setBill(0);
    setMyTip(0);
    setFriendTip(0);
  }
  return (
    <div className="App" style={{ fontFamily: "cursive" }}>
      <BillSize bill={bill} setBill={setBill} />
      <ServiceImpression setTip={setMyTip} tip={myTip}>
        <p>How did you like the service?</p>
      </ServiceImpression>
      <ServiceImpression setTip={setFriendTip} tip={friendTip}>
        <p>How did your friend like the service?</p>
      </ServiceImpression>
      {bill !== 0 && (
        <>
          <YouWillPay bill={bill} tip={averageTip} />
          <ResetButton onClick={handleReset} />
        </>
      )}
    </div>
  );
}

export default App;
