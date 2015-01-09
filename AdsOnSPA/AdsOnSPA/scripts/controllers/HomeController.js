'use strict';

app.controller('HomeController',
    function ($scope, $route,$log, adsData) {
        adsData.getById(5)
           // .$promise
            .$then(function(data){
                $scope.adsData = data;
                $scope.adsPerPage = 3;
            },
            function error(err) {
                $log.error(error);
            });

        $scope.reload = function () {
            $route.reload();
        }
    }
);

