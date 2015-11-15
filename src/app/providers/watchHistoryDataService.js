(function () {

    "use strict";


    function watchHistoryDataService($q, apiEndpoint, dataService) {

        var self = this;

        self.get = function (options) {
            return dataService.fromService({
                method: "GET", url: self.baseUri + "/get"
            });
        };

        self.baseUri = apiEndpoint.getBaseUrl("watchHistory");

        return self;
    }

    angular.module("app").service("watchHistoryDataService", ["$q", "apiEndpoint", "dataService", watchHistoryDataService]);

})();