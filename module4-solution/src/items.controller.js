(function() {
  'use strict';

  angular.module('MenuApp')
    .controller("ItemsController", ItemsController);

  ItemsController.$inject = ['items'];

  function ItemsController(items) {
    this.menu_items = items.menu_items;
    this.category_name = items.category.name;
    this.special_instructions = items.category.special_instructions;
  }
})();
