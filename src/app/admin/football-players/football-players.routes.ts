import { Routes } from '@angular/router';

import { footballPlayersComponent } from './football-players.component';

export const footballPlayersRoutes: Routes = [
	{
		path: 'players',
		component: footballPlayersComponent,
		children: [
      {
        path: '',
        redirectTo: 'midfielder',
        pathMatch: 'full'
      },
			{
				path: 'central-forward',
				loadChildren: './central-forward/central-forward.module#centralForwardModule',
			},
			{
				path: 'midfielder',
				loadChildren: './midfielder/midfielder.module#midfielderModule',
			},
			{
				path: 'goal-keeper',
				loadChildren: './goal-keeper/goal-keeper.module#goalKeeperModule',
			}
		]
	}
];
