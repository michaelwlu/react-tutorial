import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      error: '',
    };
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res);
        this.setState({ posts: res.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: error.message });
      });
  }

  render() {
    const { posts, error } = this.state;
    return (
      <div>
        List of Posts
        {!!posts.length &&
          posts.map((post) => <div key={post.id}>{post.title}</div>)}
        {error && <div>{error}</div>}
      </div>
    );
  }
}

export default PostList;
