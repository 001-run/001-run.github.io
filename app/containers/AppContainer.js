import React, {Component} from 'react';
import PostListContainer from './PostListContainer';
import App from '../components/App';

export default class AppContainer extends Component {
  render() { return (
      <App>
        <PostListContainer />
      </App>
  )}
}