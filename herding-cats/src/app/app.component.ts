import { Component } from '@angular/core';

import { Cat } from './cat';
import { CatDetailComponent } from './cat-detail.component';

@Component({
  selector: 'herding-cats',
  template: require('./app.component.html')
})
export class AppComponent {
  cat1 = new Cat('Matilda', 'Calico', 'Loves window sitting and snuggles');
  cat2 = new Cat('Boots', 'Tabby', 'Likes to perch in high locations');
  selectedCat = this.cat1;

  selectCat(cat: Cat) {
    this.selectedCat = cat;
  }
}
