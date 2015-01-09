'use strict';

app.controller('UserPublishNewAdController',
    function ($scope, $location, townsServices, categoriesSerivces, userServices, notifyServices) {
        $scope.adsData = { townId: null, categoryId: null };
        $scope.categories = categoriesSerivces.getCategories();
        $scope.towns = townsServices.getTowns();

        $scope.publishAd = function (adsData) {
            userServices.createNewAd(adsData,
                function success() {
                    //TODO : show success info message
                    $location.path("/user/ads");
                },
                function error(err) {
                    //TODO: show error message
                });
        };
    });