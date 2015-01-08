'use strict';

app.controller('HomeController',['$scope',
    function ($scope, $rootScope, adsService, notifyService, pageSize) {
        adsService.getAds(
            null,
            function success(data,status, headers, config) {
                $scope.pageTitle = ' Home';
            },
            function error(err) {
                notifyService.showError("Cannot load ads", err);
            }
            );
    }
]);
