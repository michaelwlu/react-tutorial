import React, { Component } from 'react';
import ComponentC from './ComponentC';
import { UserProvider } from './userContext';

class ContextParent extends Component {
  render() {
    return (
      <UserProvider value="Michael">
        <ComponentC />
      </UserProvider>
    );
  }
}

export default ContextParent;
