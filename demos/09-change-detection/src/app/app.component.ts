import { Component } from '@angular/core';

import { Person } from './person.model';
import { PersonDetailsComponent } from './person-details.component';
import { PersonDetailsImmutableComponent } from './person-details-immutable.component';

@Component({
  selector: 'dev6-app',
  template: require('./app.component.html'),
  directives: [PersonDetailsComponent, PersonDetailsImmutableComponent]
})
export class AppComponent {
  title = 'Change Detection';
  person = new Person('John', 'Smith');

  newFirstName: string;
  newLastName: string;

  setNewPerson() {
    const newPerson = new Person(this.newFirstName, this.newLastName);
    this.person = newPerson;
    this.newFirstName = undefined;
    this.newLastName = undefined;
  }

}
