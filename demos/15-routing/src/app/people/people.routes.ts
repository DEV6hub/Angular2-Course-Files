import { RouterConfig } from '@angular/router';

import { PeopleComponent } from './people.component';
import { PeopleListComponent } from './people-list.component';
import { PersonDetailsComponent } from './person-details.component';

export const peopleRoutes: RouterConfig = [
  {
    path: 'people',
    component: PeopleComponent,
    children: [
      { path: ':id', component: PersonDetailsComponent },
      { path: '', component: PeopleListComponent }
    ]
  }
];
