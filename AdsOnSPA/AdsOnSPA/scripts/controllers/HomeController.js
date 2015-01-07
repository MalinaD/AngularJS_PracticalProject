'use strict';

app.controller('HomeController',
    function ($scope, $rootScope, adsService, notifyService, pageSize) {
        adsService.getAds(
            null,
            function success(data,status, headers, config) {
               
            },
            function error(err) {
                notifyService.showError("Cannot load ads", err);
            }
            );
    }
);
