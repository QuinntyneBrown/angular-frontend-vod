(function () {

    "use strict";

    function watchHistoryItem($injector, $q, watchHistoryService) {
        var self = this;
        self.createInstanceAsync = function () {
            var instance = new watchHistoryItem($injector, $q, watchHistoryService);
            return $q.when(instance);
        };
        return self;
    }

    angular.module("app").service("watchHistoryItem", ["$injector", "$q", "watchHistoryService", watchHistoryItem]);

})();