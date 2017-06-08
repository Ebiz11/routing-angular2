import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from "./app.routes";
import { canActivateGuard } from "./guard/canActivate.guard";

import { AppComponent } from './app.component';
import { loginComponent } from './login/login.component';
import { adminComponent } from "./admin/admin.component";
import { landingPageComponent } from "./landing-page/landing-page.component";

import { footballClubComponent } from "./admin/football-club/football-club.component";

@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
    adminComponent,
    landingPageComponent,
    footballClubComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [canActivateGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
