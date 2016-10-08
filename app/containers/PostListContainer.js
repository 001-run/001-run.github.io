import React, {Component} from 'react';
import PostList from '../components/PostList';.3
import PostContainer from './PostContainer';
import {fetchTumblrBlog} from '../utils/tumblrHelpers';

export default class PostListContainer extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      posts: []
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

  getPosts() { return (
    this.state.posts.map(
      (post) => <PostContainer post={post} 
                               key={post.id} />
    )
  )}

  render() { return (
    <PostList posts={this.getPosts()} isLoading={this.state.isLoading}/>
  )}
}