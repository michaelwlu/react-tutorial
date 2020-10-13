import React from 'react';

const MemoComp = ({ name }) => {
  console.log('Rendering memo comp');
  return <div>{name}</div>;
};

export default React.memo(MemoComp);
// React.memo prevents rerender
