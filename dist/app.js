angular.module("app", ["ngX.components"]).config(["$routeProvider", function ($routeProvider) {
    $routeProvider.buildFromUrl({ url: "routes.json" });
}]).run(["$rootScope", function ($rootScope) {
    $rootScope.title = "Angular Frontend Video On Demand";
}]);
(function () {

    "use strict";


    function accountActions(apiEndpoint, fetch) {

        var self = this;

        self.register = function (options) {
            fetch.fromService({ method: "POST", url: self.baseUri + "/register", data: options.data });
        };

        self.setCurrentProfile = function (options) {
            fetch.fromService({ method: "PUT", url: self.baseUri + "/setCurrentProfile", data: options.data });
        };

        self.setDefaultProfile = function (options) {
            fetch.fromService({ method: "PUT", url: self.baseUri + "/setDefaultProfile", data: options.data });
        };

        self.baseUri = apiEndpoint.getBaseUrl("account");

        return self;
    }

    angular.module("app").service("accountActions", ["$q", "apiEndpoint", "fetch", "fire", accountActions]);

})();
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
(function () {

    "use strict";


    function conferenceActions(apiEndpoint, fetch) {

        var self = this;

        self.getAll = function (options) {
            fetch.fromService({
                method: "GET", url: self.baseUri + "/getAll"
            });
        };

        self.baseUri = apiEndpoint.getBaseUrl("conference");

        return self;
    }

    angular.module("app").service("conferenceActions", ["apiEndpoint", "fetch", conferenceActions]);

})();
(function () {

    "use strict";


    function playlistActions(apiEndpoint, fetch) {

        var self = this;

        self.getPlaylist = function (options) {
            fetch.fromService({ method: "GET", url: self.baseUri + "/getPlaylist", params: { profileId: options.profileId } });            
        };

        self.addToPlaylist = function (options) {
            fetch.fromService({
                method: "POST", url: self.baseUri + "/addToPlaylist",
                data: { playlistId: options.profileId, videoId: options.videoId }
            });
        };

        self.removeFromPlaylist = function (options) {
            fetch.fromService({
                method: "POST", url: self.baseUri + "/removeFromPlaylist",
                data: { playlistId: options.profileId, videoId: options.videoId }
            });
        };

        self.baseUri = apiEndpoint.getBaseUrl("playlist");

        return self;
    }

    angular.module("app").service("playlistActions", ["apiEndpoint", "dataService", playlistActions]);

})();
(function () {

    "use strict";


    function profileActions(apiEndpoint, fetch) {

        var self = this;

        self.getAll = function (options) {
            fetch.fromService({
                method: "GET", url: self.baseUri + "/getAll",
                params: { accountId: options.accountId }
            });
        };

        self.baseUri = apiEndpoint.getBaseUrl("profile");

        return self;
    }

    angular.module("app").service("profileActions", ["apiEndpoint", "dataService", profileActions]);

})();
(function () {

    "use strict";

    function videoActions(apiEndpoint, fetch) {

        var self = this;

        self.getAll = function (options) {
            fetch.fromService({ method: "GET", url: self.baseUri + "/getAll"});
        };

        self.baseUri = apiEndpoint.getBaseUrl("video");

        return self;
    }

    angular.module("app").service("videoActions", ["$q", "apiEndpoint", "fetch", videoActions]);

})();
(function () {

    "use strict";


    function watchHistoryActions(apiEndpoint, fetch) {

        var self = this;

        self.get = function (options) {
            fetch.fromService({ method: "GET", url: self.baseUri + "/get" });
        };

        self.baseUri = apiEndpoint.getBaseUrl("watchHistory");

        return self;
    }

    angular.module("app").service("watchHistoryActions", ["apiEndpoint", "fetch", watchHistoryActions]);

})();
(function () {

    "use strict";

    function accountManagementComponent() {

    }

    ngX.Component({
        component: accountManagementComponent,
        template: ["<div class='account-management'>", "</div>"].join(" ")
    });

})();
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

    function cardComponent($scope, securityStore) {

        var self = this;

        self.isLoggedIn = function () {
            return (securityStore.token != null);
        }

        self.addToPlaylist = function(options) {
            $scope.$emit({ action: "ADD_TO_PLAYLIST", data: {                
                model: self.model,
                currentUser: securityStore.currentUser
            }});
        }


        return self;
    }

    ngX.Component({
        selector: "card",
        component: cardComponent,
        providers: ["$scope","securityStore"],
        inputs:["model"],
        styles: [

        ].join(" \n "),
        template: [

        ].join(" ")
    });

})();


(function () {

    "use strict";

    function collectionComponent() {

    }

    ngX.Component({
        component: collectionComponent,
        template: ["<div class='collection'>", "</div>"].join(" ")
    });

})();
(function () {

    "use strict";

    function collectionsComponent() {

    }

    ngX.Component({
        component: collectionsComponent,
        template: ["<div class='collections'>", "</div>"].join(" ")
    });

})();
(function () {

    "use strict";

    function conferenceComponent() {

    }

    ngX.Component({
        component: conferenceComponent,
        template: ["<div class='conference'>", "</div>"].join(" ")
    });

})();
(function () {

    "use strict";

    function HeaderComponent(securityStore) {

        var self = this;

        self.isLoggedIn = function () {
            return (securityStore.token != null);
        }

        return self;
    }

    ngX.Component({
        selector: "app-header",
        component: HeaderComponent,
        providers: ["securityStore"],
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
        component: HomeComponent,
        template: ["<div class='home'>", "</div>"].join(" ")
    });

})();



(function () {

    "use strict";

    function LoginFormComponent($location, securityStore) {
        var self = this;

        self.username = "";

        self.password = "";

        self.tryToLogin = function () {
            securityStore.token = true;
            $location.path("/");
        }
        return self;
    }

    ngX.Component({
        selector: "login-form",
        component: LoginFormComponent,
        providers: ["$location", "securityStore"],
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

    function loginComponent() {

    }

    ngX.Component({
        component: loginComponent,
        template: ["<div class='login'>",
            "<login-form></login-form>",
            "</div>"
        ].join(" ")
    });

})();



(function () {

    "use strict";

    function personalizeComponent() {

    }

    ngX.Component({
        component: personalizeComponent,
        template: ["<div class='personalize'>", "</div>"].join(" ")
    });

})();



(function () {

    "use strict";

    function playlistComponent() {

    }

    ngX.Component({
        component: playlistComponent,
        template: ["<div class='playlist'>", "</div>"].join(" ")
    });

})();
(function () {

    "use strict";

    function profileComponent() {

    }

    ngX.Component({
        component: profileComponent,
        template: ["<div class='profile'>", "</div>"].join(" ")
    });

})();



(function () {

    "use strict";

    function profileManagementComponent() {

    }

    ngX.Component({
        component: profileManagementComponent,
        template: ["<div class='profile-management'>", "</div>"].join(" ")
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
            securityStore.token = true;
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

    function registrationComponent() {

    }

    ngX.Component({
        component: registrationComponent,
        template: ["<div class='registration'>",
            "<registration-form></registration-form>",
            "</div>"].join(" ")
    });

})();



(function () {

    "use strict";

    function searchComponent() {

    }

    ngX.Component({
        component: searchComponent,
        template: ["<div class='search'>", "</div>"].join(" ")
    });

})();



(function () {

    "use strict";

    function videoPlayerComponent() {

    }

    ngX.Component({
        component: videoPlayerComponent,
        template: ["<div class='video-player'>", "</div>"].join(" ")
    });

})();



(function () {

    "use strict";

    function videoComponent() {

    }

    ngX.Component({
        component: videoComponent,
        template: ["<div class='video'>", "</div>"].join(" ")
    });

})();



(function () {

    "use strict";

    function watchHistoryComponent() {

    }

    ngX.Component({
        component: watchHistoryComponent,
        template: ["<div class='watch-history'>", "</div>"].join(" ")
    });

})();



(function () {

    "use strict";

    function account($injector, $q, accountDataService, fire) {

        var self = this;

        var profile = $injector.get("profile");

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

    angular.module("app").service("account", ["$injector", "$q", "accountDataService", "fire", account]);

})();
(function () {

    "use strict";

    function collectionItem($q, collecitonDataService) {

        var self = this;

        return this;

    }

    angular.module("app").service("collectionItem", ["$injector", "$q", "collectionDataService", collectionItem]);

})();
(function () {

    "use strict";

    function collection($injector, $q, collecitonDataService) {

        var self = this;

        return this;

    }

    angular.module("app").service("collection", ["$injector", "$q", "collectionDataService", collection]);

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

    function playlistItem($q, playlistItemDataService) {

        var self = this;

        return this;

    }

    angular.module("app").service("playlistItem", ["$injector", "$q", "playlistItemDataService", playlistItem]);

})();
(function () {

    "use strict";

    function playlist($q, playlistDataService) {

        var self = this;

        return this;

    }

    angular.module("app").service("playlist", ["$injector", "$q", "playlistDataService", playlist]);

})();
(function () {

    "use strict";

    function profile($injector, $q, fire, profileDataService) {

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

    angular.module("app").service("profile", ["$injector", "$q", "fire", "profileDataService", profile]);

})();
(function () {

    "use strict";

    function profiles($injector, $q, profileDataService) {

        var self = this;

        return this;

    }

    angular.module("app").service("profiles", ["$injector", "$q", "profileDataService", profiles]);

})();
(function () {

    "use strict";

    function video($injector, $q, conference, playlistStore, videoDataService, watchHistoryStore) {

        var self = this;

        self.createInstanceAsync = function(options) {
            var instance = new video($injector, $q, conference, playlistStore, videoDataService, watchHistoryStore);


            playlistStore.subscribe("PLAYLIST_UPDATE", instance.onStoreUpdate);

            return $q.when(instance);
        };

        self.onStoreUpdate = function(options) {

        };

        self.onPlaylist = false;

        return self;

    }

    angular.module("app").service("video", ["$injector", "$q", "playlistStore", "videoDataService", "watchHistoryStore", video]);

})();
(function () {

    "use strict";

    function watchHistoryItem($injector, $q, watchHistoryService) {
        var self = this;
        self.createInstanceAsync = function () {
            var instance = new watchHistoryItem($injector, $q, watchHistoryService);
            return $q.when(instance);
        };
        return self;
    }

    angular.module("app").service("watchHistoryItem", ["$injector", "$q", "watchHistoryService", watchHistoryItem]);

})();
(function () {

    "use strict";

    function watchHistory($injector, $q, watchHistoryService) {

        var self = this;

        return this;

    }

    angular.module("app").service("watchHistory", ["$injector", "$q", "watchHistoryService", watchHistory]);

})();
(function () {

    "use strict";


    function accountStore(localStorageManager) {
    
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

    angular.module("app").service("accountStore",["localStorageManager", accountStore]);

})();
(function () {

    "use strict";


    function playlistStore(fire, localStorageManager) {

        document.addEventListener("FETCH_SUCCESS", (event) => {
            if (event.options.url === "/addToPlaylist") {
                // check of it was a success post to the add playlist endpoint and update the store
                // fire notitification
                fire(self.bodyNativeElement, "storeUpdate", { currentPlaylist: self.currentPlaylist });
            }
        });

        var self = this;

        Object.defineProperty(self, "currentPlaylist",
            { set: function (value) { localStorageManager.put({ name: "currentPlaylist", value: value }); } },
            { get: function () { return localStorageManager.get({ name: "currentPlaylist" }); } }
            );

        Object.defineProperty(self, "bodyNativeElement",
            { get: function () { return document.getElementsByTagName("body")[0]; } }
            );

        return self;
    }

    angular.module("app").service("playlistStore", ["fire","localStorageManager", playlistStore]);

})();
(function () {

    "use strict";


    function videoStore(localStorageManager) {

        var self = this;

        Object.defineProperty(self, "currentvideo",
            { set: function (value) { localStorageManager.put({ name: "currentvideo", value: value }); } },
            { get: function () { return localStorageManager.get({ name: "currentvideo" }); } }
            );

        return self;
    }

    angular.module("app").service("videoStore", ["localStorageManager", videoStore]);

})();
(function () {

    "use strict";


    function watchHistoryStore(localStorageManager) {

        var self = this;

        Object.defineProperty(self, "currentWatchHistory",
            { set: function (value) { localStorageManager.put({ name: "currentWatchHistory", value: value }); } },
            { get: function () { return localStorageManager.get({ name: "currentWatchHistory" }); } }
            );

        return self;
    }

    angular.module("app").service("watchHistoryStore", ["localStorageManager", watchHistoryStore]);

})();