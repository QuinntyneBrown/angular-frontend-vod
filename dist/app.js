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














 















