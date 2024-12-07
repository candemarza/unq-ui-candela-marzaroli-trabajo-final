import { useState, useEffect } from "react";

const Time = ({ updateTime, gameOver, isActive, toggleTimer }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!isActive || gameOver) return;
    const interval = setInterval(() => {
      setSeconds((seconds) => {
        const newTime = seconds + 1;
        updateTime(newTime);
        return newTime;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isActive, gameOver]);

  return (
    <div className="screen">
      {isActive ? (
        <div className="score">🌸 Your time is {seconds}s</div>
      ) : (
        <div className="score">🌸 Game paused !</div>
      )}
      <div className="score-button" onClick={toggleTimer}>
        {isActive ? "Pause" : "Start"}
      </div>
    </div>
  );
};

export default Time;