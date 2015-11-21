angular.module("app", ["ngX","ngX.components"]).config(["$routeProvider", "apiEndpointProvider", function ($routeProvider, apiEndpointProvider) {
    $routeProvider.buildFromUrl({ url: "routes.json" });
    apiEndpointProvider.configure("http://localhost:54471/api");
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
angular.module("app").value("VIDEO_ACTIONS", {
    UPDATE_VIDEO_STORE_FEATURED_VIDEOS: "UPDATE_VIDEO_STORE_FEATURED_VIDEOS"
});

angular.module("app").value("PLAYLIST_ACTIONS", {
    
});

angular.module("app").value("ACCOUNT_ACTIONS", {

});

angular.module("app").value("COLLECTION_ACTIONS", {

});

angular.module("app").value("PROFILE_ACTIONS", {

});

angular.module("app").value("WATCH_HISTORY_ACTIONS", {

});
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


    function playlistActions(apiEndpoint, fetch, PLAYLIST_ACTIONS) {

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

    angular.module("app").service("playlistActions", ["apiEndpoint", "fetch","PLAYLIST_ACTIONS", playlistActions]);

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

    angular.module("app").service("profileActions", ["apiEndpoint", "Actions", profileActions]);

})();
(function () {

    function securityActions(apiEndpoint, fetch, formEncode, guid) {
        var self = this;
        self.tryToLogin = function (options) {
            angular.extend(options.data, { grant_type: "password" });
            var formEncodedData = formEncode(options.data);
            var headers = { "Content-Type": "application/x-www-form-urlencoded" };
            fetch.fromService({ method: "POST", url:  self.baseUri + "/token", data: formEncodedData, headers: headers });
        };
        self.baseUri = apiEndpoint.getBaseUrl("security") + "/security";
        return self;
    }

    angular.module("app")
        .service("securityActions", ["apiEndpoint", "fetch", "formEncode", "guid", securityActions]);

})();
(function () {

    "use strict";

    function videoActions(apiEndpoint, fetch, fire, guid, VIDEO_ACTIONS) {
        var self = this;
        self.getFeatured = function (options) {
            var newGuid = guid();
            var url = self.baseUri + "/getFeatured";
            fetch.fromService({ method: "GET", url: url, guid: newGuid });
            document.addEventListener("FETCH_SUCCESS", onSuccess);
            function onSuccess(results) {
                document.removeEventListener("FETCH_SUCCESS", onSuccess);
                if (results.options.guid === newGuid) {
                    fire(document, VIDEO_ACTIONS.UPDATE_VIDEO_STORE_FEATURED_VIDEOS, { data: results.results.data, guid: newGuid });
                }
            }
            return newGuid;
        };
        self.baseUri = apiEndpoint.getBaseUrl("video") + "/video";
        return self;
    }

    angular.module("app").service("videoActions", ["apiEndpoint", "fetch", "fire","guid", "VIDEO_ACTIONS", videoActions]);

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
        var self = this;

        return self;
    }

    accountManagementComponent.canActivate = function () {
        return ["$q", function ($q) {

        }];
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

    function cardComponent() {

        var self = this;

        self.onAdd = function(options) {
            if (self.model && self.model.onAdd)
                self.model.onAdd();
        }

        self.onRemove = function (options) {
            if (self.model && self.model.onRemove)
                self.model.onRemove(options);
        }

        self.onStoreUpdate = function (options) {
            if (self.model && self.model.onStoreUpdate)
                self.model.onAdd(options);
        }

        return self;
    }

    ngX.Component({
        selector: "card",
        component: cardComponent,
        inputs:["model"],
        styles: [
            " .cardComponent { }"
        ].join(" \n "),
        template: [

        ].join(" ")
    });

})();


(function () {

    "use strict";

    function collectionComponent() {

    }

    collectionComponent.canActivate = function () {
        return ["$q", function ($q) {

        }];
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

    collectionsComponent.canActivate = function () {
        return ["$q", function ($q) {

        }];
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

    conferenceComponent.canActivate = function () {
        return ["$q", function ($q) {

        }];
    }

    ngX.Component({
        component: conferenceComponent,
        template: ["<div class='conference'>", "</div>"].join(" ")
    });

})();
(function () {

    "use strict";

    function HeaderComponent($rootScope, securityStore) {

        var self = this;

        self.isLoggedIn = function () {
            return (securityStore.token !== null);
        }

        self.onStoreUpdate = function () {
            
        }

        return self;
    }

    ngX.Component({
        selector: "app-header",
        component: HeaderComponent,
        providers: ["$rootScope","securityStore"],
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

            "<div class='links' data-ng-if='!vm.isLoggedIn()'>",
            "<a href='#/login'>Sign In</a>",
            "<a href='#/register'>Register</a>",
            "</div>",

            "<div class='links' data-ng-if='vm.isLoggedIn()'>",
            "<a href='#/login'>Logout</a>",
            "</div>",

            "<div style='clear:both;'></div>",
            "</div>"
        ].join(" ")
    });

})();


(function () {

    "use strict";

    function HomeComponent(videoStore) {
        var self = this;

        self.featuredVideos = videoStore.featuredVideos;

        return self;
    }

    HomeComponent.canActivate = function () {
        return ["$q", "videoActions", "securityStore", function ($q, videoActions, securityStore) {
            var deferred = $q.defer();            
            var guid = videoActions.getFeatured();            
            document.addEventListener("STORE_UPDATE", resolve);
            function resolve() {
                document.removeEventListener("STORE_UPDATE", resolve);
                if (event.guid === guid)
                    deferred.resolve(true);                    
            }
            return deferred.promise;
        }];
    }

    ngX.Component({
        component: HomeComponent,
        route: "/",
        providers:["videoStore"],
        template: [
            "<div class='home'>",
            "<p>{{ vm.featuredVideos }}</p>",
            "</div>"
        ].join(" ")
    });

})();



(function () {

    "use strict";

    function LoginFormComponent($location,  securityActions) {
        var self = this;
        self.username = "";
        self.password = "";
        self.tryToLogin = function () {
            securityActions.tryToLogin({
                data: {
                    username: self.username,
                    password: self.password
                }
            });
        }

        return self;
    }

    ngX.Component({
        selector: "login-form",
        component: LoginFormComponent,
        providers: ["$location", "securityActions"],
        styles: [" .login-form div {  padding-bottom: 15px; } "].join(" /n "),
        template: [
            "<form class='login-form'> ",
            "    <div> ",
            "        <input type='text' placeholder='Username' data-ng-model='vm.username' /> ",
            "    </div> ",
            "    <div> ",
            "        <input type='password' placeholder='Password' data-ng-model='vm.password' /> ",
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

    function loginComponent(loginRedirect) {
        var self = this;

        self.onStoreUpdate = function (options) {
            loginRedirect.redirectPreLogin();
        }

        return self;
    }

    ngX.Component({
        component: loginComponent,
        providers: ["loginRedirect"],
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

    personalizeComponent.canActivate = function () {
        return ["$q", function ($q) {

        }];
    }

    ngX.Component({
        component: personalizeComponent,
        template: ["<div class='personalize'>", "</div>"].join(" ")
    });

})();



(function () {

    "use strict";

    function playlistComponent() {

        var self = this;

        self.onInit = function () {
            return ["$q", function ($q) {

            }];
        }


        return self;
      
    }

    playlistComponent.canActivate = function () {
        return ["$q", function ($q) {

        }];
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

    profileComponent.canActivate = function () {
        return ["$q", function ($q) {

        }];
    }

    ngX.Component({
        component: profileComponent,
        template: ["<div class='profile'>", "</div>"].join(" ")
    });

})();



(function () {

    "use strict";

    function profilesManagementComponent() {

    }

    profilesManagementComponent.canActivate = function () {
        return ["$q", function ($q) {

        }];
    }
    ngX.Component({
        component: profilesManagementComponent,
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

    registrationFormComponent.canActivate = function () {
        return ["$q", function ($q) {

        }];
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

    searchComponent.canActivate = function () {
        return ["$q", function ($q) {

        }];
    }

    ngX.Component({
        component: searchComponent,
        template: ["<div class='search'>", "</div>"].join(" ")
    });

})();



(function () {

    "use strict";

    function slideComponent() {

        var self = this;

        self.onAdd = function (options) {
            if (self.model && self.model.onAdd)
                self.model.onAdd();
        }

        self.onRemove = function (options) {
            if (self.model && self.model.onRemove)
                self.model.onRemove();
        }

        self.onStoreUpdate = function (options) {
            if (self.model && self.model.onStoreUpdate)
                self.model.onAdd();
        }

        return self;
    }

    ngX.Component({
        selector: "slide",
        component: slideComponent,
        inputs: ["model"],
        styles: [
            " .slideComponent { }"
        ].join(" \n "),
        template: [

        ].join(" ")
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

    videoComponent.canActivate = function () {
        return ["$q", function ($q) {

        }];
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

    watchHistoryComponent.canActivate = function () {
        return ["$q", function ($q) {

        }];
    }

    ngX.Component({
        component: watchHistoryComponent,
        template: ["<div class='watch-history'>", "</div>"].join(" ")
    });

})();



(function () {

    "use strict";

    function account($injector, $q, accountActions, fire) {

        var self = this;

        var profile = $injector.get("profile");

        self.createInstanceAsync = function (options) {
            var deferred = $q.defer();
            var instance = new account($q, accountActions, profile);

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
            accountActions.register(options).then(function () {
                self.fire("modelUpdate", { model: self });
            });
        };

        self.setDefaultProfile = function (options) {
            self.fire = fire;
            accountActions.setDefaultProfile(options).then(function () {
                self.fire("modelUpdate", {
                    action: "update",
                    model: self
                });
            });
        };

        self.setCurrentProfile = function (options) {
            self.fire = fire;
            accountActions.setCurrentProfile(options).then(function () {
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

    angular.module("app").service("account", ["$injector", "$q", "accountActions", "fire", account]);

})();
(function () {

    "use strict";

    function collectionItem($q, collectionActions) {

        var self = this;

        self.onAdd = function (options) {
            collectionActions.add({

            });
        }

        self.onRemove = function (options) {
            collectionActions.remove({

            });
        }

        self.onStoreUpdate = function (options) {

        }

        return self;

    }

    angular.module("app").service("collectionItem", ["$injector", "$q", "collectionActions", collectionItem]);

})();
(function () {

    "use strict";

    function collection($injector, $q, collectionActions) {

        var self = this;

        self.onStoreUpdate = function (options) {

        }

        return self;

    }

    angular.module("app").service("collection", ["$injector", "$q", "collectionActions", collection]);

})();
(function () {

    "use strict";

    function conference($injector, $q, fire, conferenceActions) {

        var self = this;

        self.createInstanceAsync = function (options) {
            var deferred = $q.defer();
            var instance = new account($q, conferenceActions);

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

    angular.module("app").service("conference", ["$injector", "$q", "fire", "conferenceActions", conference]);

})();
(function () {

    "use strict";

    function playlistItem($injector, $q, playlistItemActions) {

        var self = this;

        self.onAdd = function (options) {
            playlistItemActions.addToPlaylist({

            });
        }

        self.onRemove = function (options) {
            playlistItemActions.removeFromPlaylist({

            });
        }

        self.onStoreUpdate = function (options) {

        }

        return self;

    }

    angular.module("app").service("playlistItem", ["$injector", "$q", "playlistItemActions", playlistItem]);

})();
(function () {

    "use strict";

    function playlist($injector, $q, playlistActions) {

        var self = this;

        self.onStoreUpdate = function (options) {

        }

        return self;

    }

    angular.module("app").service("playlist", ["$injector", "$q", "playlistActions", playlist]);

})();
(function () {

    "use strict";

    function profile($injector, $q, fire, profileActions) {

        var self = this;

        self.createInstanceAsync = function (options) {
            var deferred = $q.defer();
            var instance = new account($q, profileActions);

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
            profileActions.add(options).then(function () {
                self.fire("modelUpdate", {
                    action:"add",
                    model: self
                });
            });
        };

        self.update = function (options) {
            self.fire = fire;
            profileActions.update(options).then(function () {
                self.fire("modelUpdate", {
                    action: "update",
                    model: self
                });
            });
        };

        self.remove = function (options) {
            self.fire = fire;
            profileActions.remove(options).then(function () {
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

    angular.module("app").service("profile", ["$injector", "$q", "fire", "profileActions", profile]);

})();
(function () {

    "use strict";

    function profiles($injector, $q, profileActions) {

        var self = this;

        self.onStoreUpdate = function (options) {

        }

        return self;

    }

    angular.module("app").service("profiles", ["$injector", "$q", "profileActions", profiles]);

})();
(function () {

    "use strict";

    function video($injector, $location, $q) {

        var self = this;


        self.createInstanceAsync = function(options) {
            var instance = new video($injector, $q);

            instance.playlistActions = $injector("playlistActions");
            instance.playlistStore = $injector("playlistStore");
            instance.securityStore = $injector("securityStore");
            instance.videoActions = $injector("videoActions");
            instance.watchHistoryActions = $injector("watchHistoryActions");
            instance.watchHistoryStore = $injector("watchHistoryStore");

            if (options.data) {
                instance.id = options.data.id;
            }

            return $q.when(instance);
        };

        self.onStoreUpdate = function(options) {

        };

        self.onAdd = function (options) {
            this.playlistactions.addToPlaylist({
                data: {
                    username: self.username,
                    password: self.password
                }
            });
        };

        self.onClick = function (options) {
            $location.path("/video/play/" + self.id);
        };

        self.onPlaylist = false;
        self.id = 0;

        return self;

    }

    angular.module("app").service("video", [
        "$injector",
        "$location",
        "$q",
        video]);

})();
(function () {

    "use strict";

    function watchHistoryItem($injector, $q, watchHistoryActions, watchHistoryStore) {
        var self = this;

        self.createInstanceAsync = function () {
            var instance = new watchHistoryItem($injector, $q, watchHistoryActions, watchHistoryStore);
            return $q.when(instance);
        };

        self.onStoreUpdate = function (options) {

        }

        self.onRemove = function (options) {
            watchHistoryActions.remove({

            });
        }


        return self;
    }

    angular.module("app").service("watchHistoryItem", ["$injector", "$q", "watchHistoryActions", "watchHistoryActions", watchHistoryItem]);

})();
(function () {

    "use strict";

    function watchHistory($injector, $q, watchHistoryService) {

        var self = this;

        self.onStoreUpdate = function () {

        }

        return self;

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


    function playlistStore(fire, localStorageManager, PLAYLIST_ACTIONS) {

        var self = this;

        self.currentPlaylist = null;

        return self;
    }

    angular.module("app").service("playlistStore", ["fire","localStorageManager", "PLAYLIST_ACTIONS", playlistStore]);

})();
(function () {

    "use strict";


    function videoStore($rootScope, fire, localStorageManager, video, VIDEO_ACTIONS) {

        var self = this;

        Object.defineProperty(self, "currentvideo",
            { set: function (value) { localStorageManager.put({ name: "currentvideo", value: value }); } },
            { get: function () { return localStorageManager.get({ name: "currentvideo" }); } }
            );

        self.featuredVideos = null;

        self.onUpdateVideoStoreFeaturedVideos = function (event) {
            self.featuredVideos = event.data;
            fire(document,"STORE_UPDATE",{ guid: event.guid, storeName: "VIDEO_STORE" })
        }


        document.addEventListener(VIDEO_ACTIONS.UPDATE_VIDEO_STORE_FEATURED_VIDEOS, self.onUpdateVideoStoreFeaturedVideos);
 
        return self;
    }

    angular.module("app")
        .service("videoStore", ["$rootScope", "fire","localStorageManager","video","VIDEO_ACTIONS", videoStore])
        .run(["videoStore", function (videoStore) {

        }]);
    
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