import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import fetchJsonp from 'fetch-jsonp';

var apiurl = 'https://api.tumblr.com/v2/blog/'
var oauthkey = 'mavsUhEghnm9N3SViiHachu6iKUsJAVmkPJJoJmydcFOgMVdWH'

//fetches a jsonp response from tumblr,
//tunnels down to the juicy part,
//and returns a promise with the data"
function fetchTumblrBlog(blogIdentifier) {
  return fetchJsonp(apiurl+blogIdentifier+'/posts/photo?api_key='+oauthkey)
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

class Photo extends Component {
  render() { return (
    <img src={this.props.photos[0].alt_sizes[0].url}></img>
  )}
}
Photo.propTypes = {
  photos: PropTypes.array.isRequired
}

class PostList extends Component {
  render() {
    var posts = this.props.posts.map(
      (post) => {
        console.log(post);
        switch(post.type){
          case 'photo':
            return <Photo
              key={post.id}
              photos={post.photos}
            />;
        }
      }
    );

    return (<div>{posts}</div>)
  }
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
    {this.state.isLoading ? <p>LOADING</p> : <PostList posts={this.state.posts}/>}
    </div>
  )}
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

// var blogIdentifiers = ['sigmasleep.tumblr.com'];
// blogIdentifiers.map((id) => fetchTumblrData(id));