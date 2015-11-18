(function () {

    "use strict";

    function collectionItem($q, collectionActions) {

        var self = this;

        self.onAdd = function (options) {
            collectionActions.add({

            });
        }

        self.onRemove = function (options) {
            collectionActions.remove({

            });
        }

        self.onStoreUpdate = function (options) {

        }

        return self;

    }

    angular.module("app").service("collectionItem", ["$injector", "$q", "collectionActions", collectionItem]);

})();