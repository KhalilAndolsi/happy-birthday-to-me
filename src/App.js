import { useState } from "react";
import "./App.css";

function App() {
  const birthDate = new Date("06 06 2025 00:00:00").getTime();
  const [msg, setMsg] = useState(false);
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let countDown = setInterval(() => {
    let nowDate = new Date().getTime();
    let dateDiff = birthDate - nowDate;

    setDays(Math.floor(dateDiff / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((dateDiff % (1000 * 60)) / 1000));
    
    if (dateDiff < 0) {
      clearInterval(countDown);
      setMsg(true);
    }
  }, 1000);


  

  return (
    <>
      {msg ? (
        <p className="msg">{process.env.REACT_APP_THE_MESSAGE}</p>
      ) : (
        <>
          <h2 className="title">Happy Birthday To Me</h2>
          <div className="box">
            <span id="days" data-name="days">
              {days || 0}
            </span>
            <span id="hours" data-name="hours">
              {hours || 0}
            </span>
            <span id="minutes" data-name="minutes">
              {minutes || 0}
            </span>
            <span id="seconds" data-name="secends">
              {seconds || 0}
            </span>
          </div>
        </>
      )}
    </>
  );
}

export default App;
