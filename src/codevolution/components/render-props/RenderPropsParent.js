import React, { Component } from 'react';
import ClickCounterTwo from './ClickCounterTwo';
import Counter from './Counter';
import HoverCounterTwo from './HoverCounterTwo';
import User from './User';

class RenderPropsParent extends Component {
  render() {
    return (
      <div>
        <Counter
          render={(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        />
        <Counter
          render={(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        />
        {/* <HoverCounterTwo />
        <ClickCounterTwo />
        <User render={(isLoggedIn) => (isLoggedIn ? 'Michael' : 'Guest')} /> */}
      </div>
    );
  }
}

export default RenderPropsParent;
