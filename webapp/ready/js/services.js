angular.module('solution.services', [])

    .service('PeopleService', ['$http', 'peopleUrl', function ($http, peopleUrl) {

    this.getAll = function () {

        return $http.get(peopleUrl).then(function (response) {
            
            return response.data;

        }, function (error) {

            console.log('Error: ' + JSON.stringify(error));

        });

    };

}]);