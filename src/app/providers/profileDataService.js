(function () {

    "use strict";


    function profileDataService($q, apiEndpoint, dataService) {

        var self = this;

        self.getAll = function (options) {
            return dataService.fromService({
                method: "GET", url: self.baseUri + "/getAll",
                params: { accountId: options.accountId }
            });
        };

        self.baseUri = apiEndpoint.getBaseUrl("profile");

        return self;
    }

    angular.module("app").service("profileDataService", ["$q", "apiEndpoint", "dataService", profileDataService]);

})();