import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { goalKeeperComponent } from "./goal-keeper.component";
import { goalKeeperRouting } from "./goal-keeper.routing";

@NgModule({
  imports: [
    CommonModule,
    goalKeeperRouting
  ],
  declarations: [
    goalKeeperComponent
  ]
})

export class goalKeeperModule { }
