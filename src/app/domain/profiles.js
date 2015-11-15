(function () {

    "use strict";

    function profiles($q, profileDataService) {

        var self = this;

        return this;

    }

    angular.module("app").service("profiles",["$q", "profileDataService", profiles]);

})();