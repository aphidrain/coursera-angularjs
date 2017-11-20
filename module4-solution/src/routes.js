(function() {
  'use strict';

  angular.module('MenuApp').config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    // home view
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/home.template.html'
      })

      // categories view
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/categories.template.html',
        controller: 'CategoriesController as cats_ctrl',
        resolve: {
          categories: ['MenuDataService', function(MenuDataService) {
            return MenuDataService.getAllCategories()
              .then(function(result) {
                return result.data;
              });
          }]
        }
      })

      // items view
      .state('items', {
        url: '/items/{itemCategory}',
        templateUrl: 'src/items.template.html',
        controller: 'ItemsController as items_ctrl',
        resolve: {
          items: ['MenuDataService', '$stateParams',
            function(MenuDataService, $stateParams) {
              return MenuDataService.getItemsForCategory($stateParams.itemCategory)
                .then(function(result) {
                  return result.data;
                });
            }]
        }
      });
  }

})();
