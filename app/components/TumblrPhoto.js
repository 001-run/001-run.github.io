import React, {PropTypes, Component} from 'react';
import styles from './style.css'

export default class TumblrPhoto extends Component {
  render() { return (
    <div className={styles.TumblrPhoto} >
      <div><img src={this.props.photos[0].alt_sizes[0].url}></img></div>
      { this.props.open && this.props.caption ?
          <div className={styles.Caption}
               dangerouslySetInnerHTML={{__html: this.props.caption}}></div>
        : <div/>
      }
    </div>
  )}
}
TumblrPhoto.propTypes = {
  photos: PropTypes.array.isRequired,
  caption: PropTypes.string
};