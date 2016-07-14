import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Cat } from './cat.model';
import { CatService } from './cat.service';
import { CatDetailComponent } from './cat-detail.component';
import { CatFormComponent } from './cat-form.component';

@Component({
  selector: 'herding-cats',
  templateUrl: './app.component.html',
  directives: [CatDetailComponent, CatFormComponent],
  providers: [CatService]
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
