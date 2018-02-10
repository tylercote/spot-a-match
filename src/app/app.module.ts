import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Profile } from './profile-entry/profile-entry.component';
import {HttpClientModule} from '@angular/common/http';
import {SpotifyService} from 'angular2-spotify';
import { ComparisonComponent } from './comparison/comparison.component';


@NgModule({
  declarations: [
    AppComponent,
    Profile,
    ComparisonComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
