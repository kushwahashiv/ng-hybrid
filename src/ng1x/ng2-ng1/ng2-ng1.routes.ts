export function Ng2Ng1Routes($stateProvider) {
  $stateProvider.state({
    name: 'ng2ang1a',
    parent: 'app',
    url: '/ng2a-ng1a',
    views: {
      'main-content@': 'ng2a'
    }
  });
  /*$stateProvider.state({
    name: 'ng2ang1a1',
    parent: 'app',
    url: '/ng2a1-ng1a1',
    views: {
      'main-content@': 'ng2a1'
    }
  });*/
  $stateProvider.state({
    name: 'ng2bng1b',
    parent: 'app',
    url: '/ng2b-ng1b',
    views: {
      'main-content@': 'ng2b'
    }
  });
  $stateProvider.state({
    name: 'ng2cng1c',
    parent: 'app',
    url: '/ng2c-ng1c',
    views: {
      'main-content@': 'ng2c'
    }
  });

  $stateProvider.state({
    name: 'ng2a',
    parent: 'app',
    url: '/ng2a',
    views: {
      'main-content@': {
        template: ''
      }
    }
  });
}
