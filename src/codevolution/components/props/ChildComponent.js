import React from 'react';

const ChildComponent = ({ greetHandler }) => {
  return (
    <div>
      <button onClick={() => greetHandler('child')}>Greet Parent</button>
    </div>
  );
};

export default ChildComponent;
