import React, { useEffect } from "react";
import PropTypes from "prop-types";

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

  BreathingProgram.propTypes = {
    inhaleDuration: PropTypes.number.isRequired,
    holdDuration: PropTypes.number.isRequired,
    exhaleDuration: PropTypes.number.isRequired,
    programName: PropTypes.string.isRequired,
  };

  const handleStartStop = () => {
    setIsRunning(!isRunning);
    setIsAnimated(!isAnimated);
  };

  useEffect(() => {
    let intervalId;

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
  }, [
    isRunning,
    timeLeft,
    currentPhase,
    holdDuration,
    inhaleDuration,
    exhaleDuration,
  ]);

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
  // Define the animation class based on the program name
  let animationClass = "";
  if (programName === "Regular Intervals") {
    animationClass = "program1-";
  } else if (programName === "Box Breathing") {
    animationClass = "program2-";
  } else if (programName === "4-7-8 Program") {
    animationClass = "program-4-7-8-animation";
  } else if (programName === "Breathing Hold") {
    animationClass = "program-breahold-animation";
  }

  return (
    <div className="container">
      <h1>{programName}</h1>
      <div
        className={`circle ${isAnimated ? animationClass + currentPhase : ""}`}
      >
        {" "}
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
