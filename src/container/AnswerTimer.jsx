import React from "react";
import "./AnswerTimer.css";
import { useState, useEffect, useRef } from "react";

const AnswerTimer = ({ duration, onTimeup }) => {
  const [counter, setCounter] = useState(0);
  const [progressLoaded, setProgressLoaded] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCounter((cur) => cur + 0.1);
    }, 100);
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    setProgressLoaded(100 * (counter / duration));
    if (counter >= duration) {
      clearInterval(intervalRef.current);

      //setTimeout(() => {
      onTimeup();
      //}, 1000);
    }
  }, [counter]);

  return (
    <div className="Timer-content">
      <div
        style={{
          width: `${progressLoaded}%`,
          backgroundColor: `${
            progressLoaded < 40
              ? "lightgreen"
              : progressLoaded < 70
              ? "yellow"
              : "Red"
          }
            `,
        }}
        className="progress"
      ></div>
    </div>
  );
};

export default AnswerTimer;
