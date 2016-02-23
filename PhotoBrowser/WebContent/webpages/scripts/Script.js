//<reference path="angular.min.js" />

var myApp = angular.module("homePage",["ngAnimate"]);
myApp.controller("mainController", function ($scope) {
        $scope.images = [
			{
				name: "spiral",
				description: "200 million light years across",
				pic: "images/galaxy.jpg"
			},
			
			{
				name: "Walter",
				description: "200 million light years across",
				pic: "images/WW.jpg"
			}
        ];
        
        $scope.currentIndex = 0;

        $scope.setCurrentImageIndex = function (index) {
            $scope.currentIndex = index;
        };

        $scope.isCurrentImageIndex = function (index) {
            return $scope.currentIndex === index;
        };
        $scope.prevSlide = function () {
            $scope.currentIndex = ($scope.currentIndex < $scope.images.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.images.length - 1;
        };

});
myApp.directive('fancybox', function ($compile, $http) {
    return {
        restrict: 'A',
        
        controller: function($scope) {
            $scope.openFancybox = function (url) {
                
                    $http.get(url).then(function(response) {
                        if (response.status == 200) {

                            var template = angular.element(response.data);
                            var compiledTemplate = $compile(template);
                            compiledTemplate($scope);

                            $.fancybox.open({ content: template, type: 'html' });
                        }
                    });
            };
        }
    };
});
