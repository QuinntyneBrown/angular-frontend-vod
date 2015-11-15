(function () {

    "use strict";

    function profile($q, fire, profileDataService) {

        var self = this;

        self.createInstanceAsync = function (options) {
            var deferred = $q.defer();
            var instance = new account($q, profileDataService);

            if (options.data) {
                var promises = [];
                instance.firstname = options.data.firstname;
                instance.lastname = options.data.lastname;
                instance.level = options.data.level;
                deferred.resolve(instance);
            } else {
                deferred.resolve(instance);
            }
            return deferred.promise;
        };

        self.add = function (options) {
            self.fire = fire;
            profileDataService.add(options).then(function () {
                self.fire("modelUpdate", {
                    action:"add",
                    model: self
                });
            });
        };

        self.update = function (options) {
            self.fire = fire;
            profileDataService.update(options).then(function () {
                self.fire("modelUpdate", {
                    action: "update",
                    model: self
                });
            });
        };

        self.remove = function (options) {
            self.fire = fire;
            profileDataService.remove(options).then(function () {
                self.fire("modelUpdate", {
                    action: "delete",
                    model: self
                });
            });
        };


        self.firstname = "";
        self.lastname = "";
        self.accounId = 0;
        self.id = 0;
        self.level = 1;
        self.avatarImageUrl = "";
        return self;

    }

    angular.module("app").service("profile",["$q", "fire", "profileDataService", profile]);

})();