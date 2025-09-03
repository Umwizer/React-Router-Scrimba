// Create a countdown timer with Start, Pause,
//  and Reset buttons using useEffect and cleanup functions.

import { useEffect, useState } from "react";

const Counter = () => {
  const [time, setTime] = useState(100);
  const [isRunning, setRunning] = useState(false);
  useEffect(() => {
    if (isRunning && time > 0) {
      setTimeout(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      clearTimeout(time);
    };
  }, [isRunning, time]);
  return (
    <div>
      <p>{time}</p>
      <button
        onClick={() => {
          setRunning(true);
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          setRunning(false);
        }}
      >
        Pause
      </button>
      <button
        onClick={() => {
          setRunning(false);
          setTime(100);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
