/**
 * Created by vmuser016 on 2016/9/21.
 */

//设置路由信息（problem is here ！！！）
define([
    'app'
] ,function (app) {
    console.log("Start loading route.js ...");
    app.config(['$routeProvider', '$locationProvider' ,function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);//去除路径中的#号
        $routeProvider
            .when('/' ,{
                templateUrl : 'views/hello.html',
                controller : 'loginController'
            })
            .when('/hello' ,{
                templateUrl : 'views/hello.html',
                controller : 'homeController'
            })
            .when('/about' ,{
                templateUrl : 'views/about.html',
                controller : 'aboutController'
            })
            .otherwise({
                redirectTo : 'views/error/404.html'
            });
    }]);
    console.log("Loading route.js success ...");
});