import { PeopleComponent } from './people.component';
import { PeopleListComponent } from './people-list.component';
import { PersonDetailsComponent } from './person-details.component';
import {Routes} from "@angular/router";

export const peopleRoutes: Routes = [
  {
    path: 'people',
    component: PeopleComponent,
    children: [
      { path: ':id', component: PersonDetailsComponent },
      { path: '', component: PeopleListComponent }
    ]
  }
];
