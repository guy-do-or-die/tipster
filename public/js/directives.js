window.app.directive("scroll", function ($window) {
  if ($(".watch_scroll").length == 0) return ;
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            scope.changeVisibility(attrs); 
        });
    };
});
