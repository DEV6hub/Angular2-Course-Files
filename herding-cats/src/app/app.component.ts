import { Component } from '@angular/core';

import { Cat } from './cat.model';
import { CatDetailComponent } from './cat-detail.component';

@Component({
  selector: 'herding-cats',
  templateUrl: './app.component.html',
  directives: [CatDetailComponent]
})
export class AppComponent {
  cat1 = new Cat('Matilda', 'Calico', 'Loves window sitting and snuggles');
  cat2 = new Cat('Boots', 'Tabby', 'Likes to perch in high locations');
  selectedCat = this.cat1;

  selectCat(cat: Cat) {
    this.selectedCat = cat;
  }
}
