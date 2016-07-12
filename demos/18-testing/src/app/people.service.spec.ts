import {
  addProviders,
  inject
} from '@angular/core/testing';
import { PeopleService } from './people.service';
import { Person } from './person.model';

describe('PeopleService', () => {
  let service: PeopleService;

  beforeEach(() => addProviders([PeopleService]));

  beforeEach(inject([PeopleService], (svc: PeopleService) => service = svc));

  it('should exist', () => {
    expect(service).toBeTruthy();
  });

  it('should start with an empty list of people', () => {
    expect(service.getPeople()).toEqual([]);
  });

  it('should add a new person to the list', () => {
    const person: Person = new Person('John', 'Smith');
    service.add(person);
    expect(service.getPeople().length).toEqual(1);
    expect(service.getPeople()).toContain(person);
  });
});
