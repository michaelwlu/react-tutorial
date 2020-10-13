import React, { useState, useMemo } from 'react';

const MemoCounter = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const incrementOne = () => {
    setCounterOne((prev) => prev + 1);
  };
  const incrementTwo = () => {
    setCounterTwo((prev) => prev + 1);
  };

  // useCallback vs useMemo
  // useCallback caches the function itself whereas useMemo caches the result of the function

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <button onClick={incrementOne}>Count One - {counterOne}</button>
        <span>{isEven ? 'Even' : 'Odd'}</span>
        <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
      </div>
    </div>
  );
};

export default MemoCounter;
