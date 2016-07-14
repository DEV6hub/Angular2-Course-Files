import { RouterConfig } from '@angular/router';

import { CatsComponent } from './cats.component';
import { CatListComponent } from './cat-list.component';
import { CatDetailComponent } from './cat-detail.component';
import { CatFormComponent } from './cat-form.component';

export const catsRoutes: RouterConfig = [
  {
    path: 'cats',
    component: CatsComponent,
    children: [
      { path: 'new', component: CatFormComponent },
      { path: ':id/edit', component: CatFormComponent },
      { path: ':id', component: CatDetailComponent },
      { path: '', component: CatListComponent }
    ]
  }
];
