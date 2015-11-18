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


