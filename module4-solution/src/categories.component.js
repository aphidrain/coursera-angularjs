(function() {
  'use strict';

  angular.module('data')
    .component('categories', {
      template_url: 'src/categories.template.html',
      bindings: {
        categories: '<'
      }
    });
})();
