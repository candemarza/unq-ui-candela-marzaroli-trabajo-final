import { useState, useEffect } from "react";

const Time = ({ updateTime, gameOver }) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

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

  const toggle = () => setIsActive(!isActive);

  return (
    <div className="screen">
      {isActive ? (
        <div className="score">🌸 Your time is {seconds}s</div>
      ) : (
        <div className="score">🌸 Game paused !</div>
      )}
      <div className="score-button" onClick={toggle}>
        {isActive ? "Pause" : "Start"}
      </div>
    </div>
  );
};

export default Time;