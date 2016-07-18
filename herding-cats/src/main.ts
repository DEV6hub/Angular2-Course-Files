import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide, enableProdMode } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { HTTP_PROVIDERS, BaseRequestOptions, RequestOptions, Headers } from '@angular/http';

import { AppComponent, APP_ROUTER_PROVIDERS } from './app';

import './styles/main.scss';

class DefaultHttpRequest extends BaseRequestOptions {
  headers = new Headers({
    'Content-Type': 'application/json'
  });
}

if (ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  HTTP_PROVIDERS,
  provide(RequestOptions, { useClass: DefaultHttpRequest }),
  APP_ROUTER_PROVIDERS
]);
