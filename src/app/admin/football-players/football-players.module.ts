import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { footballPlayersComponent } from "./football-players.component";
import { footballPlayersRoutes } from "./football-players.routes";

@NgModule({
  imports: [
    CommonModule,
    footballPlayersRoutes
  ],
  declarations: [
    footballPlayersComponent
  ]
})

export class footballPlayersModule { }
