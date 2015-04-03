'use strict';

module.exports = function ($scope, boardService) {

	console.log('inside boardsController');
	$scope.boards = boardService.getBoards();


	$scope.deleteData = function(boardId,index){
		console.log('inside boardsController - deleteData()');
        boardService.deleteData(boardId).$promise.then(function(){
            $scope.boards.splice(index, 1);
            console.log('Index is: ' + index);
        },function(){
            console.log('Delete failed');
        });
    };

    $scope.updateBoard = function(board) {
      boardService.setBoard(board);   //set the data in service for sharing in editboardcontroller
    }
};
