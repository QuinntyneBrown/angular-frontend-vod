(function () {

    "use strict";

    function profiles($injector, $q, profileActions) {

        var self = this;

        return this;

    }

    angular.module("app").service("profiles", ["$injector", "$q", "profileActions", profiles]);

})();