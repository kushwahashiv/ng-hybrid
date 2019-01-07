import { NgModule } from '@angular/core';
import { Ng2CComponent } from './components/ng2-c.component';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2AModule } from '../ng2A/ng2-a.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    Ng2AModule,
    RouterModule.forRoot([])
  ],
  declarations: [Ng2CComponent],
  entryComponents: [Ng2CComponent]
})
export class Ng2CModule {
  ngDoBootstrap() {
  }
}
