(function() {
  'use strict';

  angular.module('data')
    .component('items', {
      template_url: 'src/items.template.html',
      bindings: {
        items: '<'
      }
    });
})();
