import { provideRouter, RouterConfig } from '@angular/router';

import { catsRoutes } from './cats';

const routes: RouterConfig = [
  ...catsRoutes,
  { path: '', redirectTo: 'cats', pathMatch: 'full' }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
