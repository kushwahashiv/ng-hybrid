import { Ng2Service } from '../services/ng2.service';
import { Component } from '@angular/core';

@Component({
  selector: 'ng2A1',
  template: `
    <section>
      <div class="myColor">Component A1 (Service ID: {{ service.id }})</div>
    </section>
    <footer><strong>Note:</strong> Angular 2 component via angular 1</footer>`,
  styles: [`
    .myColor {
      margin: 10px;
      color: darkorange;
    }
  `]
})
export class Ng2A1Component {
  constructor(public service: Ng2Service) {
  }
}
