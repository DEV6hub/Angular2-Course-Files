import { provideRouter, RouterConfig } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { peopleRoutes } from './people';

const routes: RouterConfig = [
  { path: 'dashboard', component: DashboardComponent },
  ...peopleRoutes,
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
