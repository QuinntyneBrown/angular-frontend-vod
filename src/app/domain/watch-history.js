(function () {

    "use strict";

    function watchHistory($injector, $q, watchHistoryService) {

        var self = this;

        self.onStoreUpdate = function () {

        }

        return self;

    }

    angular.module("app").service("watchHistory", ["$injector", "$q", "watchHistoryService", watchHistory]);

})();