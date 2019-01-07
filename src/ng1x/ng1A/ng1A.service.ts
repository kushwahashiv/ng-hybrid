export function UserService($http) {
  return {
    list: function () {
      return $http.get('./../ng1x/data/data.json', {cache: true}).then(resp => resp.data);
    }
  };
}
