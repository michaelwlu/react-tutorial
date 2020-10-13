import React, { Component, PureComponent } from 'react';
import MemoComp from '../memo/MemoComp';
import PureComp from './PureComp';
import RegularComp from './RegularComp';

// PureComponent implements the shouldComponentUpdate lifecycle method by performing a shallow comparison on the props and state of the component

// RegularComponent does not and always rerenders

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Michael',
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Michael',
      });
    }, 2000);
  }
  render() {
    console.log('ParentComp render');
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} />
        {/* <PureComp name="Michael" /> */}
        {/* <RegularComp name="Michael" /> */}
      </div>
    );
  }
}

export default ParentComp;
