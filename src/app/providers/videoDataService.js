﻿(function () {

    "use strict";


    function videoDataService($q, apiEndpoint, dataService) {

        var self = this;

        self.getAll = function (options) {
            return dataService.fromService({
                method: "GET", url: self.baseUri + "/getAll"
            });
        };

        self.baseUri = apiEndpoint.getBaseUrl("video");

        return self;
    }

    angular.module("app").service("videoDataService", ["$q", "apiEndpoint", "dataService", videoDataService]);

})();