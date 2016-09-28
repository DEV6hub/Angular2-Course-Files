import {Component, OnInit} from "@angular/core";
import {Cat} from "./cat";
import {CatService} from "./cat.service";

@Component({
  selector: 'herding-cats',
  template: require('./app.component.html')
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
