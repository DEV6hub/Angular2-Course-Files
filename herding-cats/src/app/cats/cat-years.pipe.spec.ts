import {
  addProviders,
  inject
} from '@angular/core/testing';
import { CatYearsPipe } from './cat-years.pipe';

describe('PeopleService', () => {
  let pipeFn: (input: Date) => number;

  beforeEach(() => addProviders([CatYearsPipe]));

  beforeEach(inject([CatYearsPipe], (pipe: CatYearsPipe) => pipeFn = pipe.transform));

  it('should exist', () => {
    expect(pipeFn).toBeTruthy();
  });

  it('should take a Date and return a number', () => {
    expect(pipeFn(new Date())).toBeNumber();
  });
});
