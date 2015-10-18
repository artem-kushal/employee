'use strict';

var employeesAppControllers = angular.module('employeesAppControllers', []);

employeesAppControllers.controller('MainCtrl',['$scope', 'employeeService', function ( $scope, employeeService) {

	$scope.isEmplVis = false;
	$scope.isSalaryVis = false;
	$scope.getEmployee = function() {
		employeeService.getEmployee('employee').then(
            function (result) { // success
              $scope.employee = result;
              $scope.isEmplVis = true;
              console.log(result);
            }, function (error) { console.log(error.statusText); } //error
        );
	}

	$scope.getSalary = function() {
		employeeService.getSalary('salary').then(
            function (result) { // success
              parseXml(result);
              console.log(result);
              $scope.isSalaryVis = true;
            }, function (error) { console.log(error.statusText); } //error
        );
	}

	$scope.getEmployeeAndSalary = function() {
		$scope.getEmployee();
		$scope.getSalary();
		$scope.isEmplVis = true;
		$scope.isSalaryVis = true;
	}

	function parseXml(xml) {
		var parser = new DOMParser();
		var xmlDoc = parser.parseFromString(xml,"text/xml");
    	$scope.salary = {
    		employeeId : xmlDoc.getElementsByTagName("id")[0].childNodes[0].nodeValue,
    		amount : xmlDoc.getElementsByTagName("amount")[0].childNodes[0].nodeValue,
    		currency : xmlDoc.getElementsByTagName("currency")[0].childNodes[0].nodeValue,
    		month : xmlDoc.getElementsByTagName("month")[0].childNodes[0].nodeValue,
    	}
	}

}]);
