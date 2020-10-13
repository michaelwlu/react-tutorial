import React from 'react';
import ClassTimer from './ClassTimer';
import FocusInput from './FocusInput';
import HookTimer from './HookTimer';

const RefParent = () => {
  return (
    <div>
      <ClassTimer />
      <HookTimer />
      <FocusInput />
    </div>
  );
};

export default RefParent;
