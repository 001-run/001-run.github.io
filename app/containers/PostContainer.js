import React, {Component} from 'react';
import TumblrText from '../components/TumblrText';
import TumblrPhoto from '../components/TumblrPhoto';
import Post from '../components/Post'

export default class PostContainer extends Component {
  getPostType() {
    var post = this.props.post;
    switch(post.type){
      case 'photo':
        return <TumblrPhoto
          key={post.id}
          photos={post.photos}
          caption={post.caption}
        />
      case 'text':
        return <TumblrText
          key={post.id}
          title={post.title}
          body={post.body}
        />
    }
  }

  render() { return (
    <Post post={this.getPostType()} />
  )}
}