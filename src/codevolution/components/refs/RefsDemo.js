import React, { Component } from 'react';

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();

    // older method
    this.cbRef = null; // step 1
    this.setCbRef = (element) => {
      this.cbRef = element;
    }; // step 2
  }

  componentDidMount() {
    // this.inputRef.current.focus();
    // console.log(this.inputRef);

    if (this.cbRef) {
      this.cbRef.focus();
    } // step 4
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
				{/* step 3 */}
        <input type="text" ref={this.setCbRef} />

        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;
