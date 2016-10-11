(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var self = this;

  self.toBuyList = ShoppingListCheckOffService.getToBuyList();

  self.buyItem = function(itemIndex) {
    ShoppingListCheckOffService.addItemToBoughtList(itemIndex);
    ShoppingListCheckOffService.removeItemToBuyList(itemIndex);
  }
};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var self = this;

  self.alreadyBoughtList = ShoppingListCheckOffService.getAlreadyBoughtList();

};

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyList = GetInitialListData();
  var alreadyBoughtList = [];

  service.addItemToBoughtList = function(itemIndex) {
    var item = toBuyList[itemIndex];
    alreadyBoughtList.push(item);
  };

  service.removeItemToBuyList = function(itemIndex) {
    toBuyList.splice(itemIndex, 1);
  };

  service.getToBuyList = function() {
    return toBuyList;
  };

  service.getAlreadyBoughtList = function() {
    return alreadyBoughtList;
  };
};

function GetInitialListData() {
  var list = [{ name: "cookies", quantity: 12 },
              { name: "cakes", quantity: 2 },
              { name: "muffins", quantity: 5 },
              { name: "puddings", quantity: 5 },
              { name: "candies", quantity: 40 }];

  return list;
}
})();
