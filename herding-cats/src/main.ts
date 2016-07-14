import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { HTTP_PROVIDERS, BaseRequestOptions, RequestOptions, Headers } from '@angular/http';

import { AppComponent } from './app';

class DefaultHttpRequest extends BaseRequestOptions {
  headers = new Headers({
    'Content-Type': 'application/json'
  });
}

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  HTTP_PROVIDERS,
  provide(RequestOptions, { useClass: DefaultHttpRequest })
]);
