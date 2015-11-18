(function () {

    "use strict";

    function watchHistoryItem($injector, $q, watchHistoryActions, watchHistoryStore) {
        var self = this;

        self.createInstanceAsync = function () {
            var instance = new watchHistoryItem($injector, $q, watchHistoryActions, watchHistoryStore);
            return $q.when(instance);
        };

        self.onStoreUpdate = function (options) {

        }

        self.onRemove = function (options) {
            watchHistoryActions.remove({

            });
        }


        return self;
    }

    angular.module("app").service("watchHistoryItem", ["$injector", "$q", "watchHistoryActions", "watchHistoryActions", watchHistoryItem]);

})();