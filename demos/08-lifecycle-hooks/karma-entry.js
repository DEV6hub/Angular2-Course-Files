// Webpack entry point for all tests and required dependencies

Error.stackTraceLimit = Infinity;

// Require test polyfills
require('core-js');
require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/jasmine-patch');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');
require('zone.js/dist/sync-test');
require('rxjs');


// Setup Angular for Testing

var testing = require('@angular/core/testing');
var browser = require('@angular/platform-browser-dynamic/testing');

testing.setBaseTestProviders(
  browser.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
  browser.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
)


// require all modules ending in ".spec.ts" from the
// current directory and all subdirectories
var testsContext = require.context('.', true, /\.spec\.ts$/);
testsContext.keys().forEach(testsContext);
