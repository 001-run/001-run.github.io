import React, {PropTypes, Component} from 'react'

export default class TumblrText extends Component {
  render() { return (
    <div>
      {this.props.title ? <div className="title">{this.props.title}</div> : <div></div>}
      <div className="body" dangerouslySetInnerHTML={{__html: this.props.body}}></div>
    </div>
  )}
}
TumblrText.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string.isRequired
};