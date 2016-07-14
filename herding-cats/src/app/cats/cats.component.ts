import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { CatService } from './cat.service';

@Component({
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES],
  providers: [CatService]
})
export class CatsComponent {}
