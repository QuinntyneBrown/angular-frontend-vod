(function () {

    "use strict";

    function video($q, videoDataService) {

        var self = this;

        return this;

    }

    angular.module("app").service("video",["$q", "videoDataService", video]);

})();