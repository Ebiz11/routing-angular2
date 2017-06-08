import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { footballPlayersComponent } from "./football-players.component";
import { footballPlayersRouting } from "./football-players.routing";

@NgModule({
  imports: [
    CommonModule,
    footballPlayersRouting
  ],
  declarations: [
    footballPlayersComponent
  ]
})

export class footballPlayersModule { }
