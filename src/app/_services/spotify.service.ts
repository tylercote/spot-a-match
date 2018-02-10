import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SpotifyService {

  clientId = '0067197c8931420ebf31c08c52d42a77';
  constructor(private http: HttpClient) {}

  getAuth() {
    // this.http.get('https://accounts.spotify.com/authorize?client_id=0067197c8931420ebf31c08c52d42a77' +
    //   '&response_type=token' +
    //   '&redirect_uri=google.com' +
    //   '&scope=user-read-private')
    //   .subscribe(data => console.log(data));
  }

}
