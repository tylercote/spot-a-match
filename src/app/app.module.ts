import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ProfileEntryComponent} from './profile-entry/profile-entry.component';
import {SpotifyService} from './_services/spotify.service';
import {HttpClientModule} from '@angular/common/http';
import {ComparisonComponent} from './comparison/comparison.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileEntryComponent,
    ComparisonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

