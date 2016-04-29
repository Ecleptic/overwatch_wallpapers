'use strict';

// Declare app level module which depends on views, and components
angular.module('OverPapers', ['ngAnimate'])
    .controller('heroController', function ($scope) {
        $scope.heroes = ["Bastion", "D.Va", "Genji", "Hanzo", "Junkrat", "Lucio", "McCree", "Mei", "Mercy", "Pharah", "Reaper", "Reinheart", "Roadhog", "Soldier 76", "Symmetra", "Torbjorn", "Tracer", "Widowmaker", "Winston", "Zarya", "Zenyatta"];
    })
    .controller('overController', function ($scope, $http) {
        $scope.content = null;
        $http.get('wallpapers_info.json')
            .success(function (data, status, headers, config) {
                $scope.contents = data;
            })
            .error(function (data, status, headers, config) {
            });
        $scope.openImage = function (src) {
            console.log(src);
            window.location.href = src;
        }

    });