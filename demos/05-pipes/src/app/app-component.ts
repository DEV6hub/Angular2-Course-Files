import {Component} from "@angular/core";

@Component({
  selector: 'dev6-app',
  template: require('./app-component.html')
})
export class AppComponent {
  title = 'Pipes';
  today = new Date();
  hello = 'Hello';
}
