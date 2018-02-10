import {Component} from '@angular/core';
import {SpotifyService} from 'angular2-spotify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    SpotifyService,
    {
      provide: 'SpotifyConfig',
      useValue: {
        clientId: '0067197c8931420ebf31c08c52d42a77',
        redirectUri: 'localhost:8888',
        scope: 'user-read-private',
        // If you already have an auth token
        // authToken: '<AUTH_TOKEN>'
      }
    }
  ]
})

export class AppComponent {
  title = 'app';

  constructor(private spotifyService: SpotifyService) {}

  getPlaylistData() {
    this.spotifyService.login();
  }
}
