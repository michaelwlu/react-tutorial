import { useState } from 'react';

const useCounter = (initialCount, value) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prev) => prev + value);
  };

  const decrement = () => {
    setCount((prev) => prev - value);
  };

  const reset = () => {
    setCount(initialCount);
  };

  return [count, increment, decrement, reset];
};

export default useCounter;
