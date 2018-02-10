import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) { }

  clientId = '0067197c8931420ebf31c08c52d42a77';
  apiKey = '0067197c8931420ebf31c08c52d42a77';
  baseUrl = 'https://api.spotify.com/v1/';
  // spotifyApi = require('spotify-web-api-js');

  getPlaylists(userID: string) {
    console.log(this.baseUrl + 'users/' + userID + '/playlists');
    // return this.http.get(this.baseUrl + 'users/' + userID + '/playlists')
    //   .subscribe(data => console.log(data));
    return this.http.get('https://api.spotify.com/v1/artists/6DIS6PRrLS3wbnZsf7vYic/')
      .subscribe(data => console.log(data));
  }
}
