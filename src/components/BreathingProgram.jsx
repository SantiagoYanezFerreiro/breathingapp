import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function BreathingProgram({
  inhaleDuration,
  holdDuration,
  exhaleDuration,
}) {
  const [currentPhase, setCurrentPhase] = React.useState("inhale");
  const [timeLeft, setTimeLeft] = React.useState(inhaleDuration);
  const [isRunning, setIsRunning] = React.useState(false);

  const location = useLocation();
  const programName = location.pathname.replace("/breathingprogram", "");

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleChangePhase = () => {
    if (currentPhase === "inhale") {
      setCurrentPhase("hold");
      setTimeLeft(holdDuration);
    } else if (currentPhase === "hold") {
      setCurrentPhase("exhale");
      setTimeLeft(exhaleDuration);
    } else if (currentPhase === "exhale") {
      setCurrentPhase("inhale");
      setTimeLeft(inhaleDuration);
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
        {currentPhase === "hold" ? (
          <p className="timeLeft">|| {timeLeft}</p>
        ) : (
          <p className="timeLeft"> {timeLeft}</p>
        )}
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
