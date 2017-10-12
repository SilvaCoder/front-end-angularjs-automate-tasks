angular.module('solution.routes',[]).config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "templates/people.html"
        })
        .when("/red", {
            templateUrl: "people.html"
        })
        .when("/green", {
            templateUrl: "green.htm"
        })
        .when("/blue", {
            templateUrl: "blue.htm"
        });
});