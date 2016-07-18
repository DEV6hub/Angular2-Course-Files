import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'native-style',
  template: `<h3>Native Style Component</h3>`,
  encapsulation: ViewEncapsulation.Native,
  styleUrls: ['./native-style.component.scss']
})
export class NativeStyleComponent {}
