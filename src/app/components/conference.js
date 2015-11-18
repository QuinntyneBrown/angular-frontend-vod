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