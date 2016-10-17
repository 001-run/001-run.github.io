import React, {Component} from 'react';
import TumblrPhotoHead from '../components/TumblrPhotoHead';
import TumblrTextBody from '../components/TumblrTextBody';
import Post from '../components/Post'

export default class PostContainer extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState({
      open: !this.state.open
    });
  }

  getPostHead() {
    var post = this.props.post;
    switch(post.type){
      case 'photo':
        return <TumblrPhotoHead
          key={post.id}
          photos={post.photos}
        />
    }
  }

  getPostBody() {
    var post = this.props.post;
    switch(post.type){
      case 'photo':
        return <TumblrTextBody
          key={post.id}
          text={post.caption}
        />
    }
  }

  render() {
    return (
      <Post onClick={this.handleOnClick}
            head={this.getPostHead()}
            body={this.getPostBody()}
            open={this.state.open}
      />
  )}
}