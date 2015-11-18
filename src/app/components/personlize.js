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


