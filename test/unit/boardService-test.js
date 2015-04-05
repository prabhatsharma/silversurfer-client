'use strict';

var testdata = require('./boardServicetestdata');
var boardService = require('../../scripts/services/boardService');

var data = testdata();

describe('boardService Tests : ', function() {

    it('boardService should exist', function() {
        expect(boardService).not.to.be.null;
    });

    
    var httpBackend;

    beforeEach(angular.mock.module('silversurfer'));

    it('getBoardbyId()', inject(function(_$httpBackend_, boardService){
        var mockBackend = _$httpBackend_;
        mockBackend.expectGET('http://localhost:3000/api/boards/551d5bd46fa0405d5626cb61').respond(data.board);

        var boards = boardService.getBoardbyId('551d5bd46fa0405d5626cb61');

        mockBackend.flush();

        expect(boards.length).to.be.equal(1);
        expect(boards[0].location).to.be.equal('magarpatta');
    }));
});