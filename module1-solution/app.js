(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
	$scope.items = "";
	$scope.message = "";

$scope.displayMessage = function () {
	var messageToDisplay = checkIfTooMuch($scope.items);
	$scope.message = messageToDisplay;
};

  function checkIfTooMuch(stringToSplit) {
  	var output = "";
  	var arrayOfItems = stringToSplit.split(',');
  	var count = arrayOfItems.length;
  	console.log(stringToSplit);
  	console.log(arrayOfItems);
  	console.log(count);


  	if (arrayOfItems == "") {
  		output = "Please enter data first";
  	}
  	else if ( 0 < count && count < 4) {
  		output = "Enjoy!";
  	}
    else {
		output = "Too much!"
	}

	return output;
	}

};


})();