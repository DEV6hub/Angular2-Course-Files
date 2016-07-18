import { Component } from '@angular/core';

import { Person } from './person.model';
import { PersonDetailsComponent } from './person-details.component';
import { PersonFormComponent } from './person-form.component';

@Component({
  selector: 'dev6-app',
  templateUrl: './app.component.html',
  directives: [PersonDetailsComponent, PersonFormComponent]
})
export class AppComponent {
  title = 'Forms & Validation';
  person: Person;

  personCreated(person: Person) {
    this.person = person;
  }
}
