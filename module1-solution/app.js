(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchMenu = "";
  $scope.lunchCheckMessage = "";

  // check the number of lunch items entered and set a message
  $scope.checkIfTooMuchLunch = function () {
    // get the number of lunch items
    var numberOfLunchItems = getNumberOfItemsInString($scope.lunchMenu);

    // if number of items less than or equal to 3
    if (numberOfLunchItems >= 1 && numberOfLunchItems <= 3) {
      $scope.lunchCheckMessage = "Enjoy!";
    // if the number of items greater than 3
    } else if (numberOfLunchItems > 3) {
      $scope.lunchCheckMessage = "Too much!";
    // if the number of items is 0 or something else
    } else {
      $scope.lunchCheckMessage = "Please enter data first";
    }
  };

  // clear the lunch item message
  $scope.clearLunchCheckMessage = function() {
    $scope.lunchCheckMessage = "";
  }
}

// count and return the number of items in a comma seperated string
// returns 0 for empty strings and does not count empty values
function getNumberOfItemsInString(itemList) {
  if (itemList.length < 1) {
    return 0;
  } else {
    var items = itemList.split(",");
    var itemCount = 0;
    for (var i = 0; i < items.length; i++) {
      // if value not empty add it to the item count
      if (items[i].trim()) {
        itemCount++;
      }
    }
    return itemCount;
  }
};

})();
