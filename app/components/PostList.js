import React, {Component} from 'react';
import styles from './style.css'

export default class PostList extends Component {
  render() { return (
    <div className={styles.PostList}>
      {this.props.isLoading ? <p>LOADING</p> : this.props.posts}
    </div>
  )}
}