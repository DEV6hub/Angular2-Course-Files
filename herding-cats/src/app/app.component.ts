import { Component, OnInit } from '@angular/core';

import { Cat } from './cat.model';
import { CatDetailComponent } from './cat-detail.component';
import { CatService } from './cat.service';

@Component({
  selector: 'herding-cats',
  templateUrl: './app.component.html',
  directives: [CatDetailComponent],
  providers: [CatService]
})
export class AppComponent implements OnInit {
  cats: Cat[];
  selectedCat: Cat;
  favouriteCat: Cat;

  constructor(private catService: CatService) {}

  ngOnInit() {
    this.cats = this.catService.getCatList();
    this.favouriteCat = this.catService.favouriteCat;
  }

  selectCat(cat: Cat) {
    this.selectedCat = cat;
  }

  selectFavourite(cat: Cat) {
    this.favouriteCat = cat;
    this.catService.favouriteCat = cat;
  }
}
