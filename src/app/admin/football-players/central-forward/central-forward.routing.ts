import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { centralForwardComponent } from './central-forward.component';

const routes: Routes = [
	{
		path: '',
		component: centralForwardComponent,
		outlet: 'player'
	}
];

export const centralForwardRouting: ModuleWithProviders = RouterModule.forChild(routes);
