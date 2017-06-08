import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { adminRoutes } from "./admin.routes";

import { adminComponent } from "./admin.component";
import { footballClubComponent } from "./football-club/football-club.component";

@NgModule({
  imports: [
    CommonModule,
    adminRoutes
  ],
  declarations: [
    footballClubComponent,
    adminComponent
  ]

})

export class adminModule { }
