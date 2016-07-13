import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Cat } from './cat.model';

@Component({
  selector: 'cat-detail',
  templateUrl: './cat-detail.component.html'
})
export class CatDetailComponent {
  @Input() cat: Cat;
  @Output() isFavourite = new EventEmitter<Cat>();

  selectFavourite() {
    this.isFavourite.emit(this.cat);
  }
}
