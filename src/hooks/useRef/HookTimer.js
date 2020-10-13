import React, { useState, useRef, useEffect } from 'react';

const HookTimer = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  // useRef to declare a variable that can be accessed inside and outside of useEffect

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      Hook Timer - {timer}
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear Hook Timer
      </button>
    </div>
  );
};

export default HookTimer;
