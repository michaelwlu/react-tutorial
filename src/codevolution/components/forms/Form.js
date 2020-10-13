import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      comments: '',
      topic: 'React',
    };
  }

  usernameHandler = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  commentsHandler = (e) => {
    this.setState({
      comments: e.target.value,
    });
  };

  topicHandler = (e) => {
    this.setState({
      topic: e.target.value,
    });
  };

  handleSubmit = (e) => {
    alert(`${this.state.username}`);
    e.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="">Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.usernameHandler}
          />
        </div>
        <div>
          <label htmlFor="">Comments</label>
          <textarea
            name=""
            id=""
            cols="30"
            value={this.state.comments}
            onChange={this.commentsHandler}
            rows="10"
          ></textarea>
        </div>
        <div>
          <label htmlFor="">Topic</label>
          <select value={this.state.topic} onChange={this.topicHandler}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
