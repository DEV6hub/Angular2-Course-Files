import { Injectable } from '@angular/core';

import { Cat } from './cat.model';

@Injectable()
export class CatService {
  favouriteCat: Cat;
  private cats = [
    new Cat('Matilda', 'Calico', 'Loves window sitting and snuggles', new Date(2016, 0, 25)),
    new Cat('Boots', 'Tabby', 'Likes to perch in high locations', new Date(2013, 8, 7)),
    new Cat('Fuzzy', 'Persian', 'Thinks she is the queen of all she sees', new Date(2006, 4, 20))
  ];

  getCatList(): Cat[] {
    return this.cats;
  }
}
