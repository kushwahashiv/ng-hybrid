import { enableProdMode, Injector, NgZone, StaticProvider } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { appModule } from './ng1x/ng1x';
import { IAngularStatic } from 'angular';
import { UIRouter, UrlService } from '@uirouter/core';

declare var angular: IAngularStatic;

if (environment.production) {
  enableProdMode();
}

// const bootstrap = platformBrowserDynamic().bootstrapModule(AppModule);
// bootstrap.catch(err => console.error(err));

let rootInjectorPromise: Promise<Injector> | null = null;

export const getRootInjector = (extraProviders: StaticProvider[]) => {
  if (!rootInjectorPromise) {
    rootInjectorPromise = platformBrowserDynamic(extraProviders)
      .bootstrapModule(AppModule)
      .then(moduleRef => {
        /*const urlService: UrlService = moduleRef.injector.get(UIRouter).urlService;
        moduleRef.injector.get<NgZone>(NgZone).run(() => {
          urlService.listen();
          urlService.sync();
        });*/

        // const upgrade = (<any>moduleRef.instance).upgrade;
        // setUpLocationSync(upgrade);
        return moduleRef.injector;
      });
  }
  return rootInjectorPromise;
};

angular.bootstrap(document.body, [appModule.name]);
