import React, {PropTypes, Component} from 'react';
import styles from './style.css'

export default class TumblrPhoto extends Component {
  render() {
    var hr = <div/>
    var content = <div/>

    if(this.props.open && this.props.caption){
      content = <div className={styles.Caption}
                     dangerouslySetInnerHTML={{__html: this.props.caption}}></div>;
      hr = <hr/>
    }

    return (
    <div className={styles.TumblrPhoto} >
      <div className={styles.TumblrPhotoTitle}>
        <img src={this.props.photos[0].alt_sizes[0].url}></img>
      </div>
      { content }
    </div>
  )}
}
TumblrPhoto.propTypes = {
  photos: PropTypes.array.isRequired,
  caption: PropTypes.string
};