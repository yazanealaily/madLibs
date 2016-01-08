angular.module("myApp", ["ngMessages"])
	.controller("madLibs", function($scope){
		
		$scope.femaleName = "[ female name ]";
		$scope.jobTitle = "[ job title ]";
		$scope.tedTask = "[ tedious task ]";
		$scope.dirTask = "[ dirty task ]";
		$scope.celebrity = "[ celebrity ]";
		$scope.uselessSkill = "[ useless skill ]";
		$scope.obnCelebrity = "[ obnoxious celebrity ]";
		$scope.number = "[ huge number ]";
		$scope.adjective = "[ adjective ]";

		$scope.madLib = false;
		$scope.again = true;

		$scope.submit = function() {

			if($scope.myForm.$valid) {	
				$scope.madLib = true;
				$scope.again = false;
			}
		};

		$scope.startOver = function() {
			$scope.madLib = false;
			$scope.again = true;	
		}


	});