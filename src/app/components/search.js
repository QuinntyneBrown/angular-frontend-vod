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


