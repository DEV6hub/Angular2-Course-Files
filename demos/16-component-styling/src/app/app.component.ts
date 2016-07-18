import { Component } from '@angular/core';

import { RedComponent } from './red.component';
import { GreenComponent } from './green.component';
import { NativeStyleComponent } from './native-style.component';
import { NoStyleComponent } from './no-style.component';

@Component({
  selector: 'dev6-app',
  templateUrl: './app.component.html',
  directives: [
    RedComponent,
    GreenComponent,
    NativeStyleComponent,
    NoStyleComponent
  ]
})
export class AppComponent {
  title = 'Component Styling';
}
