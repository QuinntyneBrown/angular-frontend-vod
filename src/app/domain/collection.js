(function () {

    "use strict";

    function collection($q, collecitonDataService) {

        var self = this;

        return this;

    }

    angular.module("app").service("collection", ["$q", "collectionDataService", collection]);

})();