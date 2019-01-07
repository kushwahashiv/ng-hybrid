import { Ng2Service } from '../../ng2A/services/ng2.service';
import { Component } from '@angular/core';

@Component({
  selector: 'ng2C',
  template: `
    <section>
      <div class="myColor">Component C (Service ID: {{ service.id }})</div>
    </section>
    <footer><strong>Note:</strong> Angular 2 component via angular 1</footer>
  `,
  styles: [`
    .myColor {
      margin: 10px;
      color: red
    }
  `]
})
export class Ng2CComponent {
  constructor(public service: Ng2Service) {
  }
}
