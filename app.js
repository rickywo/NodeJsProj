/**
 * Created by leeshihping on 2015/7/1.
 */
var app = angular.module('flapperNews', []);
app.controller('MainCtrl', [
    '$scope',
    function($scope) {
        $scope.test = 'Hello world!';
    }
]);