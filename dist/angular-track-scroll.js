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

				 		scope.delay = parseInt(scope.trackDuration) + 25;

						angular.element(element).bind("scroll", function() {

								if (element[0].scrollTop && !otherEvent) {
										otherEvent = true;

										scope.$apply(function (){
											scope.trackingId = parseInt((element[0].scrollTop)/scope.trackHeight);
										});
							$timeout(function() {
								otherEvent = false;
							}, scope.delay);
								}
       	 		});
      
				
					var unBindWatch = scope.$watch(function () {
							return scope.trackingId;
						}, function () {
							if (!otherEvent)  {
								otherEvent = true;

								var amount = scope.trackHeight * scope.trackingId;

								element.scrollTop(amount, scope.trackDuration);
								$timeout(function() {
								otherEvent = false;
							}, scope.delay);
							}
								
						
							 
						});
      
         scope.$on('destroy', function (){
                angular.element($window).unbind('scroll');
                unBindWatch();
         });
				 }
			};
		}

})();