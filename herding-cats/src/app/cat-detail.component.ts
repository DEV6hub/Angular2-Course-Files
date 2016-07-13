import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Cat } from './cat.model';
import { CatYearsPipe } from './cat-years.pipe';

@Component({
  selector: 'cat-detail',
  templateUrl: './cat-detail.component.html',
  pipes: [CatYearsPipe]
})
export class CatDetailComponent {
  @Input() cat: Cat;
  @Output() isFavourite = new EventEmitter<Cat>();

  selectFavourite() {
    this.isFavourite.emit(this.cat);
  }
}
