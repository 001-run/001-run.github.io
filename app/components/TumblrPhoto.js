import React, {PropTypes, Component} from 'react';
import styles from './style.css'

export default class TumblrPhoto extends Component {  
  render() { return (
    <div className={styles.TumblrPhoto}>
      <img src={this.props.photos[0].alt_sizes[0].url}></img>
      <div className="caption"
           dangerouslySetInnerHTML={{__html: this.props.caption}}></div>
    </div>
  )}
}
TumblrPhoto.propTypes = {
  photos: PropTypes.array.isRequired,
  caption: PropTypes.string
};