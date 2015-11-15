(function () {

    "use strict";


    function watchHistoryManager(localStorageManager) {

        var self = this;

        Object.defineProperty(self, "currentWatchHistory",
            { set: function (value) { localStorageManager.put({ name: "currentWatchHistory", value: value }); } },
            { get: function () { return localStorageManager.get({ name: "currentWatchHistory" }); } }
            );

        return self;
    }

    angular.module("app").service("watchHistoryManager", ["localStorageManager", watchHistoryManager]);

})();