(function () {

    "use strict";

    function collection($injector, $q, collecitonDataService) {

        var self = this;

        return this;

    }

    angular.module("app").service("collection", ["$injector", "$q", "collectionDataService", collection]);

})();