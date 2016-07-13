import { Component } from '@angular/core';

import { Cat } from './cat.model';
import { CatDetailComponent } from './cat-detail.component';

@Component({
  selector: 'herding-cats',
  templateUrl: './app.component.html',
  directives: [CatDetailComponent]
})
export class AppComponent {
  cats = [
    new Cat('Matilda', 'Calico', 'Loves window sitting and snuggles', new Date(2016, 0, 25)),
    new Cat('Boots', 'Tabby', 'Likes to perch in high locations', new Date(2013, 8, 7)),
    new Cat('Fuzzy', 'Persian', 'Thinks she is the queen of all she sees', new Date(2006, 4, 20))
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
