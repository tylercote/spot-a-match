import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../_services/spotify.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile-entry.component.html',
  styleUrls: ['./profile-entry.component.css']
})
export class ProfileEntryComponent implements OnInit {

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }
}
