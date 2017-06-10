import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { goalKeeperComponent } from './goal-keeper.component';

const routes: Routes = [
	{
		path: '',
		component: goalKeeperComponent,
		outlet: 'player'
	}
];

export const goalKeeperRouting: ModuleWithProviders = RouterModule.forChild(routes);
