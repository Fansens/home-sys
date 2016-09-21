/**
 * Created by vmuser016 on 2016/9/21.
 */

//用于加载需要的模块
//本模块供所有其他service模块引用
define([
    'angular'
] ,function (angular) {
    return angular.module("services" ,['$resource']);
});