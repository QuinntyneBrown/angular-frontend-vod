(function () {

    "use strict";


    function conferenceDataService($q, apiEndpoint, dataService) {

        var self = this;

        self.getAll = function (options) {
            return dataService.fromService({
                method: "GET", url: self.baseUri + "/getAll"
            });
        };

        self.baseUri = apiEndpoint.getBaseUrl("conference");

        return self;
    }

    angular.module("app").service("conferenceDataService", ["$q", "apiEndpoint", "dataService", conferenceDataService]);

})();