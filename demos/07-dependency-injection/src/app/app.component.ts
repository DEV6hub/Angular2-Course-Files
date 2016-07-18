import { Component } from '@angular/core';

import { PeopleService } from './people.service';
import { PeopleListComponent } from './people-list.component';

@Component({
  selector: 'dev6-app',
  templateUrl: './app.component.html',
  providers: [PeopleService],
  directives: [PeopleListComponent]
})
export class AppComponent {
  title = 'Dependency Injection';

  constructor(private peopleService: PeopleService) { }
}
