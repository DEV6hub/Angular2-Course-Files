import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { PeopleService } from './people.service';

@Component({
  template: `<router-outlet></router-outlet>`,
  providers: [PeopleService],
  directives: [ROUTER_DIRECTIVES]
})
export class PeopleComponent { }
