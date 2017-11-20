(function() {
  'use strict';

  angular.module('MenuApp').config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    // spa home view
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/home.template.html'
      })

      // spa categories view
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/categories.template.html',
        resolve: {
          categories: ['MenuDataService', function(MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        },
        controller: 'CategoriesController as ctrl'
      })

      // spa items view
      .state('items', {
        url: '/items/{itemCategory}',
        templateUrl: 'src/items.template.html',
        resolve: {
          items: ['MenuDataService', '$stateParams',
            function (MenuDataService, $stateParams) {
              return MenuDataService.getItemsForCategory($stateParams.itemCategory);
            }]
        },
        controller: 'ItemsController as ctrl'
      });
  }

})();
