(function () {

    "use strict";

    function collection($injector, $q, collectionActions) {

        var self = this;

        self.onStoreUpdate = function (options) {

        }

        return self;

    }

    angular.module("app").service("collection", ["$injector", "$q", "collectionActions", collection]);

})();