import React, { Component } from 'react';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

class HigherOrderParent extends Component {
  render() {
    return (
      <div>
        <ClickCounter name="Michael" />
        <HoverCounter />
      </div>
    );
  }
}

export default HigherOrderParent;
