(function () {

    "use strict";

    function watchHistoryItem($q, watchHistoryService) {
        var self = this;
        self.createInstanceAsync = function () {
            var instance = new watchHistoryItem($q, watchHistoryService);
            return $q.when(instance);
        };
        return self;
    }

    angular.module("app").service("watchHistoryItem", ["$q", "watchHistoryService", watchHistoryItem]);

})();