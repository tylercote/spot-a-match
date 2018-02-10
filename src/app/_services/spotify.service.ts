import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SpotifyService {

  apiKey = '0067197c8931420ebf31c08c52d42a77';
  baseUrl = 'https://api.spotify.com/v1/';

  constructor(private http: HttpClient) { }

  // getPlaylists(): Observable[] {
  //   return this.http.get<[]>()
  // }
}
