(function () {

    "use strict";

    function collection($injector, $q, collectionActions) {

        var self = this;

        return this;

    }

    angular.module("app").service("collection", ["$injector", "$q", "collectionActions", collection]);

})();