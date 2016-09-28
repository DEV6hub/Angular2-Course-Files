import { Component } from '@angular/core';

import { Cat } from './cat';
import { CatDetailComponent } from './cat-detail.component';
import {CatService} from "./cat.service";

@Component({
  selector: 'herding-cats',
  template: require('./app.component.html')
})
export class AppComponent {
  constructor(private catService: CatService) {
  	
  }
  selectedCat: Cat;
  favouriteCat: Cat;

  selectCat(cat: Cat) {
    this.selectedCat = cat;
  }

  selectFavourite(cat: Cat) {
    this.favouriteCat = cat;
  }
}
