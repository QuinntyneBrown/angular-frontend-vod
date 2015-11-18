(function () {

    "use strict";

    function HomeComponent() {

    }

    homeComponent.canActivate = function () {
        return ["$q", function ($q) {

        }];
    }

    ngX.Component({
        component: HomeComponent,
        template: ["<div class='home'>", "</div>"].join(" ")
    });

})();


