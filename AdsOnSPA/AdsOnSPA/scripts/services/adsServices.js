'use strict';

app.factory('adsData',
    function ($resource, baseServiceUrl) {
        var adsResource = $resource(
            baseServiceUrl + '/api/ads/:id',
            {id: '@id'},
            {
                update: { method: 'GET' }
            }
            );

        function getAllAds() {
            return adsResource.get();
        }

        function getAdById(id) {
            return adsResource.get({ id: id });
        }


        return {
            getAll: getAllAds,
            getById: getAdById
        }
    });

app.factory('categoriesSerivces',
    function ($resource, baseServiceUrl) {
        var categoriesResource = $resource(
            baseServiceUrl + '/api/categories'
               )  ;

        return {
            getCategories: function (success, error) {
                return categoriesResource.query(success, error);
            }
        }
    });

app.factory('townsServices',
    function ($resource, baseServiceUrl) {
        var townsResource = $resource(
            baseServiceUrl + '/api/towns'
               );

        return {
            getTowns: function (success, error) {
                return townsResource.query(success, error);
            }
        }
    });