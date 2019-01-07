import { Component } from '@angular/core';
import { Ng2Service } from '../../ng2A/services/ng2.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ng2B',
  template: `
    <section>
      <div class="myColor">Component B (Service ID: {{ service.id }})</div>
      <button (click)="goTong2A()">Click 2 invoke [routerlink] Route</button>
    </section>
    <footer><strong>Note:</strong> Angular 2 component via angular 1</footer>`,
  styles: [`
    .myColor {
      margin: 10px;
      color: green;
    }
  `]
})
export class Ng2BComponent {
  constructor(public service: Ng2Service,
              private router: Router) {
  }

  goTong2A() {
    this.router.navigateByUrl('/ng2a');
  }
}
