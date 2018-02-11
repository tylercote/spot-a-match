import {Component, OnInit} from '@angular/core';
import * as Spotify from 'spotify-web-api-js';
import PlaylistTrackObject = SpotifyApi.PlaylistTrackObject;
import * as $ from 'jquery';

const s = new Spotify();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'app';
  user1ID;
  user2ID;
  user1Tracks: PlaylistTrackObject[] = [];
  user2Tracks: PlaylistTrackObject[] = [];
  user1Genres = {};
  user2Genres = {};

  constructor() {}

  ngOnInit() {
  }

  getDataFromChild($event) {
    s.setAccessToken(this.getAccessToken());
    this.user1ID = $event[0];
    this.user2ID = $event[1];
    const self = this;
    s.getUserPlaylists(this.user1ID).then( data => data.items.map(
      item => s.getPlaylistTracks(this.user1ID, item.id).then(result => {
        result.items.forEach(track => {
          self.user1Tracks.push(track);

          this.getGenres(track).then(genres => genres.forEach((genre) => {
            let x = this.addGenre(self.user1Genres, genre);
            console.log(x)
            self.user1Genres = x
          }));
        });
      })
    )).then(blah => console.log(self.user1Genres));

    s.getUserPlaylists(this.user2ID).then(data => data.items.map(
      item => s.getPlaylistTracks(this.user2ID, item.id).then(result => {
        result.items.forEach(
          track => self.user2Tracks.push(track)
        );
      })
    ));
    console.log(this.user1Tracks);
    console.log(this.user2Tracks);
  }

  getAccessToken() {
    const hash = window.location.hash;
    return hash.match(/(.*?)=(.*?)&/)[2];
  }

  /*
  Checks for compatibility of genres.
   */
  async getGenreCompatibility(tracks, genres) {
    tracks.forEach(track => {
        $.getJSON(track.track.album.href).then(album => {
          console.log(album)
          album.genres.forEach(genre => {
            genres = this.addGenre(genres, genre);
          });
        });
      }
    );
  }

  async getGenres(track) {
    let fullHref = track.track.artists[0].href;

    if (fullHref === null) {
      return [];
    }

    let realHref = fullHref.match(/(.*?)artists\/(.*)/)[2];
    let x = s.getArtist(realHref).then(artist => artist.genres);
    return x
  }


  addGenre(genreMap, newGenre) {
    if (newGenre in genreMap) {
      genreMap[newGenre] = genreMap[newGenre] + 1;
    } else {
      genreMap[newGenre] = 1;
    }
    console.log(genreMap);
    return genreMap;
  }
}
