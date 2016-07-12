import { Component, ViewChild } from '@angular/core';

import { InsideOutsideComponent } from './inside-outside.component';
import { Person } from './person.model';
import { PersonDetailsComponent } from './person-details.component';

@Component({
  selector: 'dev6-app',
  template: require('./app.component.html'),
  directives: [InsideOutsideComponent, PersonDetailsComponent]
})
export class AppComponent {
  title = 'Components';
  john = new Person('John', 'Smith');
  jane = new Person('Jane', 'Doe');
  highFiveCount = 0;
  recentHighFive: string;

  @ViewChild(PersonDetailsComponent) personDetail: PersonDetailsComponent;

  recieveHighFive(message: string) {
    this.recentHighFive = message;
    this.highFiveCount++;
  }

  remoteHighFive() {
    this.personDetail.giveHighFive();
  }
}
