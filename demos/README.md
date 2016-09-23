# Angular 2 Seed
A seed project for [Angular 2](https://angular.io) using [WebPack](https://webpack.github.io), [TypeScript](http://www.typescriptlang.org), and [SASS](http://sass-lang.com).

## Seed Includes
- Angular 2 packages
- SASS Compilation for Global Styles
- SASS Compilation for Component Styles
- SASS Lint
- TypeScript Compilation
- TSLint
- [Codelyzer](https://github.com/mgechev/codelyzer)
- Typings
- Image Minification
- Global environment variables injected from the contents of the `json` files in `config/`
- Cache busting hashes on all required assets
- Unit testing with Karma and Jasmine
- [Extended Jasmine Matchers](https://github.com/JamieMason/karma-jasmine-matchers)
- End-to-end testing with Protractor and Jasmine

## NPM Scripts
- `npm start` or `npm run server`: Start a local development server based on [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html)
- `npm run build`: Create a production build in `dist/`
- `npm test`: Complete a single run of any `*.spec.ts` unit tests
- `npm test:watch`: Run your unit tests in watch mode
- `npm run webdriver:start`: Will update and run the Selenium Server for E2E testing
- `npm run e2e`: Complete a single run of any `*.e2e.ts` end-to-end tests.

## NPM Packages
When adding a new NPM package to the project, add an import statement for it in either `src/polyfills.ts` or `src/vendor.ts` as appropriate. This will ensure that WebPack will split out polyfills and vendor packages into their own bundles. Also be sure that you add the TypeScript definitions using [typings](https://github.com/typings/typings).

## Public Folder
The `public/` folder will be copied as is during the build process. Unless the asset has been required in the code, which will put it through WebPack's loader pipeline, it will not be transformed in any way (cache busting hash, minification, etc.).

## E2E Tests
In order to run the end-to-end tests, you need to complete the following steps:
- Have your development server running with `npm start`
- Have the Selenium Server running with `npm run webdriver:start`
- Run your test suite with `npm run e2e`