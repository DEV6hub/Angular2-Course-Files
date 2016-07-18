import { Component, OnInit } from '@angular/core';

import { Person } from './person.model';
import { PeopleService } from './people.service';

@Component({
  selector: 'people-list',
  templateUrl: './people-list.component.html'
})
export class PeopleListComponent implements OnInit {
  people: Person[];

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.people = this.peopleService.getPeople();
  }
}
