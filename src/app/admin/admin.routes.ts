import { Routes } from "@angular/router";

import { adminComponent } from "./admin.component";
import { footballPlayersComponent } from "./football-players/football-players.component";
import { footballClubComponent } from "./football-club/football-club.component";

export const adminRoutes: Routes = [
  {
    path: 'admin',
    component: adminComponent,
    children: [
      {
        path: '',
        redirectTo: 'club',
        pathMatch: 'full'
      },
      {
        path: 'club',
        component: footballClubComponent
      },
      {
        path: 'players',
        loadChildren: './football-players/football-players.module#footballPlayersModule'
      }
    ]
  }
]
