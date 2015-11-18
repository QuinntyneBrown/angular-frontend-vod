(function () {

    "use strict";

    function profiles($injector, $q, profileActions) {

        var self = this;

        self.onStoreUpdate = function (options) {

        }

        return self;

    }

    angular.module("app").service("profiles", ["$injector", "$q", "profileActions", profiles]);

})();