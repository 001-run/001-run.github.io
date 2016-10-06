import React, {Component} from 'react';

export default class PostList extends Component {
  render() { return (
    <div className={styles.PostList}>
      {this.props.posts}
    </div>
  )}
}