import { Component } from '@angular/core';
import { CatService } from './cat.service';

@Component({
  template: '<router-outlet></router-outlet>',
  providers: [CatService]
})
export class CatsComponent {}
