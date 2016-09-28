import { Component } from '@angular/core';

import { Cat } from './cat';
import { CatDetailComponent } from './cat-detail.component';

@Component({
  selector: 'herding-cats',
  template: require('./app.component.html')
})
export class AppComponent {
  cats = [
    new Cat('Matilda', 'Calico', 'Loves window sitting and snuggles'),
    new Cat('Boots', 'Tabby', 'Likes to perch in high locations'),
    new Cat('Fuzzy', 'Persian', 'Thinks she is the queen of all she sees')
  ];
  selectedCat: Cat;
  favouriteCat: Cat;

  selectCat(cat: Cat) {
    this.selectedCat = cat;
  }

  selectFavourite(cat: Cat) {
    this.favouriteCat = cat;
  }
}
