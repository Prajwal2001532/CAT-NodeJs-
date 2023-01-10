var app=angular.module("app",["ngRoute"])
 app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "Main.html"
        })
        .when("/View", {
            templateUrl: "tab.html",
            controller: "myctrl"
        })
        .when("/update", {
            templateUrl: "update.html",
            controller: "updateController"
        })
        .when("/search", {
            templateUrl: "search.html",
            controller: "searchController"
        })
        .when("/delete", {
            templateUrl: "delete.html",
            controller: "deleteController"
        });
})
app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
}])