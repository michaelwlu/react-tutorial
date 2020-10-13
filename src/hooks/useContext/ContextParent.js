import React from 'react';
import ContextComponent from './ContextComponent';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

const ContextParent = () => {
  return (
    <div>
      <UserContext.Provider value="Michael">
        <ChannelContext.Provider value="Codevolution">
          <ContextComponent />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default ContextParent;
