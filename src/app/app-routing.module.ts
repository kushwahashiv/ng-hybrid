import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ng2ARoutes } from './ng2A/ng2-a-routing.module';

const routes: Routes = [
  ...ng2ARoutes
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
