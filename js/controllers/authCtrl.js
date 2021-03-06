var authCtrlApp =  angular.module('authCtrlApp', [])
authCtrlApp.controller('authCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data) {
    //initially set those objects to null to avoid undefined error
    $scope.login = {};
    $scope.signup = {};
    $scope.doLogin = function (customer) {
        alert("hi");
            var headers = { 'Authorization': 123456 };
            $scope.status = 'Saving...';
            var message = "";
             $http.post('http://localhost:8888/cheera_API/signUp', message, { headers: headers } ).success(function(response) {
                 $scope.status = '';
                 alert("success");
            }).error(function() {
              $scope.status = 'Failed...';
            });

    /*  Data.post('login', {
            customer: customer
        }).then(function (results) {
            Data.toast(results);
            if (results.status == "success") {
                $location.path('dashboard');
            }
        });*/
    };
    $scope.signup = {email:'',password:'',name:'',phone:'',address:''};
    $scope.signUp = function (customer) {
        Data.post('signUp', {
            customer: customer
        }).then(function (results) {
            Data.toast(results);
            if (results.status == "success") {
                $location.path('dashboard');
            }
        });
    };
    $scope.logout = function () {
        Data.get('logout').then(function (results) {
            Data.toast(results);
            $location.path('login');
        });
    }
});