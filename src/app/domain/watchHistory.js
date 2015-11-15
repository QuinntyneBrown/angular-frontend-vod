(function () {

    "use strict";

    function watchHistory($injector, $q, watchHistoryService) {

        var self = this;

        return this;

    }

    angular.module("app").service("watchHistory", ["$injector", "$q", "watchHistoryService", watchHistory]);

})();