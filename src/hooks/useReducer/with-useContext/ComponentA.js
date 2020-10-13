import React, { useContext } from 'react';
import { CountContext } from './ReducerContextParent';

const ComponentA = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      Component A
      <div>
        <div>Count - {countContext.countState}</div>
        <button onClick={() => countContext.countDispatch('increment')}>
          Increment
        </button>
        <button onClick={() => countContext.countDispatch('decrement')}>
          Decrement
        </button>
        <button onClick={() => countContext.countDispatch('reset')}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default ComponentA;
