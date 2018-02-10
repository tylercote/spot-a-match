import {Component} from '@angular/core';
import {SpotifyService} from './_services/spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private spotifyService: SpotifyService) {}

  getPlaylistData() {
    this.spotifyService.getPlaylists('1239349331');
  }
}
