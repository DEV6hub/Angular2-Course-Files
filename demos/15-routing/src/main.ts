import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core';
import { HTTP_PROVIDERS, BaseRequestOptions, RequestOptions, Headers } from '@angular/http';

import { AppComponent, APP_ROUTER_PROVIDERS } from './app/';

class DefaultHttpRequest extends BaseRequestOptions {
  headers = new Headers({
    'Content-Type': 'application/json'
  });
}

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  provide(RequestOptions, { useClass: DefaultHttpRequest }),
  APP_ROUTER_PROVIDERS
]);
