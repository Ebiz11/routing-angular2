import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from "./app.routes";

import { AppComponent } from './app.component';
import { loginComponent } from './login/login.component';
import { adminComponent } from "./admin/admin.component";
import { landingPageComponent } from "./landing-page/landing-page.component";

@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
    adminComponent,
    landingPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
