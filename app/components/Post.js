import React, {Component} from 'react';
import styles from './style.css'

export default class Post extends Component {
  render() { return (
    <div className={styles.Post}
         onClick={this.props.onClick}>
      {this.props.children}
    </div>
  )}
}