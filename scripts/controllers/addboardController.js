'use strict';

module.exports = function($scope, boardService) {
    
	console.log('inside addboardController');
		
	$scope.saveData = function(newBoard) {
		console.log('inside addboardController.saveData()');
        boardService.saveData(newBoard).$promise.then(function() {
            console.log('Successfully inserted ' + newBoard.location);
			//$state.state = '/';
			window.location = '#/';
            //$scope.projects.splice(1,0,newProject);
        });        
        $scope.newProject = {};
    };
};