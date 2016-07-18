import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'dev6-app',
  templateUrl: './app.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
  title = 'Routing';
}
