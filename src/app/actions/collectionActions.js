(function () {

    "use strict";


    function collectionActions(apiEndpoint, fetch) {

        var self = this;

        self.getAll = function (options) {
            fetch.fromService({
                method: "GET", url: self.baseUri + "/getAll",
                params: { accountId: options.accountId }
            });
        };

        self.getById = function (options) {
            fetch.fromService({
                method: "GET", url: self.baseUri + "/getById",
                params: { id: options.id }
            });
        };

        self.baseUri = apiEndpoint.getBaseUrl("collection");

        return self;
    }

    angular.module("app").service("collectionActions", ["$q", "apiEndpoint", "fetch", collectionActions]);

})();