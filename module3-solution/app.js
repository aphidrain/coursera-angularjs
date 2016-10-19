(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    restrict: 'E',
    templateUrl: 'founditems.html',
    scope: {
      list: '<foundItems',
      title: '@title',
      remove: '&onRemove'
    }
  };
  return ddo;
};

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var self = this;

  var baseTitle = "Found Items";

  self.title = baseTitle;
  self.searchTerm = "";
  self.found = null;

  self.searchMenu = function() {
      self.found = [];

      var matchedMenuItemsPromise = MenuSearchService.getMatchedMenuItems(this.searchTerm);

      matchedMenuItemsPromise.then(function (response) {
        self.found = response;
        self.title = baseTitle + " (" + self.found.length + ")";
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  self.removeFoundItem = function(itemIndex) {
    self.found.splice(itemIndex, 1);
    self.title = baseTitle + " (" + self.found.length + ")";
  }
};

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;
  var menuItemList = [];

  service.getMatchedMenuItems = function(searchTerm) {
      menuItemList = [];

      return $http({method: "GET", url: (ApiBasePath + "/menu_items.json")})
      .then(function (result) {
        if (searchTerm.length < 1) {
          return menuItemList;
        };

        // process result and only keep items that match
        var responseData = result.data.menu_items;

        for (var i=0; i<responseData.length; i++) {
          var item = responseData[i];
          var name = item.name;
          var description = item.description;

          if (IsStringInString(searchTerm, description)) {
            menuItemList.push(item);
          };
        };

        // return processed items
        return menuItemList;
      });
  };
};

function IsStringInString(searchString, searchInString) {
  if (searchInString.toLowerCase().match(searchString.toLowerCase())) {
    return true;
  }
  return false;
};

})();
