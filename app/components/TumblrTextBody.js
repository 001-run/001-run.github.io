import React, {PropTypes, Component} from 'react';
import styles from './style.css';

export default class TumblrTextBody extends Component {
  render() { return (
    <div className={styles.TumblrTextBody}
         dangerouslySetInnerHTML={{__html: this.props.text}}>
    </div>
  )}
}
TumblrTextBody.propTypes = {
  text: PropTypes.string.isRequired
};