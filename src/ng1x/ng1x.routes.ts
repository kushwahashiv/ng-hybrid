export function Ng1xRoutes($stateProvider, $urlMatcherFactoryProvider, $locationProvider) {
  $stateProvider
    .state({
      name: 'root',
      abstract: true
    })
    .state({
      name: 'app',
      parent: 'root',
      abstract: true,
      views: {
        'main-header@': {
          templateUrl: './ng1x/common/header/main-header.html'
        }
      }
    });
  $urlMatcherFactoryProvider.strictMode(false);
  $locationProvider.html5Mode(true);
}
