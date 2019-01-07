import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class Ng2Service {
  static nextId = 1;
  id = Ng2Service.nextId++;
}
