import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { adminRoutes } from "./admin.routes";

import { adminComponent } from "./admin.component";
import { footballClubComponent } from "./football-club/football-club.component";
import { footballPlayersComponent } from './football-players/football-players.component';

@NgModule({
  imports: [
    CommonModule,
    adminRoutes
  ],
  declarations: [
    footballClubComponent,
    footballPlayersComponent,
    adminComponent
  ]

})

export class adminModule { }
