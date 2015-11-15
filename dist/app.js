angular.module("app", ["ngX.components"]).config(["$routeProvider", function ($routeProvider) {
    $routeProvider.buildFromUrl({ url: "routes.json" });
}]).run(["$rootScope", function ($rootScope) {
    $rootScope.title = "Angular Frontend Video On Demand";
}]);

(function () {

    "use strict";

    function AppComponent() {

    }

    ngX.Component({
        selector: "app",
        component: AppComponent,
        template: [
            "<div>",
            "<div data-ng-view=''></div>",
            "</div>"
        ].join(" ")
    });

})();






(function () {

    "use strict";

    function HomeComponent() {

    }

    ngX.Component({
        component: HomeComponent
    });

})();












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
(function () {

    "use strict";

    function collection($q, collecitonDataService) {

        var self = this;

        return this;

    }

    angular.module("app").service("collection", ["$q", "collectionDataService", collection]);

})();
(function () {

    "use strict";

    function collectionItem($q, collecitonDataService) {

        var self = this;

        return this;

    }

    angular.module("app").service("collection", ["$q", "collectionDataService", collectionItme]);

})();
(function () {

    "use strict";

    function playlist($q, playlistDataService) {

        var self = this;

        return this;

    }

    angular.module("app").service("playlist",["$q", "playlistDataService", playlist]);

})();
(function () {

    "use strict";

    function playlist($q, playlistItemDataService) {

        var self = this;

        return this;

    }

    angular.module("app").service("playlistItem",["$q", "playlistItemDataService", playlistItem]);

})();
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
(function () {

    "use strict";

    function profiles($q, profileDataService) {

        var self = this;

        return this;

    }

    angular.module("app").service("profiles",["$q", "profileDataService", profiles]);

})();
(function () {

    "use strict";

    function video($q, videoDataService) {

        var self = this;

        return this;

    }

    angular.module("app").service("video",["$q", "videoDataService", video]);

})();
(function () {

    "use strict";

    function watchHistory($q, watchHistoryService) {

        var self = this;

        return this;

    }

    angular.module("app").service("watchHistory", ["$q", "watchHistoryService", watchHistory]);

})();
(function () {

    "use strict";

    function watchHistoryItem($q, watchHistoryService) {
        var self = this;
        self.createInstanceAsync = function () {
            var instance = new watchHistoryItem($q, watchHistoryService);
            return $q.when(instance);
        };
        return self;
    }

    angular.module("app").service("watchHistoryItem", ["$q", "watchHistoryService", watchHistoryItem]);

})();
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
(function () {

    "use strict";


    function accountManager(localStorageManager) {
    
        var self = this;

        Object.defineProperty(self, "currentAccount",
            { set: function (value) { localStorageManager.put({ name: "currenAccount",value: value }); } },
            { get: function () { return localStorageManager.get({ name: "currentAccount"}); } }
            );

        Object.defineProperty(self, "currentProfile",
            { set: function (value) { localStorageManager.put({ name: "currentProfile", value: value }); } },
            { get: function () { return localStorageManager.get({ name: "currentProfile" }); } }
            );


        Object.defineProperty(self, "currentProfiles",
            { set: function (value) { localStorageManager.put({ name: "currentProfiles", value: value }); } },
            { get: function () { return localStorageManager.get({ name: "currentProfiles" }); } }
            );

        return self;
    }

    angular.module("app").service("accountManager",["localStorageManager", accountManager]);

})();


(function () {

    "use strict";


    function playlistManager(localStorageManager) {

        var self = this;

        Object.defineProperty(self, "currentPlaylist",
            { set: function (value) { localStorageManager.put({ name: "currentPlaylist", value: value }); } },
            { get: function () { return localStorageManager.get({ name: "currentPlaylist" }); } }
            );

        return self;
    }

    angular.module("app").service("playlistManager", ["localStorageManager", playlistManager]);

})();




(function () {

    "use strict";


    function watchHistoryManager(localStorageManager) {

        var self = this;

        Object.defineProperty(self, "currentWatchHistory",
            { set: function (value) { localStorageManager.put({ name: "currentWatchHistory", value: value }); } },
            { get: function () { return localStorageManager.get({ name: "currentWatchHistory" }); } }
            );

        return self;
    }

    angular.module("app").service("watchHistoryManager", ["localStorageManager", watchHistoryManager]);

})();