'use strict';

// Declare app level module which depends on views, and components
angular.module('OverPapers', [])
    .controller('overController', ['$http', function ($http) {
        var paper_list = this;
        paper_list.products = [];

        $http.get('/overwatch_wallpapers/wallpapers_info.json').success(function (data) {
            paper_list.products = data;
            console.log(data);
        }).error(console.log("error"))
    }]);


