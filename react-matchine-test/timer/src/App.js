import "./App.css";
import { useState } from "react";
function App() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [second, setSeconds] = useState(0);
  //for start
  const [isStared, setisStarted] = useState(true);

  const startHandler = () => {
    setisStarted(true);
  };

  return (
    <div className="">
      <input id="hour" placeholder="HH" />
      <input id="minutes" placeholder="MM" />
      <input id="second" placeholder="SS" />
      <br />
      <br />
      <button onClick={startHandler}> Start </button>
      <br />
      <br />

      {isStared && (
        <>
          {" "}
          <div>HH</div>
          <div>MM</div>
          <div>SS</div>
          <br />
          <br />
          <button> Pause </button>
          <button> Rest </button>
          <button> Resume </button>
        </>
      )}
    </div>
  );
}

export default App;
