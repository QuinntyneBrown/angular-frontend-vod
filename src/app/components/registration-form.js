(function () {

    "use strict";

    function registrationFormComponent($location, account) {
        var self = this;

        self.username = "";

        self.firstName = "";

        self.lastName = "";

        self.password = "";

        self.tryToRegister = function () {
            securityStore.token = true;
            $location.path("/");
        }
        return self;
    }

    ngX.Component({
        selector: "registration-form",
        component: registrationFormComponent,
        providers: ["account"],
        styles: [" .registration-form div {  padding-bottom: 15px; } "].join(" /n "),
        template: [
            "<form class='login-form'> ",
            "    <div> ",
            "        <input type='text' placeholder='Username' data-ng-model='vm.username' /> ",
            "    </div> ",
            "    <div> ",
            "        <input type='text' placeholder='Firstname' data-ng-model='vm.username' /> ",
            "    </div> ",
            "    <div> ",
            "        <input type='text' placeholder='Lastname' data-ng-model='vm.lastname' /> ",
            "    </div> ",
            "    <div> ",
            "        <input type='password' placeholder='Password' data-ng-model='vm.password' /> ",
            "    </div> ",
            "    <div> ",
            "        <input type='password' placeholder='Repeat Password' data-ng-model='vm.password' /> ",
            "    </div> ",
            "    <div> ",
            "        <button data-ng-click='vm.tryToRegister()' >Register</button> ",
            "    </div> ",
            "</form> "
        ].join(" ")
    });

})();




