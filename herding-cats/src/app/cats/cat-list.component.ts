import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Cat } from './cat.model';
import { CatService } from './cat.service';

@Component({
  selector: 'cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss']
})
export class CatListComponent implements OnInit {
  favouriteCat: Cat;
  cats: Observable<Cat[]>;

  constructor(
    private router: Router,
    private catService: CatService
  ) { }

  ngOnInit(): void {
    this.cats = this.catService.getCatList();
    this.favouriteCat = this.catService.favouriteCat;
  }

  selectCat(cat: Cat) {
    this.router.navigate(['cats', cat.id]);
  }

  addCat() {
    this.router.navigate(['cats', 'new']);
  }

}
