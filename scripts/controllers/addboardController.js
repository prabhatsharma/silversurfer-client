'use strict';

module.exports = ['$scope', '$location', 'boardService', function($scope, $location, boardService) {
    
	console.log('inside addboardController');
		
	$scope.saveData = function(newBoard) {
		console.log('inside addboardController.saveData()');
        boardService.saveData(newBoard).$promise.then(function() {
            console.log('Successfully inserted ' + newBoard.location);
			//$state.state = '/';
			$location.path('/');
            //$scope.projects.splice(1,0,newProject);
        });        
        $scope.newProject = {};
    };
}];