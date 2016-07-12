import { Component } from '@angular/core';

import { PeopleService } from './people.service';
import { PeopleListComponent } from './people-list.component';
import { LifecycleReporterComponent } from './lifecycle-reporter.component';

@Component({
  selector: 'dev6-app',
  template: require('./app.component.html'),
  providers: [PeopleService],
  directives: [PeopleListComponent, LifecycleReporterComponent]
})
export class AppComponent {
  title = 'Lifecycle Hooks';
  showReporter: boolean;
  num = 0;

  toggleReporter() {
    this.showReporter = !this.showReporter;
  }

  doSomething() {
    // Anything...
  }

  increment() {
    this.num++;
  }
}
