import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileService} from './profile.service';
import { ProfileComponent } from './profile/profile.component'

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
