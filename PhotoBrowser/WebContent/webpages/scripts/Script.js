//<reference path="angular.min.js" />

var myApp = angular.module("homePage",[]);
myApp.controller("mainController", function ($scope) {
        var galaxy = {
            name: "spiral",
            size: "200 million light years across",
            galPic: "image/galaxy.jpg"
        };
    
     $scope.galaxy = galaxy;
     $scope.popup = function show_popup() {
    		$(".fancybox").fancybox();
    		return true;
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
