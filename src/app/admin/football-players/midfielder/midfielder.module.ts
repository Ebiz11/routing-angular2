import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { midfielderComponent } from "./midfielder.component";
import { midfielderRouting } from "./midfielder.routing";

import { NamePipe } from "app/pipe/name.pipe";

@NgModule({
  imports: [
    CommonModule,
    midfielderRouting
  ],
  declarations: [
    midfielderComponent,
    NamePipe
  ]
})

export class midfielderModule { }
