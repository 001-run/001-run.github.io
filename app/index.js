import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import fetchJsonp from 'fetch-jsonp';

var apiurl = 'https://api.tumblr.com/v2/blog/'
var oauthkey = 'mavsUhEghnm9N3SViiHachu6iKUsJAVmkPJJoJmydcFOgMVdWH'

//fetches a jsonp response from tumblr,
//tunnels down to the juicy part,
//and returns a promise with the data"
function fetchTumblrBlog(blogIdentifier) {
  return fetchJsonp(apiurl+blogIdentifier+'/posts?api_key='+oauthkey)
    .then((response) => {
      return response.json();
    }).then((json) => {
      return json.response
    }); 
}

function puke(data) {
  return <pre>{JSON.stringify(data, null, ' ')}</pre>
}

class Header extends Component {
  render() { return (
    <div>Hello</div>
  )}
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      posts: {}
    };
  }
  async componentDidMount() {
    try {
      const blog = await fetchTumblrBlog('sigmasleep.tumblr.com');
      this.setState({
        isLoading: false,
        posts: blog.posts
      });
    } catch (error) {
      console.warn('Error in tumblr blog retrieval');
    }
  }
  render() { return (
    <div>
    <Header />
    {this.state.isLoading ? <p>LOADING</p> : puke(this.state.posts)}
    </div>
  )}
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

// var blogIdentifiers = ['sigmasleep.tumblr.com'];
// blogIdentifiers.map((id) => fetchTumblrData(id));