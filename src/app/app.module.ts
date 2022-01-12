import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { CoreModule } from './core/core.module';
import { ChallengeModule } from './challenge/challenge.module';
import { UsersModule } from './users/users.module';
import { ParticipationModule } from './participation/participation.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    LoginModule,
    ChallengeModule,
    UsersModule,
    ParticipationModule,
  ],  
  bootstrap: [AppComponent],
  
})
export class AppModule { }
