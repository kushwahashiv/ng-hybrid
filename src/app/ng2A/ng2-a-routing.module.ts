import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ng2AComponent } from './components/ng2-a.component';
import { Ng2A1Component } from './components/ng2-a-1.component';

export const ng2ARoutes: Routes = [
  { path: 'ng2a',
    component: Ng2AComponent,
    children: [
      { path: '', component: Ng2A1Component}
    ]},

];

@NgModule({
  imports: [
    RouterModule.forChild(ng2ARoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class Ng2ARoutingModule {
}
