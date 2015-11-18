(function () {

    "use strict";

    function loginComponent(loginRedirect) {
        var self = this;

        self.onStoreUpdate = function (options) {
            
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


