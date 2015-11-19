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
            "<div class='links'>",
            "<a href='#/login'>Sign In</a>",
            "<a href='#/register'>Register</a>",
            "</div>",
            "<div style='clear:both;'></div>",
            "</div>"
        ].join(" ")
    });

})();

