import React, { Component } from 'react';

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Michael',
    };

    console.log('LifecycleB constructor'); // first
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleB getDerivedStateFromLogs'); // second
    return null;
  }

  componentDidMount() {
    console.log('LifecycleB componentDidMount'); // fourth
  }

  shouldComponentUpdate() {
    console.log('LifecycleB shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleB getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('LifecycleB componentDidUpdate');
  }

  render() {
    console.log('LifecycleB render'); // third
    return <div>Lifecycle A</div>;
  }
}

export default LifecycleB;
