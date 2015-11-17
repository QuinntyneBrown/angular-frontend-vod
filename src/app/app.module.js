angular.module("app", ["ngX","ngX.components"]).config(["$routeProvider", "apiEndpointProvider", function ($routeProvider, apiEndpointProvider) {
    $routeProvider.buildFromUrl({ url: "routes.json" });
    apiEndpointProvider.configure("http://videoondemandapi.azurewebsites.net")
    apiEndpointProvider.configure("http://qbsecurityapi.azurewebsites.net", "security")
}]).run(["$rootScope", function ($rootScope) {
    $rootScope.title = "Angular Frontend Video On Demand";
}]);