(function (){
		'use strict';

		angular
			.module('trackScroll', ['duScroll'])

			.directive('trackScroll', trackScroll);

			trackScroll.$inject = ['$timeout'];

		function trackScroll ($timeout){
			return {
				'restrict': 'A',
				'scope': { 'trackingId': '=',
										'trackHeight': '=', 
										'trackDuration': '=' },
				 link: function (scope, element) { 
				 	var otherEvent = false;
						angular.element(element).bind("scroll", function() {
								if (element[0].scrollTop && !otherEvent) {
										scope.trackingId = parseInt((element[0].scrollTop)/scope.trackHeight); 
										scope.$apply();
								}
							
       	 		});
 						scope.delay = parseInt(scope.trackDuration) + 50;
						scope.$watch(function () {
							return scope.trackingId;
						}, function () {
								
								var amount = scope.trackHeight * scope.trackingId;
									otherEvent = true;
							element.scrollTop(amount, scope.trackDuration);
							$timeout(function() {
								otherEvent = false;
							},scope.delay);	 
						});
      
         scope.$on('destroy', function (){
                angular.element($window).unbind('scroll');
         });
				 }
			}
		}
	})();