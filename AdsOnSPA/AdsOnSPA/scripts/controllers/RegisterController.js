'use strict';

app.controller('RegisterController',
    function ($scope, $rootScope, $location, authService, notifyService) {
        $scope.register = function (userData) {
            authService.register(userData,
                function success() {
                    notifyService.showInfo("Registration successful");
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError("User registration failed", err);
                }
            );
        };
    }
);
