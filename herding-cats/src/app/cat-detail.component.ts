import { Component, Input } from '@angular/core';

import { Cat } from './cat.model';

@Component({
  selector: 'cat-detail',
  templateUrl: './cat-detail.component.html'
})
export class CatDetailComponent {
  @Input() cat: Cat;
}
