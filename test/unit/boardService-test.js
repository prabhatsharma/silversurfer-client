'use strict';

describe('boardService Tests', function(){

    var mockResource;

    var board = [{
        _id: "551e65fbd8bf67ac15613fd2",
        location: "magarpatta",
        landmark: "Destination Center",
        pincode: "411028",
        city: "Pune",
        state: "Maharashtra",
        height: 3,
        width: 6,
        heightfromground: 10,
        __v: 0
    }];


    var boardService;

    beforeEach(angular.mock.module('silversurfer'));

    beforeEach(function(){
        mockResource = sinon.stub({getBoardbyId : function(id){ return board; }});
        angular.mock.module(function($provide){
            $provide.value('$http', mockResource);
        })
    });



    beforeEach(angular.mock.inject(function(_boardService_){
        boardService = _boardService_;
    }));

    describe('getBoardbyId', function(){
        it('gets a board', function(){
            expect(true).to.equal(true);
            /*boardService.getBoardbyId('551e65fbd8bf67ac15613fd2').success(function(data){
                expect(data.length).to.equal(board.length);
            });*/
            expect(boardService.getBoardbyId('551e65fbd8bf67ac15613fd2').length).to.equal(board.length);
        });
    });

/*    beforeEach(function(){
        angular.mock.module(function($provide){
            $provide.value('boardService', boardService);
            $provide.value('getBoardById', boardService.getBoardById);
        });
    });*/

/*    describe('getBoardById() function', function(){
        it('should call REST API to get the details',inject(function(getBoardById){
            expect(boardService.getBoardbyId('551e65fbd8bf67ac15613fd2')).to.equals(board);
        }));
    });*/

});