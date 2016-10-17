import React, {Component} from 'react';
import styles from './style.css'

export default class Post extends Component {
  createPostHead(){
    let style = styles.PostHead;
    if(this.props.open){
      style += ' ' + styles.Open;
    }

    return (
      <div className={styles.PostHeadWrapper}
           onClick={this.props.onClick}>
        <div className={style}>
          {this.props.head}
        </div>
      </div>
    )
  }

  createPostBody(){
    if(this.props.open){
      return (
        <div className={styles.PostBody}>
          {this.props.body}
        </div>
      )
    }

    return null
  }

  render() {
    return (
      <div className={styles.Post}>
        {this.createPostHead()}
        {this.createPostBody()}
      </div>
    )
  }
}