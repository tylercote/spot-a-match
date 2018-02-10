import {Component, OnInit} from '@angular/core';
import {SpotifyService} from './_services/spotify.service';
import * as spotify from 'spotify-web-api-js';
const s = new spotify();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'app';


  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {
    this.spotifyService.getAuth();
  }
}
