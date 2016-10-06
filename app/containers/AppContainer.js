import React, {Component} from 'react';
import {fetchTumblrBlog} from '../utils/tumblrHelpers';
import PostListContainer from './PostListContainer';
import App from '../components/App';

export default class AppContainer extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      posts: {}
    };
  }

  async componentDidMount() {
    try {
      const blog = await fetchTumblrBlog('sigmasleep.tumblr.com');
      this.setState({
        isLoading: false,
        posts: blog.posts
      })
    } catch (error) {
      console.warn('Error in tumblr blog retrieval:',error);
    }
  }

  render() {
    var body = this.state.isLoading ?
    <p>LOADING</p> 
    : <PostListContainer posts={this.state.posts}/>;
    
    return (
      <App>
        {body}
      </App>
    )
  }
}