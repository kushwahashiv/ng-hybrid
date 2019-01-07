import { IAngularStatic } from 'angular';
import { UserService } from './ng1A.service';
import { Ng1Routes } from './ng1A.routes';

declare var angular: IAngularStatic;

export const ng1AModule = angular.module('ng1AModule', [])
  .service('UserService', ($http) => UserService($http))
  .config(($stateProvider, $urlServiceProvider, $locationProvider) => Ng1Routes($stateProvider, $urlServiceProvider, $locationProvider))
  .component('users', {
    bindings: {users: '<'},
    controller: function () {
      this.clickHandler = () => {
        alert('something');
      };
    },
    templateUrl: './ng1x/ng1A/users.component.html'
  })
  .component('userDetail', {
    bindings: {user: '<'},
    templateUrl: './ng1x/ng1A/users-detail.component.html'
  })
.run(($http) => $http.get('./../ng1x/data/data.json', {cache: true}));
