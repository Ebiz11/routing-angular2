import { ModuleWithProviders } from "@angular/core";
import { RouterModule} from "@angular/router";

import { canActivateGuard } from "./guard/canActivate.guard";

import { loginComponent } from "./login/login.component";
import { adminComponent } from "./admin/admin.component";
import { landingPageComponent } from "./landing-page/landing-page.component";

export const routing: ModuleWithProviders = RouterModule.forRoot ([
  {
    path: '',
    redirectTo: 'landing-page',
    pathMatch: 'full'
  },
  {
    path: 'landing-page',
    component: landingPageComponent
  },
  {
    path: 'login',
    component: loginComponent
  },
  {
    path: 'admin',
    component: adminComponent,
    canActivate: [canActivateGuard]
  }
]);
