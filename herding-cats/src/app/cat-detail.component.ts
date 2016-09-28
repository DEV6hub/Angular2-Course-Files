import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Cat } from './cat';
import { CatYearsPipe } from './cat-years.pipe';

@Component({
  selector: 'cat-detail',
  template: require('./cat-detail.component.html')
})
export class CatDetailComponent {
  @Input() cat: Cat;
  @Output() isFavourite = new EventEmitter<Cat>();
  @Output() edit = new EventEmitter<Cat>();

  selectFavourite() {
    this.isFavourite.emit(this.cat);
  }

  editCat() {
    this.edit.emit(this.cat);
  }
}
