'use strict';

module.exports = function($resource, $http){
    var service = {};
	var apiUrl = 'http://localhost:3000/api/boards/';

    //GET all existing records from API
	service.getBoards = function(){
        var boards = $resource(apiUrl);
        return boards.query();
    };

	//GET a single record using id
	service.getBoardbyId = function(id){
        var boards = $resource(apiUrl + id);
        return boards.query();
    };

    //POST data for saving new records
	service.saveData = function(board){
        var data = $resource(apiUrl);
        return data.save({},board,function(res){
            return true;
        },function(error){
            console.log(error);
        });
    };

    //PUT data for updating existing record
	service.updateData = function(board){
        var data = $http.put(apiUrl + board._id, board);
        return data;
    }

    //DELETE existing record
	service.deleteData = function(boardid){
        var data = $resource(apiUrl + boardid);
        return data.delete();
    };


    //Setter & getter functions for sharing current board data between boardController and editController
    service.setBoard = function(board) {
      service.board = board;
        return 0;
    }

    service.getBoard = function() {
      return service.board;
    }

    return service;
};
