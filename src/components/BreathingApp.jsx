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

  return (
    <div>
      <h1>Breathing App Test</h1>
    </div>
  );
}
