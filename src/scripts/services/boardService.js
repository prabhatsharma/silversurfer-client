'use strict';

module.exports = ['$resource', function($resource){
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
            return error;
        });
    };

    //PUT data for updating existing record
    service.updateData = function(board){
        var data = $resource(apiUrl + board._id, {}, 
            {update: {method : 'PUT'}});
        return data.update({}, board,function(res){
            return true;
        },function(error){
            return error;
        });
    };

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
}];
