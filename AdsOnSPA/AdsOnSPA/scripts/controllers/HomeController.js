'use strict';

app.controller('HomeController',
    function ($scope, $route,$log, adsData) {
        adsData.getAll()
            .$promise
            .$then(function(data){
                $scope.data = data;
            },
            function error(err) {
                $log.error(error);
            });

        $scope.reload = function () {
            $route.reload();
        }
    }
);

