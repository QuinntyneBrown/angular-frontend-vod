angular.module("app", ["ngX","ngX.components"]).config(["$routeProvider", "apiEndpointProvider", function ($routeProvider, apiEndpointProvider) {
    $routeProvider.buildFromUrl({ url: "routes.json" });
    apiEndpointProvider.configure("http://localhost:54471/api")
    apiEndpointProvider.configure("http://localhost:50940/api", "security")
}]).run(["$rootScope", function ($rootScope) {
    $rootScope.title = "Angular Frontend Video On Demand";
}]);