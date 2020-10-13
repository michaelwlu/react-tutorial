import React, { Component } from 'react';
import ComponentF from './ComponentF';
import UserContext from './userContext';

class ComponentE extends Component {
  static contextType = UserContext;
  render() {
    return (
      <div>
        Component E context {this.context}
        <ComponentF />
      </div>
    );
  }
}

// contextType approach limitations:
// 1. can only be used in class components
// 2. can only subscribe to one context at a time

export default ComponentE;
