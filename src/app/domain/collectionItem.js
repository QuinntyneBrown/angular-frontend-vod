(function () {

    "use strict";

    function collectionItem($q, collecitonDataService) {

        var self = this;

        return this;

    }

    angular.module("app").service("collectionItem", ["$q", "collectionDataService", collectionItem]);

})();