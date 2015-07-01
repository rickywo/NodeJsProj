/**
 * Created by leeshihping on 2015/7/1.
 */
var app = angular.module('flapperNews', []);


app.controller('MainCtrl', [
    '$scope',
    function($scope) {
        $scope.test = 'Hello world!';
        $scope.posts = [
            {title:'post 1', link:'', upvotes:5},
            {title:'post 2', upvotes:2},
            {title:'post 3', upvotes:1},
            {title:'post 4', upvotes:2},
            {title:'post 5', upvotes:5}
        ];
        $scope.incrementUpvotes = function(post) {
            post.upvotes += 1;
        }
        $scope.addPost = function(){
            if(!$scope.title || $scope.title ==='') {return;}
            $scope.posts.push({
                title: $scope.title,
                link: $scope.link,
                upvotes:0
            });
            $scope.title = '';
            $scope.link = '';
        };
    }
]);