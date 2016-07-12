import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { AppComponent } from './app/';

import './styles/main.scss';

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms()
]);
