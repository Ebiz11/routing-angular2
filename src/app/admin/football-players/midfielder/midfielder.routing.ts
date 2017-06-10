import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { midfielderComponent } from './midfielder.component';

const routes: Routes = [
	{
		path: '',
		component: midfielderComponent,
		outlet: 'player'
	}
];

export const midfielderRouting: ModuleWithProviders = RouterModule.forChild(routes);
