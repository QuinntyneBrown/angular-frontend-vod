(function () {

    "use strict";

    function watchHistory($q, watchHistoryService) {

        var self = this;

        return this;

    }

    angular.module("app").service("watchHistory", ["$q", "watchHistoryService", watchHistory]);

})();