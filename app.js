// http://rawgit.com/Ecleptic/overwatch_wallpapers/master/wallpapers_info.json
'use strict';

// Declare app level module which depends on views, and components
angular.module('OverPapers', ['ngAnimate'])
    .controller('heroController', function ($scope) {
        $scope.heroes = ["Bastion", "D.Va", "Genji", "Hanzo", "Junkrat", "Lucio",
            "McCree", "Mei", "Mercy", "Pharah", "Reaper", "Reinheart", "Roadhog",
            "Soldier 76", "Symmetra", "Torbjorn", "Tracer", "Widowmaker", "Winston",
            "Zarya", "Zenyatta"];
    })
    .controller('overController', function ($scope, $http) {
        $scope.content = null;
        $scope.matchedImages = []
        $http.get('wallpapers_info.json')
            .success(function (data, status, headers, config) {
                $scope.contents = data;
                $scope.matchedImages = [];
            })
            .error(function (data, status, headers, config) {
            });
        $scope.openImage = function (src) {
            console.log(src);
            window.location.href = src;
        };


        $scope.searchTextChanged = function () {
            $scope.matchedImages = $scope.contents.filter(function (item) {
                if (!$scope.searchText || !$scope.searchText.length)
                    return false

                if (item.artist && item.artist.toUpperCase().indexOf($scope.searchText.toUpperCase()) !== -1)
                    return true

                for (var i = 0; i < item.tags.length; i++) {
                    if (item.tags && item.tags[i].toUpperCase().indexOf($scope.searchText.toUpperCase()) !== -1)
                        return true
                }

                return false
            })
        }
    });


