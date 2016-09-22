/**
 * Created by vmuser016 on 2016/9/21.
 */
define([
    'controllers/controllers'
] ,function (controllers) {
    controllers.controller('loginController' ,['$scope' ,function ($scope) {
        $scope.msg = "hello ,world !";
    }]);
});