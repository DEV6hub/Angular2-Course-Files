import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Subscription } from 'rxjs/Subscription';
import { Cat } from './cat';
import { CatService } from './cat.service';

@Component({
  selector: 'cat-form',
  template: require('./cat-form.component.html'),
  styles: [require('./cat-form.component.css')]
})
export class CatFormComponent implements OnInit, OnDestroy {
  cat: Cat;
  private paramsSubscription: Subscription;
  private catSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private catService: CatService
  ) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params
      .map(params => +params['id'])
      .subscribe(id => {
        if (id) {
          this.catSubscription = this.catService.getCat(id)
            .subscribe(cat => this.cat = cat);
        } else {
          this.cat = new Cat();
        }
      });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();

    if (this.catSubscription) {
      this.catSubscription.unsubscribe();
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
        this.router.navigate(['cats', cat.id]);
      });
  }

  removeCat() {
    this.catService.removeCat(this.cat)
      .then(() => this.router.navigate(['cats']));
  }

}
