(function () {

    "use strict";


    function accountActions(apiEndpoint, fetch) {

        var self = this;

        self.register = function (options) {
            fetch.fromService({ method: "POST", url: self.baseUri + "/register", data: options.data });
        };

        self.setCurrentProfile = function (options) {
            fetch.fromService({ method: "PUT", url: self.baseUri + "/setCurrentProfile", data: options.data });
        };

        self.setDefaultProfile = function (options) {
            fetch.fromService({ method: "PUT", url: self.baseUri + "/setDefaultProfile", data: options.data });
        };

        self.baseUri = apiEndpoint.getBaseUrl("account");

        return self;
    }

    angular.module("app").service("accountActions", ["$q", "apiEndpoint", "fetch", "fire", accountActions]);

})();