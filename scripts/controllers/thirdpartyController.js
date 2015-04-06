'use strict';

module.exports=['$scope', function($scope){
    console.log('inside thirdpartyController');
    $scope.main.active.tab = 'thirdparty';
    
}];