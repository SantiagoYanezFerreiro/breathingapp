import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function BreathingProgram({
  inhaleDuration,
  holdDuration,
  exhaleDuration,
  programName,
}) {
  const [currentPhase, setCurrentPhase] = React.useState("inhale");
  const [timeLeft, setTimeLeft] = React.useState(inhaleDuration);
  const [isRunning, setIsRunning] = React.useState(false);
  const [isAnimated, setIsAnimated] = React.useState(false);
  const [phaseCounter, setPhaseCounter] = React.useState({
    inhale: 0,
    hold: 0,
    exhale: 0,
  });

  const location = useLocation();

  const handleStartStop = () => {
    setIsRunning(!isRunning);
    setIsAnimated(!isAnimated);
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
      setPhaseCounter((prevCounter) => ({
        ...prevCounter,
        [currentPhase]: prevCounter[currentPhase] + 1,
      }));
    }

    return () => clearInterval(intervalId);
  }, [isRunning, timeLeft, currentPhase]);

  useEffect(() => {
    if (
      phaseCounter.inhale === 3 &&
      phaseCounter.exhale === 3 &&
      phaseCounter.hold === 3
    ) {
      setIsAnimated(false);
      setIsRunning(false);
      setTimeLeft(0);
    }
  }, [phaseCounter]);

  return (
    <div className="container">
      <h1>{programName}</h1>
      <div className={`circle ${isAnimated ? currentPhase : ""}`}>
        {isAnimated &&
        phaseCounter.inhale === 3 &&
        phaseCounter.exhale === 3 &&
        phaseCounter.hold === 3 ? (
          <p className="timeLeft">Good Job</p>
        ) : (
          <p className="timeLeft">
            {currentPhase === "hold" ? `|| ${timeLeft}` : timeLeft}
          </p>
        )}
      </div>
      <h2 className="phasetext">{currentPhase}</h2>

      <div className="button-group">
        <button onClick={handleStartStop} className="startstopbtn">
          {isRunning ? "Stop Counter" : "Start Counter"}
        </button>
      </div>
    </div>
  );
}
