import { NgModule } from '@angular/core';
import { Ng2BComponent } from './components/ng2-b.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [Ng2BComponent],
  entryComponents: [Ng2BComponent]
})
export class Ng2BModule {
  ngDoBootstrap() {
  }
}
