/**
 * Created by vmuser016 on 2016/9/27.
 */
define([
    'directives/directives'
] ,function (directives) {
    directives.directive('xlAccordion' ,[function ($scope, $) {
        var items_fc = ['item1' ,'item2' ,'item3'];
        return {
            restrict : 'EA', //元素（E） 、属性（A） 、类（C）或注释（M）
            //replace : true,   //将指令替换为template模板
            template : '<b>Who is there !</b>'

        };
    }]);
});