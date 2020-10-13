import React from 'react';
import Person from './Person';

const NameList = () => {
  const names = ['Bruce', 'Clark', 'Diana'];
  const nameList = names.map((name, index) => (
    <Person key={index} name={name} />
  ));
  // Can only use index as a key when:
  // 1. Items in list do not have unique id
  // 2. List is static and will not change
  // 3. List will never be reordered or filtered
  return <div>{nameList}</div>;
};

export default NameList;
