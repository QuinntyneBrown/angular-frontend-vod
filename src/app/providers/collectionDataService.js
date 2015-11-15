(function () {

    "use strict";


    function collectionDataService($q, apiEndpoint, dataService) {

        var self = this;

        self.getAll = function (options) {
            return dataService.fromService({
                method: "GET", url: self.baseUri + "/getAll",
                params: { accountId: options.accountId }
            });
        };

        self.getById = function (options) {
            return dataService.fromService({
                method: "GET", url: self.baseUri + "/getById",
                params: { id: options.id }
            });
        };

        self.baseUri = apiEndpoint.getBaseUrl("collection");

        return self;
    }

    angular.module("app").service("collectionDataService", ["$q", "apiEndpoint", "dataService", collectionDataService]);

})();