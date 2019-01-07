import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Ng2AModule } from './ng2A/ng2-a.module';
import { UIRouterUpgradeModule } from '@uirouter/angular-hybrid';
import { UIRouterModule } from '@uirouter/angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2AModule,
    // UIRouterUpgradeModule,
    // UIRouterModule
  ],
  providers: [],
  entryComponents: [AppComponent]
  // bootstrap: [AppComponent]
})
export class AppModule {
  ngDoBootstrap() {
  }
}
