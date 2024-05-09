import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [second, setSeconds] = useState(0);
  //for start
  const [isStared, setisStarted] = useState(false);
  const [timerId, setTimerId] = useState(0);

  const startHandler = () => {
    setisStarted(true);
  };

  const onchangeHandler = (e) => {
    console.log("e", e.target.value, e.target.id);
    if (e.target.id === "hour") {
      setHours(e.target.value);
    } else if (e.target.id === "minutes") {
      setMinutes(e.target.value);
    } else {
      setSeconds(e.target.value);
    }
  };

  const runTimer = (s, m, h, tid) => {
    if (s > 0) {
      setSeconds((s) => s - 1);
    } else if (s === 0 && m > 0) {
      setMinutes((m) => m - 1);
      setSeconds(59);
    } else if (h > 0) {
      setHours((h) => h - 1);
      setMinutes(59);
      setSeconds(59);
    }
  };

  const pause = () => {
    clearInterval(timerId);
  };

  const resume = () => {
    runTimer(second, minutes, hours, timerId);
  };
  const reusme = () => {};
  useEffect(() => {
    let tid;
    tid = setInterval(() => {
      runTimer(second, minutes, hours, tid);
    }, 1000);
    setTimerId(tid);
    return () => {
      clearInterval(tid);
    };
  }, [isStared, hours, minutes, second]);

  return (
    <div className="">
      {!isStared && (
        <>
          {" "}
          <input id="hour" onChange={onchangeHandler} placeholder="HH" />
          <input id="minutes" placeholder="MM" onChange={onchangeHandler} />
          <input id="second" placeholder="SS" onChange={onchangeHandler} />
          <br />
          <br />
          <button onClick={startHandler}> Start </button>
          <br />
          <br />
        </>
      )}

      {isStared && (
        <>
          <div>{hours}:</div>
          <div>{minutes}:</div>
          <div>{second}</div>
          <br />
          <br />
          <button onClick={pause}> Pause </button>
          <button onClick={() => setisStarted(false)}> Rest </button>
          <button onClick={resume}> Resume </button>
        </>
      )}
    </div>
  );
}

export default App;
