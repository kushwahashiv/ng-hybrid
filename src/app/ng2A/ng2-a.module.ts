import { NgModule } from '@angular/core';
import { Ng2AComponent } from './components/ng2-a.component';
import { CommonModule } from '@angular/common';
import { Ng2ARoutingModule } from './ng2-a-routing.module';
import { Ng2A1Component } from './components/ng2-a-1.component';

@NgModule({
  imports: [
    CommonModule,
    Ng2ARoutingModule
  ],
  declarations: [
    Ng2AComponent,
    Ng2A1Component
  ]
  /*entryComponents: [
    Ng2AComponent,
    Ng2A1Component
  ]*/
})
export class Ng2AModule {
  ngDoBootstrap() {
  }
}
