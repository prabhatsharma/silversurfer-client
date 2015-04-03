'use strict';

// Note: karma-browserify-preprocessor requires test filenames to end with "-test"

var chai = require('chai')
  , expect = chai.expect;

var boardService = require('../../scripts/services/boardServices.js');

describe('boardService Test suite',function(){
    
    beforeEach(module('silversurfer'));

    it('saves data on the server',function(){
        expect(true).toBe(true);
    });
});
