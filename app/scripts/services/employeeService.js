'use strict';

var employeesAppServices = angular.module('employeesAppServices', []);

employeesAppServices.service("employeeService", [ '$q', '$http', function($q, $http) {

	this.getEmployee = function(id) {
		var deferred = $q.defer();
		$http.get("/data/"+id+".json")
			.then(function (response) {
				// console.log("url "+url+" response "+response.data)
                deferred.resolve(response.data);
            }, function (response) {
                deferred.reject(response);
            });
		return deferred.promise;
	}

	this.getSalary = function(id) {
		var deferred = $q.defer();
		$http.get("/data/"+id+".xml")
			.then(function (response) {
				// console.log("url "+url+" response "+response.data)
                deferred.resolve(response.data);
            }, function (response) {
                deferred.reject(response);
            });
		return deferred.promise;
	}

}]);