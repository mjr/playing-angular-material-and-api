(function(){
    'use strict';

    angular.module('flickrApp', ['ngMaterial', 'ngMdIcons'])
        .controller('FlickrController', ['$scope', '$http', function($scope, $http){

            $scope.results = [];

            $scope.isSearching = false;

            $scope.searchPhoto = function(){
                $scope.isSearching = true;
                $http({
                    method: 'GET',
                    url: 'https://api.flickr.com/services/rest',
                    params: {
                        method: 'flickr.photos.search',
                        api_key: '56c35fc0c3f10fd6a7b851b6d8e45c2d',
                        text: $scope.searchTerm,
                        format: 'json',
                        nojsoncallback: 1
                    }
                }).success(function(data){
                    $scope.isSearching = false;
                    $scope.results = data;
                }).error(function(error){
                    $scope.isSearching = false;
                    console.log(error);
                });
            };

        }]);

})();