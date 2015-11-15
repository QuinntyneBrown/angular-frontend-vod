(function () {

    "use strict";

    function video($injector, $q, conference, videoDataService) {

        var self = this;

        return this;

    }

    angular.module("app").service("video", ["$injector", "$q", "videoDataService", video]);

})();