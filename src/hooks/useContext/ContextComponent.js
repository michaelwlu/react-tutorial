import React, { useContext } from 'react';
import { ChannelContext, UserContext } from './ContextParent';

const ContextComponent = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      {user} - {channel}
    </div>
  );
};

export default ContextComponent;
