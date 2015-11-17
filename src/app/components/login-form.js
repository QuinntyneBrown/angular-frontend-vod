(function () {

    "use strict";

    function LoginFormComponent($location, securityActions) {
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
            "        <input type='password' placeholder='Password' data-ng-model='vm.username' /> ",
            "    </div> ",
            "    <div> ",
            "        <button data-ng-click='vm.tryToLogin()' >Login</button> ",
            "    </div> ",
            "</form> "
        ].join(" ")
    });

})();




