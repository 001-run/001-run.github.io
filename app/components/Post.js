import React, {Component} from 'react';
import styles from './style.css'

export default class Post extends Component {
  render() {
    var className = styles.Post;
    if(this.props.open) {
      className += ' ' + styles.Open
    }

    return (
      <div className={className}
           onClick={this.props.onClick}>
        {this.props.children}
      </div>
    )
  }
}