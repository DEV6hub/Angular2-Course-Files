import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

import { Person } from './person.model';

@Component({
  selector: 'person-form',
  template: require('./person-form.component.html')
})
export class PersonFormComponent {
  @Output() submitted = new EventEmitter<Person>();
  firstName: string;
  lastName: string;
  gender: 'male' | 'female';
  age: number;
  active = true;

  submitForm( form: NgForm ) {
    let person = new Person(this.firstName, this.lastName);
    person.gender = this.gender;
    person.age = this.age;

    this.submitted.emit(person);
    this.resetForm(form);
  }

  isInvalid(input: NgModel, form: NgForm): boolean {
    return !input.valid && (input.touched || form.submitted);
  }

  private resetForm( form: NgForm ) {
    this.firstName = undefined;
    this.lastName = undefined;
    this.gender = undefined;
    this.age = undefined;

    form.reset();
  }
}
