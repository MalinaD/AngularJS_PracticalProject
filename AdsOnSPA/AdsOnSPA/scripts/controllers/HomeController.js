'use strict';

app.controller('HomeController',
    function ($scope, $route,$location, $log, adsData) {

        var info={
            startPage : 1,
            pageSize  : 10
        }

        var ad = {
            title: $scope.title,
            text: $scope.text,
            //TODO image: $scope.image,
           // imageDataUrl: $scope.imageDataUrl,
           // categoryId: $scope.catData.getSelectedCatId(),
            //townId: $scope.townData.getSelectedTownId()
        };

        //adsData.getAll(
        //    null,
        //    function success(data) {
        //        $scope.ads = data;
        //    },
        //    function error(err) {
        //        //TODO
        //    }
        //    );

        adsData.getById(ad)
           .$promise
            .then(function(response){
                $scope.data = response;
                $scope.numberOfPages = Math.ceil($scope.totalAds / $scope.itemsPerPage);
                $scope.itemsPerPage = 10;
               $scope.total = $scope.data.numItems;
                $location.path('/');
            },
            function error(err) {
                $log.error(error);
            });

        $scope.reload = function () {
            $route.reload();
        }
    }
);

