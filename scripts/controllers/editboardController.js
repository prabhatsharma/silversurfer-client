'use strict';

module.exports = function($scope, boardService) {

	console.log('inside editboardController');

	$scope.newBoard = boardService.getBoard();  //pick the data shared by boardsController

	$scope.updateData = function(existingBoard) {

		console.log('inside editboardController.updateData()');

		boardService.updateData(existingBoard).success(function(resp){
			console.log('Data updated successfully');
			window.location = '#/'
		}).error(function(resp){
			console.log('Failed to updated data');
		});

		$scope.newBoard = {};
		console.log('Exiting editboardController.updateData()');
    };
};
