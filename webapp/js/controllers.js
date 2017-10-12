angular.module('solution.controllers', [])

    .controller('solutionCtrl', function ($scope, PeopleService) {

        $scope.people;

        PeopleService.getAll().then(function (people) {
            
            $scope.people = people;
            console.log(people);

        });

        console.log(' -- solutionCtrl loaded -- ');

    });