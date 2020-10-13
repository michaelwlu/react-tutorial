import React from 'react';

const UserContext = React.createContext('Codevolution');

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;
export default UserContext;
