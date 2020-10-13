import React, { useState, useEffect } from 'react';

const HookCounterFive = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('useEffect - updating document title');
    document.title = `Clicked ${count} times`;
  }, [count]);

  // without useEffect second param, it runs after every render
  // second param is an array of variables to watch during rerender

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click {count} times
      </button>
    </div>
  );
};

export default HookCounterFive;
