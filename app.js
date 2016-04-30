// http://rawgit.com/Ecleptic/overwatch_wallpapers/master/wallpapers_info.json
'use strict';

// Declare app level module which depends on views, and components
angular.module('OverPapers', ['ngAnimate'])
    .controller('heroController', function ($scope) {
    })
    .controller('overController', function ($scope, $http) {
        $scope.heroes = [{"name": "bastion"}, {"name": "d.va"}, {"name": "genji"}, {"name": "hanzo"}, {"name": "junkrat"}, {"name": "lucio"}, {"name": "mccree"}, {"name": "mei"}, {"name": "mercy"
        }, {"name": "pharah"
        }, {"name": "reaper"
        }, {"name": "reinhardt"
        }, {"name": "roadhog"
        }, {"name": "soldier76"
        }, {"name": "symmetra"
        }, {"name": "torbjorn"
        }, {"name": "tracer"
        }, {"name": "widowmaker"
        }, {"name": "winston"}, {"name": "zarya"}, {"name": "zenyatta"
        }];
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
            $scope.showBody = true;
            document.body.style.backgroundColor = "#808080";
            document.body.style.backgroundImage = 'none';
            $scope.matchedImages = $scope.contents.filter(function (item) {
                if (!$scope.searchText || !$scope.searchText.length) {
                    $scope.showBody = false;
                    document.body.style.backgroundColor = "#f5f6fa";
                    document.body.style.backgroundImage = "url('assets/images/index_images/background.png')";
                    return false;
                }


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


