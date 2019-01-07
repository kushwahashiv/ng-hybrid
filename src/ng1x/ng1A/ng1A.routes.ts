export function Ng1Routes($stateProvider, $urlServiceProvider, $locationProvider) {
  $urlServiceProvider.rules.otherwise({state: 'list'});

  $stateProvider.state({
    name: 'list',
    parent: 'app',
    url: '/ng1',
    views: {
      'main-content@': 'users'
    },
    resolve: {
      users: (UserService) => {
        return UserService.list();
      }
    }
  });

  $stateProvider.state({
    name: 'list.detail',
    url: '/:id',
    component: 'userDetail',
    resolve: {
      user: ($transition$, users) => {
        const id = $transition$.params().id;
        return users.find(user => +user.id === +id);
      }
    }
  });

  $locationProvider.html5Mode(true);
}
