/**
 * Created by vmuser016 on 2016/9/21.
 */

//require配置
require.config({
    paths : {
        "angular" : "angular/angular",
        "angularAnimate" : "angular/angular-animate",
        "angularRoute" : "angular/angular-route",
        "angularResource" : "angular/angular-resource",
        "bootstrap" : "bootstrap/bootstrap.min",
        "jquery" : "jquery-3.1.0",
        "requireJs" : "require",
        "underscore" : "underscore"
    },
    shim :{
        angular : {
            exports : "angular"
        },
        angularAnimate : {
          deps : ["angular"]
        },
        angularRoute : {
            deps : ["angular"]
        },
        angularResource : {
            deps : ["angular"]
        }
    },
    urlArgs : "bust" + (new date()).getTime()
});

//加载路由信息
define("init", ["route"], function () {
    //使用bootstrap方法启动Angular应用 
    angular.bootstrap(document, ["app"]);
});