'use strict';

app.controller('UserPublishNewAdController',
    function ($scope, $location, townsServices, categoriesSerivces, userService, notifyService) {
        $scope.adsData = { townId: null, categoryId: null };
        $scope.categories = categoriesSerivces.getCategories();
        $scope.towns = townsServices.getTowns();

        $scope.publishAd = function (adsData) {
            userService.createNewAd(adsData,
                function success() {
                    notifyService.showInfo("Publishing ad is successful!");
                    $location.path("/user/ads");
                },
                function error(err) {
                    notifyService.showError("Publishing ad failed", err);
                });
        };

        $scope.fileSelected = function (fileInputField) {
            delete $scope.adsData.imageDataUrl;
            var file = fileInputField.files[0];
            if (file.type.match(/image\/.*/)) {
                var reader = new FileReader();
                reader.onload = function () {
                    $scope.adsData.imageDataUrl = reader.result;
                    $(".image-box").html("<img src='" + reader.result + "'>");
                };
                reader.readAsDataURL(file);
            } else {
                $(".image-box").html("<p>File type not supported!</p>");
            }
        };
    });