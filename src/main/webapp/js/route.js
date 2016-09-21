/**
 * Created by vmuser016 on 2016/9/21.
 */

//设置路由信息
define([
    'app'
] ,function (app) {
    app.config(['$routeProvider'] ,function ($routeProvider) {
        $routeProvider
            .when('/' ,{
                templateUrl : 'views/index.html',
                controller : 'loginController'
            })
            .otherwise({
                redirectTo : '/'
            });
    });
});