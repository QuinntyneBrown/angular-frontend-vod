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