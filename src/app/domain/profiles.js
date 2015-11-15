(function () {

    "use strict";

    function profiles($injector, $q, profileDataService) {

        var self = this;

        return this;

    }

    angular.module("app").service("profiles", ["$injector", "$q", "profileDataService", profiles]);

})();