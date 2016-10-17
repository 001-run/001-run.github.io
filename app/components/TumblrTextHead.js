import React, {PropTypes, Component} from 'react'
import styles from './style.css';

export default class TumblrTextHead extends Component {
  render() { return (
     <div className={Styles.TumblrTextHead}>
        {this.props.title}
      </div> 
  )}
}
TumblrTextHead.propTypes = {
   title: PropTypes.string
};