import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Cat } from './cat';
import { CatDetailComponent } from './cat-detail.component';
import {CatService} from "./cat.service";

@Component({
  selector: 'herding-cats',
  template: require('./app.component.html')
})
export class AppComponent implements OnInit {
  cats: Observable<Cat[]>;
  selectedCat: Cat;
  favouriteCat: Cat;
  showForm: boolean;

  constructor(private catService: CatService) {}

  ngOnInit() {
    this.getCats();
    this.favouriteCat = this.catService.favouriteCat;
  }

  selectCat(cat: Cat) {
    this.selectedCat = cat;
  }

  selectFavourite(cat: Cat) {
    this.favouriteCat = cat;
    this.catService.favouriteCat = cat;
  }

  addCat() {
    this.selectedCat = undefined;
    this.showForm = true;
  }

  editCat() {
    this.showForm = true;
  }

  finishedEditing(cat: Cat) {
    this.selectedCat = cat;
    this.showForm = false;
    this.getCats();
  }

  private getCats() {
    this.cats = this.catService.getCatList();
  }
}
