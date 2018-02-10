import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ProfileEntryComponent} from './profile-entry/profile-entry.component';
import {HttpClientModule} from '@angular/common/http';
import {ComparisonComponent} from './comparison/comparison.component';
import {SpotifyService} from './_services/spotify.service';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    ProfileEntryComponent,
    ComparisonComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

