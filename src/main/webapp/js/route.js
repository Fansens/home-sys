/**
 * Created by vmuser016 on 2016/9/21.
 */

//设置路由信息（problem is here ！！！）
define([
    'app'
] ,function (app) {
    console.log("Start loading route.js ...");
    app.config(['$routeProvider'] ,function ($routeProvider) {
        $routeProvider
            .when('/' ,{
                templateUrl : 'index.html',
                controller : 'loginController'
            })
            .when('/hello' ,{
                templateUrl : 'hello.html',
                controller : 'homeController'
            })
            .otherwise({
                redirectTo : '/'
            });
    });
    console.log("Loading route.js success ...");
});