(function () {

    "use strict";

    function collectionItem($q, collectionActions) {

        var self = this;

        return this;

    }

    angular.module("app").service("collectionItem", ["$injector", "$q", "collectionActions", collectionItem]);

})();