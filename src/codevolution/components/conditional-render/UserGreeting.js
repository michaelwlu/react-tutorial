import React, { Component } from 'react';

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    // Approach #1: if/else
    // if (this.state.isloggedIn) {
    //   return <h1>Welcome Michael</h1>;
    // } else {
    //   return <h1>Welcome Guest</h1>;
    // }

    // Approach #2: Element Variable
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Michael</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;

    // Approach #3: Ternary Operator (recommended)
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Michael</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    // Approach #4: Short Circuit
    return this.state.isLoggedIn && <div>Welcome Michael</div>;
  }
}

export default UserGreeting;
