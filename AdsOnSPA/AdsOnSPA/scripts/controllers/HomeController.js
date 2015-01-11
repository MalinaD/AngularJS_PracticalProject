'use strict';

app.controller('HomeController',
    function ($scope, $route,$location, $log, adsData, notifyService, pageSize) {

        var adsParams = {
            startPage : 1,
            pageSize  : 60
        }

        var ad = {
            title: $scope.title,
            text: $scope.text,
            image: $scope.image,
            imageDataUrl: $scope.imageDataUrl
            //TODO ,
           // categoryId: $scope.catData.getSelectedCatId(),
            //townId: $scope.townData.getSelectedTownId()
        };

        adsData.getAll(
            null,
            function success(data) {
                $scope.ads = data;
                  $location.path('/');
            },
            function error(err) {
                notifyService.showError("Cannot load ads", err);
            }
           );

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
        };

        $scope.$on("categorySelectionChanged",
            function (event, selectedCategoryId) {
                $scope.adsParams.categoryId = selectedCategoryId;
                $scope.adsParams.startPage = 1;
                $scope.reload();
            });

        $scope.$on("townSelectionChanged",
            function (event, selectedTownId) {
                $scope.adsParams.categoryId = selectedTownId;
                $scope.adsParams.startPage = 1;
                $scope.reload();
            });

        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.pageChanged = function () {
                getResultsPage(newPage);
            $log.log('Page changed to: ' + $scope.currentPage);
        };

        function getResultsPage(pageNumber) {
            adsData.getAll(pageNumber, currentTownId, currentCategoryId)
                .then(function (data) {
                $scope.loading = true;
                $scope.adsData = data;
                $scope.totalAds = parseInt(data.numPages) * 5;
                currentPage = pageNumber;
            }, function (error) {
                $rootScope.$broadcast('alertMessage', ajaxErrorText);
            }).finally(function () {
                $scope.loading = false;
                $('html, body').animate({
                    scrollTop: 0
                }, 1000);
            });
        }

    }
);

