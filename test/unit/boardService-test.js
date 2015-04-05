'use strict';

var testdata = require('./boardServicetestdata');
var boardService = require('../../scripts/services/boardService');

var data = testdata();

var apiUrl = 'http://localhost:3000/api/boards';

describe('boardService Tests : ', function() {

    it('boardService should exist', function() {
        expect(boardService).not.to.be.null;
    });

    var mockBackend;
    var service;

    beforeEach(angular.mock.module('silversurfer'));

    beforeEach(inject(function(_$httpBackend_, boardService){
        mockBackend = _$httpBackend_;
        service = boardService;
    }));

    it('getBoardbyId()', function(){
        mockBackend.expectGET(apiUrl + '/' + '551d5bd46fa0405d5626cb61').respond(data.board);

        var boards = service.getBoardbyId('551d5bd46fa0405d5626cb61');

        mockBackend.flush();

        expect(boards.length).to.be.equal(1);
        expect(boards[0].location).to.be.equal('magarpatta');
    });

    it('getBoards()', function(){
        mockBackend.expectGET(apiUrl).respond(data.boards);

        var boards = service.getBoards();

        mockBackend.flush();

        expect(boards.length).to.be.equal(2);
        expect(boards[0].location).to.be.equal('Sarai Kale Khan');
        expect(boards[1].location).to.be.equal('Magarpatta');
    });

    it('saveData()', function(){
        mockBackend.expectPOST(apiUrl, data.board).respond({});

        service.saveData(data.board);

        mockBackend.flush();
    });

    it('updateData()', function(){
        mockBackend.expectPUT(apiUrl + '/' + '551d5bd46fa0405d5626cb61').respond(200);
        service.updateData(data.board[0]);

        mockBackend.flush();
    });
});