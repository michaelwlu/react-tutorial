import React, { useState } from 'react';
// import HookMouseTwo from './HookMouseTwo';
import HookMouseThree from './HookMouseThree'

const MouseContainer = () => {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay((prevDisplay) => !prevDisplay)}>
        Toggle display
      </button>
      {display && <HookMouseThree />}
    </div>
  );
};

export default MouseContainer;
