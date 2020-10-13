import React, { useEffect, useState } from 'react';

const HookMouseThree = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log('Mouse event');
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log('useEffect called');
		window.addEventListener('mousemove', logMousePosition)
		
		return () => {
			console.log('Component unmounting code')
			window.removeEventListener('mousemove', logMousePosition)
		};
  }, []);
  // return function contains cleanup code, mimics componentWillUnmount

  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  );
};

export default HookMouseThree;
