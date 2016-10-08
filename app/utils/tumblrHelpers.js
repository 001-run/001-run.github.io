import React from 'react'
import fetchJsonp from 'fetch-jsonp';

var apiurl = 'https://api.tumblr.com/v2/blog/'
var oauthkey = 'mavsUhEghnm9N3SViiHachu6iKUsJAVmkPJJoJmydcFOgMVdWH'

//fetches a jsonp response from tumblr,
//tunnels down to the juicy part,
//and returns a promise with the data"
export function fetchTumblrBlog(blogIdentifier) {
  return fetchJsonp(apiurl+blogIdentifier+'/posts?reblog_info=true&api_key='+oauthkey)
    .then((response) => {
      return response.json();
    }).then((json) => {
      return json.response
    }); 
}