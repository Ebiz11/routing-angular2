import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { footballPlayersComponent } from './football-players.component';

const routes: Routes = [
	{
		path: '',
		component: footballPlayersComponent
	}
];

export const footballPlayersRouting: ModuleWithProviders = RouterModule.forChild(routes);
