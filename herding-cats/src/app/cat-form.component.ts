import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

import { Cat } from './cat';
import { CatService } from './cat.service';

@Component({
  selector: 'cat-form',
  template: require('./cat-form.component.html')
})
export class CatFormComponent implements OnInit {
  @Input() catId: number;
  @Output() saved = new EventEmitter<Cat>();
  cat: Cat;

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.cat = this.catService.getCat(this.catId);

    if (!this.cat) {
      this.cat = new Cat();
    }
  }

  birthdayForInput(): string {
    return moment(this.cat.birthday).format('YYYY-MM-DD');
  }

  setBirthday(dateString: string) {
    this.cat.birthday = moment(dateString, 'YYYY-MM-DD').toDate();
  }

  saveCat() {
    this.catService.saveCat(this.cat)
      .then((cat) => {
        this.cat = cat;
        this.saved.emit(cat);
      });
  }

  removeCat() {
    this.catService.removeCat(this.cat)
      .then(() => {
        this.saved.emit(undefined);
      });
  }

}
