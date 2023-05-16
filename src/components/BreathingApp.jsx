import React, { useState, useEffect } from "react";

export default function BreathingApp() {
  const [currentPhase, setCurrentPhase] = React.useState("inhale");
  const [timeLeft, setTimeLeft] = React.useState(4);
  const [isRunning, setIsRunning] = React.useState(false);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleChangePhase = () => {
    if (currentPhase === "inhale") {
      setCurrentPhase("hold");
      setTimeLeft(7);
    } else if (currentPhase === "hold") {
      setCurrentPhase("exhale");
      setTimeLeft(8);
    } else if (currentPhase === "exhale") {
      setCurrentPhase("inhale");
      setTimeLeft(4);
    }
  };

  useEffect(() => {
    let intervalId;

    if (isRunning && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      handleChangePhase();
    }

    return () => clearInterval(intervalId);
  }, [isRunning, timeLeft]);

  return (
    <div className="container">
      <div className={`circle ${currentPhase.toLowerCase()}`}>
        <p className="timeLeft">{timeLeft}</p>
      </div>
      <h2>{currentPhase}</h2>

      <div className="button-group">
        <button onClick={handleStartStop}>
          {isRunning ? "Stop Counter" : "Start Counter"}
        </button>
        <button onClick={handleChangePhase}>Change Phase</button>
      </div>
    </div>
  );
}
