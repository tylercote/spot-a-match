import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import * as Spotify from 'spotify-web-api-js';
import PlaylistTrackObject = SpotifyApi.PlaylistTrackObject;
import * as $ from 'jquery';
import {isNumber} from 'util';

const s = new Spotify();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'app';
  user1;
  user2;

  data;

  static possibleGenres = {
    'classical': 0,
    'hip hop': 0,
    'jazz blues': 0,
    'country': 0,
    'edm': 0,
    'rock': 0,
    'indie pop': 0,
    'pop': 0
  };

  constructor() {
  }

  ngOnInit() {
  }


  async getDataFromChild($event) {
    s.setAccessToken(this.getAccessToken());
    let user1ID = $event[0];
    this.user1 = await this.buildUser(user1ID);
    let user2ID = $event[1];
    this.user2 = await this.buildUser(user2ID);
    this.data = this.makeData(this.user1, this.user2);
    console.log(this.data);
  }

  makeData(user1, user2) {
    let u1g = user1['genres'];
    let u2g = user2['genres'];

    function valuesFor(field) {
      const u1 = u1g[field];
      const u1len = user1['tracks'].length;

      const u2 = u2g[field];
      const u2len = user2['tracks'].length;
      return [
        Math.round(u1 / u1len * 100),
        Math.round(u2 / u2len * 100),
        1
      ];
    }

    return {
      'name': [user1['name'], user2['name'], 0],
      'followers': [user1['followers'], user2['followers'], 0],
      'imageurl': [user1['imageurl'], user2['imageurl'], 0],
      'classical': valuesFor('classical'),
      'hiphop': valuesFor('hip hop'),
      'bluesjazz': valuesFor('jazz blues'),
      'country': valuesFor('country'),
      'edm': valuesFor('edm'),
      'rock': valuesFor('rock'),
      'indie': valuesFor('indie pop'),
      'pop': valuesFor('pop'),
      'musicpopularity': [user1['popularity'], user2['popularity'], 2],
      'instrumentalness': [15, 39, 2],
      'danciness': [40, 69, 2],
      'highenergy': [20, 40, 2],
      'happiness': [5, 90, 2],
      'fast': [75, 34, 2]
    };
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async buildUser(userId) {

    let display_name;
    let followers_count;
    let image_url;

    await s.getUser(userId).then(user => {
      display_name = user.display_name;
      followers_count = user.followers.total;
      image_url = user.images[0].url;
    });

    const response = await this.getUserTracks(userId);
    const tracks = response['tracks'];
    const popularity = response['popularity'];
    await this.sleep(2000);
    console.log(tracks);
    const artists = await this.getUserArtists(tracks);
    await this.sleep(6000);
    console.log(artists);
    const genres = await this.getUserGenres(artists);
    await this.sleep(2000);
    console.log(genres);
    // let danceiness = 0;
    // let instrumentalness = 0;
    // let highenergy = 0;
    // let happiness = 0;
    // let fast = 0;
    // const audioFeatures = await s.getAudioFeaturesForTracks(tracks.slice(0, 50)).then(features => {
    //     features.audio_features.forEach(feature => {
    //       console.log('Enter for each');
    //       danceiness += feature.danceability;
    //       instrumentalness += feature.instrumentalness;
    //       highenergy += feature.energy;
    //       happiness += feature.valence;
    //       fast += feature.tempo;
    //     })
    //   }
    // );
    // console.log('DANCEABILITY: ' + audioFeatures.audio_features[0].danceability);

    const user = {
      'id': userId,
      'name': display_name,
      'imageurl': image_url,
      'followers': followers_count,
      'tracks': tracks,
      'artists': artists,
      'genres': genres,
      'popularity': Math.round(popularity[0] / tracks.length),
      // 'danceiness': Math.round((danceiness / 50) * 100),
      // 'instrumentalness': Math.round((instrumentalness / 50) * 100),
      // 'highenergy': Math.round((highenergy / 50) * 100),
      // 'happiness': Math.round((happiness / 50) * 100),
      // 'fast': Math.round((fast / 50) * 100)
    };
    console.log(user);
    return user;

  }

  async getUserTracks(id) {
    const tracks = [];
    let popularity = [0];

    return await s.getUserPlaylists(id).then(data => {
      return data.items.forEach(async item => {
        return await s.getPlaylistTracks(id, item.id).then(result => {
          return result.items.forEach(track => {
            if (!isNaN(track.track.popularity)) {
              popularity[0] += track.track.popularity;
            }
            return tracks.push(track);
          });
        });
      });
    }).then(data => {
      return {
        'tracks': tracks,
        'popularity': popularity
      };
    });
  }

  async getUserArtists(tracks) {
    let artists = [];
    await tracks.forEach(async track => {
      let fullHref = track.track.artists[0].href;

      if (fullHref === null) {
        return [];
      }

      let realHref = fullHref.match(/(.*?)artists\/(.*)/)[2];
      let artist = await s.getArtist(realHref);
      artists.push(artist);
    });
    return artists;
  }

  async getUserGenres(artists) {
    const genres = JSON.parse(JSON.stringify(AppComponent.possibleGenres));
    artists.forEach(artist =>
      artist.genres.forEach(genre =>
        this.addGenre(genres, genre)));
    return genres;
  }

  /*
    getDataFromChild2($event) {
      s.setAccessToken(this.getAccessToken());
      let user1ID = $event[0];
      this.buildUser(user1ID);

      let user2ID = $event[1];
      this.buildUser(user2ID);

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
      ));

      s.getUserPlaylists(this.user2ID).then(data => data.items.map(
        item => s.getPlaylistTracks(this.user2ID, item.id).then(result => {
          result.items.forEach(
            track => self.user2Tracks.push(track)
          );
        })
      ));
      console.log(this.user1Tracks);
      console.log(this.user2Tracks);
    }*/

  getAccessToken() {
    const hash = window.location.hash;
    return hash.match(/(.*?)=(.*?)&/)[2];
  }


  async getGenres(track) {
    let fullHref = track.track.artists[0].href;

    if (fullHref === null) {
      return [];
    }

    let realHref = fullHref.match(/(.*?)artists\/(.*)/)[2];
    let x = s.getArtist(realHref).then(artist => artist.genres);
    return x;
  }

  addGenre(genreMap, newGenre) {
    if (newGenre in genreMap) {
      genreMap[newGenre] = genreMap[newGenre] + 1;
    } else {
      // genreMap[newGenre] = 1;
    }
    return genreMap;
  }
}
