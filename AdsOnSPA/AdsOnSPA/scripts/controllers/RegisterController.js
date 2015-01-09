'use strict';

app.controller('RegisterController',
    function ($scope, $rootScope, $location,townsServices, authService, notifyService) {
        $scope.userData = { townId: null };
        $scope.towns = townsServices.getTowns();

        $scope.register = function (userData) {
            authService.register(userData,
                function success() {
                    //notifyService.showInfo("Registration successful");
                    $location.path("/login");
                },
                function error(err) {
                   // notifyService.showError("User registration failed", err);
                }
            );
        };
    }
);
