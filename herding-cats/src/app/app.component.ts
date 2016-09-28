import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Cat } from './cat';
import { CatDetailComponent } from './cat-detail.component';
import {CatService} from "./cat.service";

@Component({
  selector: 'herding-cats',
  template: require('./app.component.html')
})
export class AppComponent implements OnInit, OnDestroy {
  cats: Cat[];
  selectedCat: Cat;
  favouriteCat: Cat;
  showForm: boolean;
  private catsSubscription: Subscription;

  constructor(private catService: CatService) {}

  ngOnInit() {
    this.getCats();
    this.favouriteCat = this.catService.favouriteCat;
  }

  ngOnDestroy() {
    this.catsSubscription.unsubscribe();
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
    this.catsSubscription = this.catService.getCatList()
      .subscribe(cats => this.cats = cats);
  }
}
