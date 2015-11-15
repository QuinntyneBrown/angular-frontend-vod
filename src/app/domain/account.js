(function () {

    "use strict";

    function account($q, accountDataService, fire, profile) {

        var self = this;

        self.createInstanceAsync = function (options) {
            var deferred = $q.defer();
            var instance = new account($q, accountDataService, profile);

            if (options.data) {
                var promises = [];
                instance.firstname = options.data.firstname;
                instance.lastname = options.data.lastname;
                instance.username = options.data.username;
                for (var i = 0; i < options.data.profiles.length; i++) {
                    promises.push(profile.createInstanceAsync({ data: options.data.profiles[i] }));
                }
                $q.all(promises).then(function (profiles) {
                    instance.profiles;
                    deferred.resolve(instance);
                });
            } else {
                deferred.resolve(instance);
            }
            return deferred.promise;
        };

        self.register = function (options) {
            self.fire = fire;
            accountDataService.register(options).then(function () {
                self.fire("modelUpdate", { model: self });
            });
        };

        self.setDefaultProfile = function (options) {
            self.fire = fire;
            accountDataService.setDefaultProfile(options).then(function () {
                self.fire("modelUpdate", {
                    action: "update",
                    model: self
                });
            });
        };

        self.setCurrentProfile = function (options) {
            self.fire = fire;
            accountDataService.setCurrentProfile(options).then(function () {
                self.fire("modelUpdate", {
                    action: "update",
                    model: self
                });
            });
        };

        self.firstname = "";
        self.lastname = "";
        self.profiles = [];
        self.id = 0;
        self.defaultProfileId = null;
        return self;

    }

    angular.module("app").service("account", ["$q", "accountDataService","fire","profile", account]);

})();