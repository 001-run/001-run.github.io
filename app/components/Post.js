import React, {Component} from 'react';
import styles from './style.css'

export default class Post extends Component {
  render() { return (
    <div className={styles.Post}>
      {this.props.post}
    </div>
  )}
}