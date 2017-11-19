(function() {
  'use strict';

  angular.module('data')
    .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http'];

  function MenuDataService($http) {
    var url = 'https://davids-restaurant.herokuapp.com';

    this.getAllCategories = function() {
      return $http.get(url + '/categories.json')
        .then(function(result) {
          return result.data;
        });
    };

    this.getItemsForCategory = function(categoryShortName) {
      return $http.get(url + '/menu_items.json', {params: {'category': categoryShortName}})
        .then(function(result) {
          return result.data;
        });
    };
  }
})();
