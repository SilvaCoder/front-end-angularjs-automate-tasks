angular.module('solution.controllers', [])

    .controller('solutionCtrl', ['$scope', 'PeopleService', function ($scope, PeopleService) {

        $scope.people;

        PeopleService.getAll().then(function (people) {
            
            $scope.people = people;
            console.log(people);

        });

        console.log(' -- solutionCtrl loaded -- ');

    }]);