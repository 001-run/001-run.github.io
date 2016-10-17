import React, {PropTypes, Component} from 'react';
import styles from './style.css'

export default class TumblrPhotoHead extends Component {
  render() {

    return (
    <div className={styles.TumblrPhotoHead} >
        <img src={this.props.photos[0].alt_sizes[0].url}></img>
    </div>
  )}
}
TumblrPhotoHead.propTypes = {
  photos: PropTypes.array.isRequired
};