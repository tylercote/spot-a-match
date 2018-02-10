import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Profile } from './profile-entry/profile-entry.component';
import {HttpClientModule} from '@angular/common/http';
import { ComparisonComponent } from './comparison/comparison.component';
import {SpotifyService} from './_services/spotify.service';

@NgModule({
  declarations: [
    AppComponent,
    Profile,
    ComparisonComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

