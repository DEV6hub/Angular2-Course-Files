import { Component } from '@angular/core';

import { Person } from './person.model';
import { PeopleService } from './people.service';

@Component({
  selector: 'people-list',
  templateUrl: './people-list.component.html'
})
export class PeopleListComponent {
  people: Person[];

  constructor(private peopleService: PeopleService) { }
}
