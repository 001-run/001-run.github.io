import React, {Component} from 'react';
import PostList from '../components/PostList';.3
import PostContainer from './PostContainer';

export default class PostListContainer extends Component {
  getPosts() { return (
    this.props.posts.map(
      (post) => <PostContainer post={post} 
                               key={post.id} />
    )
  )}

  render() { return (
    <PostList posts={this.getPosts()}/>
  )}
}