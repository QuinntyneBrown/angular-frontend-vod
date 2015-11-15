(function () {

    "use strict";

    function video($q, conference, videoDataService) {

        var self = this;

        return this;

    }

    angular.module("app").service("video", ["$q", "conference", "videoDataService", video]);

})();