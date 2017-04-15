/**
 * Created by lalit on 7/4/17.
 */

angular
    .module('ngClients')
    .factory('clientsFactory', function($http) {


        function getClients() {
            return $http.get('data/data.json');
        }

        return {
            getClients: getClients

        }
    });