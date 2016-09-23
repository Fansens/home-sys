/**
 * Created by vmuser016 on 2016/9/21.
 */

define([
    'services/services'
], function (services) {
    console.log("Start loading services/homeService.js ...");
    services.factory('homeService', ['$resource',
        function ($resource) {
            console.log("Loading services/homeService.js ...");
            return $resource("../api/BoCtnQutMain/", {}, {
                Post: { method: "Post" },
                PostArray: { method: "Post",isArray:true }
            });
        }
    ]);
});