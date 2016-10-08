import React, {Component} from 'react';
import TumblrText from '../components/TumblrText';
import TumblrPhoto from '../components/TumblrPhoto';
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

  getPostType() {
    var post = this.props.post;
    switch(post.type){
      case 'photo':
        return <TumblrPhoto
          open={this.state.open}
          key={post.id}
          photos={post.photos}
          caption={post.caption}
        />
      case 'text':
        return <TumblrText
          open={this.state.open}
          key={post.id}
          title={post.title}
          body={post.body}
        />
    }
  }

  render() {
    return (
      <Post onClick={this.handleOnClick}
            open={this.state.open}>
        {this.getPostType()}
      </Post>
  )}
}