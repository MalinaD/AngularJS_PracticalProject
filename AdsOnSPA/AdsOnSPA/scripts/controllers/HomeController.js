'use strict';

app.controller('HomeController',
    function ($scope, $route,$location, $log, adsData) {

        $scope.currentPage = 1;
        $scope.numPerPage = 2;
        $scope.maxVisiblePages = 5;
        $scope.shouldHaveFirstLastButtons = true;
        $scope.data = adsData;
        adsData.pageNum = 1;

        var ad = {
            title: $scope.title,
            text: $scope.text,
            //TODO image: $scope.image,
           // imageDataUrl: $scope.imageDataUrl,
           // categoryId: $scope.catData.getSelectedCatId(),
            //townId: $scope.townData.getSelectedTownId()
        };


        adsData.getById(ad)
           .$promise
            .then(function(data){
                //$scope.ads = data.ads;
                //$scope.numberOfPages = 3;
                //$scope.total = data.numItem;
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

