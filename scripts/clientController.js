/**
 * Created by lalit on 7/4/17.
 */

var app = angular.module('ngClients');
    app.controller('clientController', function ($scope, $http) {

        $scope.clients;
        $scope.SortColumn = "first_name";
        $scope.reverseSort = false;


        $scope.SortData = function (column) {
            $scope.reverseSort = ($scope.SortColumn == column) ? !$scope.reverseSort : false;
            $scope.SortDate = column;
        }
        $scope.getSortClass = function (column) {
            if ($scope.SortColumn == column) {
                return $scope.reverseSort ? 'arrow-down' : 'arrow-up'

            }
            return '';

        }
        $scope.newClient = {};

        $scope.addClient = function (newClient) {
            $scope.clients.push(newClient);
            $scope.newClient = {};
        }

        $scope.editClient = function (client) {
            $scope.editClienting = true;
            $scope.existingClienting = client;
        }

        $scope.saveClientEdit = function () {
            $scope.existingClienting = {};
            $scope.editClienting = false;
        }

        $scope.deleteClient = function (client) {
            var index = $scope.clients.indexOf(client);
            $scope.clients.splice(index, 1);
            $scope.existingClienting = {};
            $scope.editClienting = false;
        }

        $http.get('data/data.json').success(function (data) {
            $scope.clients = data.records;
        }).error(function (error) {
            console.log(error);
        })


        app.config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');
            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'main.html',
                    controller: 'TestCtrl',
                })
                .state('edit', {
                    url: '/edit/:edit',
                    templateUrl: 'edit.html',
                    controller: 'TestCtrl'
                });
        });

    });