# protractor-typescript-template
Template for [TypeScript](https://www.typescriptlang.org/) projects that uses [Protractor](http://www.protractortest.org/#/).

## Project Features
* Written in Typescript, compiled to ES5 Javascript.
* Project initially setup with Protractor version 5.4.2.
* Includes Jasmine extras: Jasmine Matchers + Jasmine Spec Reporter
* Includes Reporting capabilities: Allure Reports
* Makes use of page objects
* Makes use of logging with winston

## Setup:
* Install [Node](http://nodejs.org) (v6.x.x or later)
* Follow setup steps described [here](http://www.protractortest.org/#/tutorial#setup)
* `npm install` to install the project dependencies
* In a separate command line window, run `webdriver-manager start` and keep it running.

## Run E2E tests:
* `npm run test` or `npm run e2e` - Run end to end tests. Defaults to using Chrome browser.
* `tsc` then `protractor build/protractor.conf.js --params.baseUrl=http://localhost`.

Feel free to modify and use it for your own purposes with no restrictions.
Based on Protractor team's [Typescript Protractor Project Example](https://github.com/chai-jay/protractor-typescript-example/)