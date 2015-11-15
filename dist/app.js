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
            "<app-header></app-header>",
            "<div data-ng-view=''></div>",
            "</div>"
        ].join(" ")
    });

})();





(function () {

    "use strict";

    function HeaderComponent(securityManager) {

        var self = this;

        self.isLoggedIn = function () {
            return (securityManager.token != null);
        }

        return self;
    }

    ngX.Component({
        selector: "app-header",
        component: HeaderComponent,
        providers: ["securityManager"],
        styles: [
            ".app-header { width:100%; } ",
            ".app-header a { text-decoration:none; } ",
            ".app-header { padding-top:10px; padding-left:20px; padding-right:20px; height:100px; } ",
            ".app-header h1 { font-size: 2em } ",
            ".app-header .title { position:relative; float: left; width: 500px; } ",
            ".app-header .links { position:relative; float: right; width: 400px; } ",
        ].join(" \n "),
        template: [
            "<div class='app-header'>",
            "<div class='title'>",
            "<h1 href='#/'>Angular Frontend VOD</h1>",
            "</div>",
            "<div class='links'>",
            "<a href='#/login'>Sign In</a>",
            "<a href='#/register'>Register</a>",
            "</div>",
            "<div style='clear:both;'></div>",
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

    function loginComponent() {

    }

    ngX.Component({
        component: loginComponent,
        providers: ["conference"]
    });

})();



(function () {

    "use strict";

    function LoginFormComponent($location, securityManager) {
        var self = this;

        self.username = "";

        self.password = "";

        self.tryToLogin = function () {
            securityManager.token = true;
            $location.path("/");
        }
        return self;
    }

    ngX.Component({
        selector: "login-form",
        component: LoginFormComponent,
        providers: ["$location", "securityManager"],
        styles: [" .login-form div {  padding-bottom: 15px; } "].join(" /n "),
        template: [
            "<form class='login-form'> ",
            "    <div> ",
            "        <input type='text' placeholder='Username' data-ng-model='vm.username' /> ",
            "    </div> ",
            "    <div> ",
            "        <input type='password' placeholder='Password' data-ng-model='vm.username' /> ",
            "    </div> ",
            "    <div> ",
            "        <button data-ng-click='vm.tryToLogin()' >Login</button> ",
            "    </div> ",
            "</form> "
        ].join(" ")
    });

})();









(function () {

    "use strict";

    function registrationComponent() {

    }

    ngX.Component({
        component: registrationComponent
    });

})();



(function () {

    "use strict";

    function registrationFormComponent($location, account) {
        var self = this;

        self.username = "";

        self.firstName = "";

        self.lastName = "";

        self.password = "";

        self.tryToRegister = function () {
            securityManager.token = true;
            $location.path("/");
        }
        return self;
    }

    ngX.Component({
        selector: "registration-form",
        component: registrationFormComponent,
        providers: ["account"],
        styles: [" .registration-form div {  padding-bottom: 15px; } "].join(" /n "),
        template: [
            "<form class='login-form'> ",
            "    <div> ",
            "        <input type='text' placeholder='Username' data-ng-model='vm.username' /> ",
            "    </div> ",
            "    <div> ",
            "        <input type='text' placeholder='Firstname' data-ng-model='vm.username' /> ",
            "    </div> ",
            "    <div> ",
            "        <input type='text' placeholder='Lastname' data-ng-model='vm.lastname' /> ",
            "    </div> ",
            "    <div> ",
            "        <input type='password' placeholder='Password' data-ng-model='vm.password' /> ",
            "    </div> ",
            "    <div> ",
            "        <input type='password' placeholder='Repeat Password' data-ng-model='vm.password' /> ",
            "    </div> ",
            "    <div> ",
            "        <button data-ng-click='vm.tryToRegister()' >Register</button> ",
            "    </div> ",
            "</form> "
        ].join(" ")
    });

})();





(function () {

    "use strict";

    function searchComponent() {

    }

    ngX.Component({
        component: searchComponent
    });

})();



(function () {

    "use strict";

    function videoComponent() {

    }

    ngX.Component({
        component: videoComponent
    });

})();



(function () {

    "use strict";

    function videoPlayerComponent() {

    }

    ngX.Component({
        component: videoPlayerComponent
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

    angular.module("app").service("collectionItem", ["$q", "collectionDataService", collectionItem]);

})();
(function () {

    "use strict";

    function conference($injector, $q, fire, conferenceDataService) {

        var self = this;

        self.createInstanceAsync = function (options) {
            var deferred = $q.defer();
            var instance = new account($q, conferenceDataService);

            if (options.data) {
                var promises = [];
                instance.name = options.data.name;

                if (options.data.videos && options.data.videos.length > 0) {

                    var video = $injector.get("video");
                    var promises = [];
                    for (var i = 0; i < options.data.videos.length; i++) {
                        promises.push(video.createInstanceAsync({ data: options.data.videos[i] }));
                    }

                    $q.all(promises).then(function (videos) {
                        instance.videos = videos;
                        deferred.resolve(instance);
                    });
                }
                else {
                    deferred.resolve(instance);
                }
                
            } else {
                deferred.resolve(instance);
            }
            return deferred.promise;
        };

        self.name = "";

        return self;

    }

    angular.module("app").service("conference", ["$injector", "$q", "fire", "conferenceDataService", conference]);

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

    function playlistItem($q, playlistItemDataService) {

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

    function video($q, conference, videoDataService) {

        var self = this;

        return this;

    }

    angular.module("app").service("video", ["$q", "conference", "videoDataService", video]);

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


    function accountDataService($q, apiEndpoint,dataService) {

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

        self.baseUri = apiEndpoint.getBaseUrl("account");

        return self;
    }

    angular.module("app").service("accountDataService", ["$q", "apiEndpoint", "dataService", accountDataService]);

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
(function () {

    "use strict";


    function playlistDataService($q, apiEndpoint, dataService) {

        var self = this;

        self.getPlaylist = function (options) {
            return dataService.fromService({ method: "GET", url: self.baseUri + "/getPlaylist", params: { profileId: options.profileId } });            
        };

        self.addToPlaylist = function (options) {
            return dataService.fromService({
                method: "POST", url: self.baseUri + "/addToPlaylist",
                data: { playlistId: options.profileId, videoId: options.videoId }
            });
        };

        self.removeFromPlaylist = function (options) {
            return dataService.fromService({
                method: "POST", url: self.baseUri + "/removeFromPlaylist",
                data: { playlistId: options.profileId, videoId: options.videoId }
            });
        };

        self.baseUri = apiEndpoint.getBaseUrl("playlist");

        return self;
    }

    angular.module("app").service("playlistDataService", ["$q", "apiEndpoint", "dataService", playlistDataService]);

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
(function () {

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