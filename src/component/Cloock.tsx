import React, { useState, useRef } from "react";
import { Button } from "./Button";
import "./App.css"; // Import tệp CSS

export const Cloock: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const countRef = useRef<NodeJS.Timeout | null>(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const handlePause = () => {
    if (countRef.current !== null) {
      clearInterval(countRef.current);
    }
    setIsPaused(true);
  };


  const handleReset = () => {
    if (countRef.current !== null) {
      clearInterval(countRef.current);
    }
    setIsActive(false);
    setIsPaused(false);
    setTime(0);
  };

  const formatTime = () => {
    const getSeconds = `0${(time % 60)}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${Number(minutes) % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  return (
    <div className="container">
      <h1>Stopwatch</h1>
      <div className="time-container">
        <div className="time-display">{formatTime()}</div>
      </div>
      <Button
        handleStart={handleStart}
        handlePause={handlePause}
        handleReset={handleReset}
      />
    </div>
  );
};
