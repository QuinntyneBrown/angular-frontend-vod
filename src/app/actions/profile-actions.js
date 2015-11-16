(function () {

    "use strict";


    function profileActions(apiEndpoint, fetch) {

        var self = this;

        self.getAll = function (options) {
            fetch.fromService({
                method: "GET", url: self.baseUri + "/getAll",
                params: { accountId: options.accountId }
            });
        };

        self.baseUri = apiEndpoint.getBaseUrl("profile");

        return self;
    }

    angular.module("app").service("profileActions", ["apiEndpoint", "Actions", profileActions]);

})();