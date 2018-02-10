import {Component, OnInit} from '@angular/core';
import * as Spotify from 'spotify-web-api-js';
const s = new Spotify();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'app';

  constructor() {}

  ngOnInit() {
  }
 }
