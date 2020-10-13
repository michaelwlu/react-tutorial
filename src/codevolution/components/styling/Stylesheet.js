import React from 'react';
import './myStyles.css';

const Stylesheet = ({ primary }) => {
  let className = primary ? 'primary' : '';
  return (
    <div>
      <h1 className={`${className} font-xl`}>Stylesheets</h1>
    </div>
  );
};

export default Stylesheet;
