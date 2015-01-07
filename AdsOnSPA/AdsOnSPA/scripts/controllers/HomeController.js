'use strict';

app.controller('HomeController',
    function ($scope, $rootScope, adsService, notifyService, pageSize) {
        adsService.getAds(
            null,
            function success(data) {
                //TODO
            },
            function error(err) {
                notifyService.showError("Cannot load ads", err);
            }
            );
    }
);
