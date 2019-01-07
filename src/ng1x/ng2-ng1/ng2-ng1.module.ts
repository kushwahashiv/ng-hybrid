import { IAngularStatic } from 'angular';
import { downgradeComponent, downgradeModule } from '@angular/upgrade/static';
import { Compiler, getPlatform, StaticProvider } from '@angular/core';
import { getRootInjector } from '../../main';
import { Ng2AModule } from '../../app/ng2A/ng2-a.module';
import { Ng2BModule } from '../../app/ng2B/ng2-b.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Ng2CModule } from '../../app/ng2C/ng2-c.module';
import { Ng2AComponent } from '../../app/ng2A/components/ng2-a.component';
import { Ng2BComponent } from '../../app/ng2B/components/ng2-b.component';
import { Ng2CComponent } from '../../app/ng2C/components/ng2-c.component';
import { Ng2Ng1Routes } from './ng2-ng1.routes';
import { Ng2A1Component } from '../../app/ng2A/components/ng2-a-1.component';

declare var angular: IAngularStatic;

const downgradedNg2AModule = downgradeModule(async (extraProviders: StaticProvider[]) => {
  const rootInjector = await getRootInjector(extraProviders);
  const moduleAFactory = await rootInjector.get(Compiler).compileModuleAsync(Ng2AModule);
  return moduleAFactory.create(rootInjector);
});

const downgradedNg2BModule = downgradeModule(async (extraProviders: StaticProvider[]) => {
  const rootInjector = await getRootInjector(extraProviders);
  const moduleBFactory = await rootInjector.get(Compiler).compileModuleAsync(Ng2BModule);
  return moduleBFactory.create(rootInjector);
});

const downgradedNg2CModule = downgradeModule((extraProviders: StaticProvider[]) =>
  (getPlatform() || platformBrowserDynamic(extraProviders)).bootstrapModule(Ng2CModule));

export const ng2Ng1Module = angular.module('ng2Ng1Module', [
  downgradedNg2AModule,
  downgradedNg2BModule,
  downgradedNg2CModule
])
  .config(($stateProvider) => Ng2Ng1Routes($stateProvider))
  .component('ng2a', {template: '<ng2-a></ng2-a>'})
  // .component('ng2a1', {template: '<ng2-a1></ng2-a1>'})
  .component('ng2b', {template: '<ng2-b></ng2-b>'})
  .component('ng2c', {template: '<ng2-c></ng2-c>'})
  .directive('ng2A', downgradeComponent({
    component: Ng2AComponent,
    downgradedModule: downgradedNg2AModule,
    propagateDigest: false
  }))
  /*.directive('ng2A1', downgradeComponent({
    component: Ng2A1Component,
    downgradedModule: downgradedNg2AModule,
    propagateDigest: false
  }))*/
  .directive('ng2B', downgradeComponent({
    component: Ng2BComponent,
    downgradedModule: downgradedNg2BModule,
    propagateDigest: false
  }))
  .directive('ng2C', downgradeComponent({
    component: Ng2CComponent,
    // Since there is more than one downgraded Angular module,
    // specify which module this component belongs to.
    downgradedModule: downgradedNg2CModule,
    propagateDigest: false
  }));
