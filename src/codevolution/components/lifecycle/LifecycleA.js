import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

// What is the order of method execution during mounting phase?

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Michael',
    };

    console.log('LifecycleA constructor'); // first
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromLogs'); // second
    return null;
  }

  componentDidMount() {
    console.log('LifecycleA componentDidMount'); // fourth
  }

  shouldComponentUpdate() {
    console.log('LifecycleA shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleA getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('LifecycleA componentDidUpdate');
  }

  changeState = () => {
    this.setState({
      name: 'Codevolution',
    });
  };
  render() {
    console.log('LifecycleA render'); // third
    return (
      <div>
        <div>Lifecycle A</div>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB />
        {/* LifecycleB methods happen after render and before LifecycleA componentDidMount */}
      </div>
    );
  }
}

export default LifecycleA;
