(function () {

    "use strict";


    function accountDataService(apiEndpoint,dataService) {

        var self = this;

        self.register = function (options) {
            var deferred = $q.defer();
            dataService.fromService({ method: "POST", url: self.baseUri + "/register", data: options.data }).then(function (results) {
                deferred.resolve();
            });
            return deferred.promise;
        };

        self.setCurrentProfile = function (options) {
            var deferred = $q.defer();
            dataService.fromService({ method: "PUT", url: self.baseUri + "/setCurrentProfile", data: options.data }).then(function (results) {
                deferred.resolve();
            });
            return deferred.promise;
        };

        self.setDefaultProfile = function (options) {
            var deferred = $q.defer();
            dataService.fromService({ method: "PUT", url: self.baseUri + "/setDefaultProfile", data: options.data }).then(function (results) {
                deferred.resolve();
            });
            return deferred.promise;
        };

        self.baseUri = apiEndpoint.getBaseUri("account");

        return self;
    }

    angular.module("app").service("accountDataService", ["$q","apiEndpoint","dataService", playlistManager]);

})();