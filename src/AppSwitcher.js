import React, { useState } from 'react';
import ToDoApp from './todo-list/App';
import RouterApp from './router-tutorial/App';
import NameListApp from './name-list/App';
import CodevolutionApp from './codevolution/App';
import HooksApp from './hooks/App';

export default function AppSwitcher() {
  const tutorialApp = {
    ToDo: <ToDoApp />,
    Router: <RouterApp />,
    NameList: <NameListApp />,
    Codevolution: <CodevolutionApp />,
    Hooks: <HooksApp />,
  };

  const [tutorialDisplay, setTutorialDisplay] = useState(
    Object.keys(tutorialApp)[Object.keys(tutorialApp).length - 1]
  );

  return (
    <div>
      <div>
        <button onClick={() => setTutorialDisplay('ToDo')}>To Do</button>
        <button onClick={() => setTutorialDisplay('Router')}>Router</button>
        <button onClick={() => setTutorialDisplay('NameList')}>
          Name List
        </button>
        <button onClick={() => setTutorialDisplay('Codevolution')}>
          Codevolution
        </button>
        <button onClick={() => setTutorialDisplay('Hooks')}>Hooks</button>
      </div>
      {tutorialApp[tutorialDisplay]}
    </div>
  );
}
