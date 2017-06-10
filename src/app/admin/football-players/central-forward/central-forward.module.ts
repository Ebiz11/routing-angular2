import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { centralForwardComponent } from "./central-forward.component";
import { centralForwardRouting } from "./central-forward.routing";

@NgModule({
  imports: [
    CommonModule,
    centralForwardRouting
  ],
  declarations: [
    centralForwardComponent
  ]
})

export class centralForwardModule { }
