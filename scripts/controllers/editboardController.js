'use strict';

module.exports = ['$scope', '$location', 'boardService', function($scope, $location, boardService) {

	console.log('inside editboardController');

	$scope.newBoard = boardService.getBoard();  //pick the data shared by boardsController

	$scope.updateData = function(existingBoard) {

		console.log('inside editboardController.updateData()');

		boardService.updateData(existingBoard).$promise.then(function(){
			console.log('Data updated successfully');
			$location.path('/');
		}, function(){
			console.log('Failed to updated data');
		});

		$scope.newBoard = {};
		console.log('Exiting editboardController.updateData()');
    };
}];
