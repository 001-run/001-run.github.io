import React, {Component} from 'react';

export default class Post extends Component {
  render() { return (
    <div className="Post">
      {this.props.post}
    </div>
  )}
}