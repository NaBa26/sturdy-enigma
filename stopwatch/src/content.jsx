import React, { useState, useEffect, useRef } from 'react';

function Stopwatch(){

  const [time, setTime] = useState({hour:"00",min:"00",sec:"00"});
  
  function isRunning(){
    if(time.hour=="00" && time.sec=="00" && time.min=="00")
    return false;
  }

  return(
    <div className="container">
    <div className="innerContainer">
      <div className="hour">
        <div className="hourLabel">
          <label>Hours</label>
        </div>
        <output>{time.hour}</output>
      </div>
      <div className="min">
        <div className="minLabel">
          <label>Minutes</label>
        </div>
        <output>{time.hour}</output>
      </div>
      <div className="sec">
        <div className="secLabel">
          <label>Seconds</label>
        </div>
        <output>{time.hour}</output>
      </div>
    </div>
    <div className="buttonContainer">
    <button>Start</button>
    <button>Reset</button>
    </div>
    </div>
  );
}

export default Stopwatch;