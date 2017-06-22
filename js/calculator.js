var calculatorApp = angular.module("calculatorApp", []);

calculatorApp.controller('calculator', function($scope) {

    $scope.display = '';

    $scope.clear = function() {
        $scope.display = '';
        $scope.colorChange = '';
        $scope.reset = false;
        $scope.addition = false;
        $scope.subtract = false;
        $scope.multiply = false;
    };


    $scope.operationAddition = function() {
        $scope.addition = true;
        $scope.subtract = false;
        $scope.multiply = false;

        $scope.firstNumber = $scope.display;
    };

    $scope.operationSubtract = function() {
        $scope.addition = false;
        $scope.subtract = true;
        $scope.multiply = false;

        $scope.firstNumber = $scope.display;
    };

    $scope.operationMultiply = function() {
        $scope.addition = false;
        $scope.subtract = false;
        $scope.multiply = true;

        $scope.firstNumber = $scope.display;
    };

    $scope.operationEqual = function() {
        $scope.secondNumber = $scope.display;

        if($scope.addition) {
            $scope.colorChange = "addition";
            $scope.display = parseInt($scope.firstNumber) + parseInt($scope.secondNumber);
        }
        else if ($scope.subtract) {
            $scope.colorChange = "subtract";
            $scope.display = parseInt($scope.firstNumber) - parseInt($scope.secondNumber);
        }
        else if ($scope.multiply) {
            $scope.colorChange = "multiply";
            $scope.display = parseInt($scope.firstNumber) * parseInt($scope.secondNumber);
        }
    };


    $scope.buttonPress1 = function() {
        if(($scope.addition | $scope.subtract | $scope.multiply) && !$scope.reset === true)
        {
            $scope.display = '';
            $scope.reset = true;
        }

        $scope.display = $scope.display + '1';
    };

    $scope.buttonPress2 = function() {
        if(($scope.addition | $scope.subtract | $scope.multiply) && !$scope.reset === true)
        {
            $scope.display = '';
            $scope.reset = true;
        }

        $scope.display = $scope.display + '2';
    };

    $scope.buttonPress3 = function() {
        if(($scope.addition | $scope.subtract | $scope.multiply) && !$scope.reset === true)
        {
            $scope.display = '';
            $scope.reset = true;
        }

        $scope.display = $scope.display + '3';
    };

    $scope.buttonPress4 = function() {
        if(($scope.addition | $scope.subtract | $scope.multiply) && !$scope.reset === true)
        {
            $scope.display = '';
            $scope.reset = true;
        }

        $scope.display = $scope.display + '4';
    }

    $scope.buttonPress5 = function() {
        if(($scope.addition | $scope.subtract | $scope.multiply) && !$scope.reset === true)
        {
            $scope.display = '';
            $scope.reset = true;
        }

        $scope.display = $scope.display + '5';
    };

    $scope.buttonPress6 = function() {
        if(($scope.addition | $scope.subtract | $scope.multiply) && !$scope.reset === true)
        {
            $scope.display = '';
            $scope.reset = true;
        }

        $scope.display = $scope.display + '6';
    };

    $scope.buttonPress7 = function() {
        if(($scope.addition | $scope.subtract | $scope.multiply) && !$scope.reset === true)
        {
            $scope.display = '';
            $scope.reset = true;
        }

        $scope.display = $scope.display + '7';
    };

    $scope.buttonPress8 = function() {
        if(($scope.addition | $scope.subtract | $scope.multiply) && !$scope.reset === true)
        {
            $scope.display = '';
            $scope.reset = true;
        }

        $scope.display = $scope.display + '8';
    };

    $scope.buttonPress9 = function() {
        if(($scope.addition | $scope.subtract | $scope.multiply) && !$scope.reset === true)
        {
            $scope.display = '';
            $scope.reset = true;
        }

        $scope.display = $scope.display + '9';
    };


});
