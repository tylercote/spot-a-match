// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import * as SpotifyWebApi from 'spotify-web-api-js';
//
// @Injectable()
// export class SpotifyService {
//
//   constructor(private http: HttpClient) { }
//
//
//   // credentials are optional
//   // spotifyApi = new SpotifyWebApi({
//   //   clientId : '0067197c8931420ebf31c08c52d42a77',
//   //   clientSecret : '9edec335337d4fa3b01714cd6e8dc26a',
//   //   redirectUri : 'http://www.google.com/'
//   // });
//
//   spotify = new SpotifyWebApi();
//
//
//   baseUrl = 'https://api.spotify.com/v1/';
//   scopes = 'user-read-private%20user-top-read%20user-library-read%20user-read-recently-played%20playlist-read-private';
//   // spotifyApi = require('spotify-web-api-js');
//
//   getPlaylists(userID: string) {
//     console.log(this.baseUrl + 'users/' + userID + '/playlists');
//     // return this.http.get(this.baseUrl + 'users/' + userID + '/playlists')
//     //   .subscribe(data => console.log(data));
//     return this.http.get('https://accounts.spotify.com/authorize?client_id=0067197c8931420ebf31c08c52d42a77&' +
//       'redirect_uri=http:%2F%2Fgoogle.com%2F' +
//       'response_type=token&scope=user-read-private')
//       .subscribe(data => console.log(data));
//   }
// }
