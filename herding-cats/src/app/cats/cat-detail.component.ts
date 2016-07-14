import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, ROUTER_DIRECTIVES } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Cat } from './cat.model';
import { CatYearsPipe } from './cat-years.pipe';
import { CatService } from './cat.service';

@Component({
  selector: 'cat-detail',
  templateUrl: './cat-detail.component.html',
  pipes: [CatYearsPipe],
  directives: [ROUTER_DIRECTIVES]
})
export class CatDetailComponent implements OnInit, OnDestroy {
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
        this.catSubscription = this.catService.getCat(id)
          .subscribe(
          cat => this.cat = cat,
          error => console.error(error.message)
          );
      });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
    this.catSubscription.unsubscribe();
  }

  isFavourite(): boolean {
    if (this.cat && this.catService.favouriteCat) {
      return this.cat.id === this.catService.favouriteCat.id;
    } else {
      return false;
    }
  }

  selectFavourite() {
    this.catService.favouriteCat = this.cat;
  }

  editCat() {
    this.router.navigate(['cats', this.cat.id, 'edit']);
  }
}
