import { Component } from '@angular/core';

import { HoverHighlightDirective } from './hover-highlight.directive';
import { UnlessDirective } from './unless.directive';

@Component({
  selector: 'dev6-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Custom Directives';
  hideMessage = false;

  toggleMessage() {
    this.hideMessage = !this.hideMessage;
  }
}
