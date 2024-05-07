import React, { useState, useRef } from 'react';

function Stopwatch() {
  const [time, setTime] = useState({ hour: 0, min: 0, sec: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startStopwatch = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          let { hour, min, sec } = prevTime;
          sec++;
          if (sec === 60) {
            sec = 0;
            min++;
          }
          if (min === 60) {
            min = 0;
            hour++;
          }
          return { hour, min, sec };
        });
      }, 1000);
    }
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setTime({ hour: 0, min: 0, sec: 0 });
    setIsRunning(false);
  };

  return (
    <div className="container">
      <div className="innerContainer">
        <div className="hour">
          <div className="hourLabel">
            <label>Hours</label>
          </div>
          <output>{time.hour < 10 ? `0${time.hour}` : time.hour}</output>
        </div>
        <div className="min">
          <div className="minLabel">
            <label>Minutes</label>
          </div>
          <output>{time.min < 10 ? `0${time.min}` : time.min}</output>
        </div>
        <div className="sec">
          <div className="secLabel">
            <label>Seconds</label>
          </div>
          <output>{time.sec < 10 ? `0${time.sec}` : time.sec}</output>
        </div>
      </div>
      <div className="buttonContainer">
        <button onClick={startStopwatch}>{isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={resetStopwatch}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;