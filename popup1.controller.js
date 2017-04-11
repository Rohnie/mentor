var app = angular.module('popup1MyApp', []);
app.controller('popup1MyCtrl', function($scope) {
	$scope.days = [ "", "Today", "Previous Business Day", "Previous Friday",
			"Previous Month End" ];
	$scope.reset = function() {
		$scope.sday = 0;
		$scope.smonth = 0;
		$scope.syear = 0;
		$scope.sres = "";
		$scope.selectedday = "";

	};
	$scope.reset2 = function() {
		$scope.sday2 = 0;
		$scope.smonth2 = 0;
		$scope.syear2 = 0;
		$scope.sres2 = "";
		$scope.selectedday2 = "";

	};

	$scope.dateManipulation = function() {
		if ($scope.selectedday === "Today") {
			$scope.sres = new Date();

			$scope.sres.setYear($scope.sres.getFullYear() + $scope.syear);
			$scope.sres.setMonth($scope.sres.getMonth() + $scope.smonth);
			$scope.sres.setDate($scope.sres.getDate() + $scope.sday);

		}
		;
		if ($scope.selectedday === "Previous Business Day") {

			$scope.sres = new Date();
			if ($scope.sres.getDay() == '1') {
				$scope.sres.setDate($scope.sres.getDate() - 3);
			} else if ($scope.sres.getDay() == '0') {
				$scope.sres.setDate($scope.sres.getDate() - 2);
			} else {
				$scope.sres.setDate($scope.sres.getDate() - 1);
			}
			$scope.sres.setYear($scope.sres.getFullYear() + $scope.syear);
			$scope.sres.setMonth($scope.sres.getMonth() + $scope.smonth);
			$scope.sres.setDate($scope.sres.getDate() + $scope.sday);
		}
		;
		if ($scope.selectedday === "Previous Friday") {

			$scope.sres = new Date();
			if ($scope.sres.getDay() == '0') {
				$scope.sres.setDate($scope.sres.getDate() - 2);
			} else if ($scope.sres.getDay() == '1') {
				$scope.sres.setDate($scope.sres.getDate() - 3);
			} else if ($scope.sres.getDay() == '2') {
				$scope.sres.setDate($scope.sres.getDate() - 4);
			} else if ($scope.sres.getDay() == '3') {
				$scope.sres.setDate($scope.sres.getDate() - 5);
			} else if ($scope.sres.getDay() == '4') {
				$scope.sres.setDate($scope.sres.getDate() - 6);
			} else if ($scope.sres.getDay() == '5') {
				$scope.sres.setDate($scope.sres.getDate() - 7);
			} else {
				$scope.sres.setDate($scope.sres.getDate() - 8);
			}

			$scope.sres.setYear($scope.sres.getFullYear() + $scope.syear);
			$scope.sres.setMonth($scope.sres.getMonth() + $scope.smonth);
			$scope.sres.setDate($scope.sres.getDate() + $scope.sday);
		}
		;

		if ($scope.selectedday === "Previous Month End") {

			$scope.sres = new Date();
			var month = $scope.sres.getMonth() - 1;
			var year = $scope.sres.getFullYear();
			$scope.sres = new Date(year, month + 1, 0);

			$scope.sres.setYear($scope.sres.getFullYear() + $scope.syear);
			$scope.sres.setMonth($scope.sres.getMonth() + $scope.smonth);
			$scope.sres.setDate($scope.sres.getDate() + $scope.sday);
			
		}
		;

		if ($scope.selectedday2 === "Today") {
			$scope.sres2 = new Date();

			$scope.sres2.setYear($scope.sres2.getFullYear() + $scope.syear2);
			$scope.sres2.setMonth($scope.sres2.getMonth() + $scope.smonth2);
			$scope.sres2.setDate($scope.sres2.getDate() + $scope.sday2);
		}
		;
		if ($scope.selectedday2 === "Previous Business Day") {

			$scope.sres2 = new Date();
			if ($scope.sres2.getDay() == '1') {
				$scope.sres2.setDate($scope.sres2.getDate() - 3);
			} else if ($scope.sres2.getDay() == '0') {
				$scope.sres2.setDate($scope.sres2.getDate() - 2);
			} else {
				$scope.sres2.setDate($scope.sres2.getDate() - 1);
			}
			$scope.sres2.setYear($scope.sres2.getFullYear() + $scope.syear2);
			$scope.sres2.setMonth($scope.sres2.getMonth() + $scope.smonth2);
			$scope.sres2.setDate($scope.sres2.getDate() + $scope.sday2);
		}
		;
		if ($scope.selectedday2 === "Previous Friday") {

			$scope.sres2 = new Date();
			if ($scope.sres2.getDay() == '0') {
				$scope.sres2.setDate($scope.sres2.getDate() - 2);
			} else if ($scope.sres2.getDay() == '1') {
				$scope.sres2.setDate($scope.sres2.getDate() - 3);
			} else if ($scope.sres2.getDay() == '2') {
				$scope.sres2.setDate($scope.sres2.getDate() - 4);
			} else if ($scope.sres2.getDay() == '3') {
				$scope.sres2.setDate($scope.sres2.getDate() - 5);
			} else if ($scope.sres2.getDay() == '4') {
				$scope.sres2.setDate($scope.sres2.getDate() - 6);
			} else if ($scope.sres2.getDay() == '5') {
				$scope.sres2.setDate($scope.sres2.getDate() - 7);
			} else {
				$scope.sres2.setDate($scope.sres2.getDate() - 8);
			}

			$scope.sres2.setYear($scope.sres2.getFullYear() + $scope.syear2);
			$scope.sres2.setMonth($scope.sres2.getMonth() + $scope.smonth2);
			$scope.sres2.setDate($scope.sres2.getDate() + $scope.sday2);
		}
		;

		if ($scope.selectedday2 === "Previous Month End") {

			$scope.sres2 = new Date();
			var month = $scope.sres2.getMonth() - 1;
			var year = $scope.sres2.getFullYear();
			$scope.sres2 = new Date(year, month + 1, 0);

			$scope.sres2.setYear($scope.sres2.getFullYear() + $scope.syear2);
			$scope.sres2.setMonth($scope.sres2.getMonth() + $scope.smonth2);
			$scope.sres2.setDate($scope.sres2.getDate() + $scope.sday2);
		}
		;

	};
});