import { IAngularStatic } from 'angular';
import uiRouter from '@uirouter/angularjs';
import { ng1AModule } from './ng1A/ng1A.module';
import { Ng1xRoutes } from './ng1x.routes';
import { ng2Ng1Module } from './ng2-ng1/ng2-ng1.module';

declare var angular: IAngularStatic;

export const appModule = angular.module(
  'appModule', [
    uiRouter,
    // upgradeModule.name,
    ng1AModule.name,
    ng2Ng1Module.name
  ])
  .config(($stateProvider, $urlMatcherFactoryProvider, $locationProvider) =>
    Ng1xRoutes($stateProvider, $urlMatcherFactoryProvider, $locationProvider))
  .component('exampleApp', {
    template: `<header ui-view="main-header"></header><div ui-view="main-content"></div>`
  });

// https://github.com/angular/angular/blob/master/packages/examples/upgrade/static/ts/lite-multi-shared/module.ts
// https://plnkr.co/edit/RDPZZ4?p=preview
