import { Component } from '@angular/core';

import { PigLatinPipe } from './pig-latin.pipe';

@Component({
  selector: 'dev6-app',
  templateUrl: './app.component.html',
  pipes: [PigLatinPipe]
})
export class AppComponent {
  title = 'Pipes';
  today = new Date();
  hello = 'Hello';
}
