'use strict';

//Browserify dependencies
var angular = require('angular');
require('angular-resource');
require('angular-ui-router');
require('angular-bootstrap');



//Module definition
var silversurfer = angular.module('silversurfer',['ngResource','ui.router','ui.bootstrap']);

//Module dependencies
require('./scripts/controllers');
require('./scripts/services');

//Routes
silversurfer.config(['$stateProvider',function($stateProvider){
    $stateProvider.state('home',{
        url: '/',
        templateUrl: 'views/boards.html',
        controller: 'BoardsController'
    }).state('services',{
        url: '/services',
        templateUrl: 'views/services.html',
        controller: 'ServicesController'
    }).state('thirdparty',{
        url: '/thirdparty',
        templateUrl: 'views/thirdparty.html',
        controller: 'ThirdpartyController'
    }).state('addboard',{		//Adds a board to the database
		url: '/addboard',
		templateUrl: 'views/addboard.html',
		controller: 'AddboardController'
	}).state('editboard',{		//Adds a board to the database
		url: '/editboard',
		templateUrl: 'views/editboard.html',
		controller: 'EditboardController'
	});

}]);
