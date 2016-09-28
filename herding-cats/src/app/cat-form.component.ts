import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import * as moment from 'moment';
import { Subscription } from 'rxjs/Subscription';

import { Cat } from './cat';
import { CatService } from './cat.service';

@Component({
  selector: 'cat-form',
  template: require('./cat-form.component.html')
})
export class CatFormComponent implements OnInit, OnDestroy {
  @Input() catId: number;
  @Output() saved = new EventEmitter<Cat>();
  cat: Cat;
  private catSubscription: Subscription;

  constructor(private catService: CatService) { }

  ngOnInit() {
    this.catSubscription = this.catService.getCat(this.catId)
      .subscribe(cat => this.cat = cat);

    if (!this.cat) {
      this.cat = new Cat();
    }
  }

  ngOnDestroy() {
    this.catSubscription.unsubscribe();
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
      .then(() => this.saved.emit(undefined));
  }

}
