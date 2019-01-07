import { Component } from '@angular/core';

@Component({
  selector: 'ng2A',
  template: `
    <p>Ng2a Component</p>
    <router-outlet></router-outlet>

    <p *ngFor="let type of taskListType">
      <span>{{type[0]}} => {{type[1]}}</span>
    </p>

    <!-- O/P of above for loop
      DROP_STAGING_TABLE => Drop Staging Table
      DELETE_STAGING_RECORDS => Delete Records
      DELETE_ENTITY_TEMPLATE => Delete Data Model
      REPROCESS_SEARCH_RESULT => Reprocess Data
      INSTALL_APP => Install App
      DEPLOY_APP => Deploy App
      AI_PROCESS => AI Process
      EXPORT_SEARCH_RESULT => Export Search Result
      -->
  `
})
export class Ng2AComponent {
  taskListType: Array<[string, string]> = [];

  constructor() {
    this.taskListType = [
      ['DROP_STAGING_TABLE', 'Drop Staging Table'],
      ['DELETE_STAGING_RECORDS', 'Delete Records'],
      ['DELETE_ENTITY_TEMPLATE', 'Delete Data Model'],
      ['REPROCESS_SEARCH_RESULT', 'Reprocess Data'],
      ['INSTALL_APP', 'Install App'],
      ['DEPLOY_APP', 'Deploy App'],
      ['AI_PROCESS', 'AI Process'],
      ['EXPORT_SEARCH_RESULT', 'Export Search Result']
    ];
  }
}
