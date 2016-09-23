import {Component} from "@angular/core";
import {Person} from "./person.model";

@Component({
  selector: 'dev6-app',
  templateUrl: './app-component.html'
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
