import React, { Component } from 'react';

// Four Ways to Bind Event Handlers
// 1. Binding in render (not recommended because of performance issues)
// 2. Arrow function in render (most simple)
// 3. Binding in class constructor (officially recommended)
// 4. Arrow function in class property (also recommended but more experimental)

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Hello',
    };

    // Approach #3
    // this.clickHandler = this.clickHandler.bind(this);
  }

  // clickHandler() {
  //   this.setState({
  //     message: 'Goodbye',
  //   });
  // }

  // Approach #4
  clickHandler = () => {
    this.setState({
      message: 'Goodbye',
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* Approach #1 */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

        {/* Approach #2 */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}

        {/* Approach #3 / #4 */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
