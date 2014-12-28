//Setting up route
window.app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/gigs', { templateUrl: 'views/gigs/list.html' }).
	when('/gigs/create', { templateUrl: 'views/gigs/create.html' }).
	when('/gigs/:gigId/edit', { templateUrl: 'views/gigs/edit.html' }).
	when('/gigs/:gigId', { templateUrl: 'views/gigs/view.html' }).
	when('/users', { templateUrl: 'views/users/list.html' }).
	when('/users/:userId/edit', { templateUrl: 'views/users/edit.html' }).
	when('/users/:userId', { templateUrl: 'views/users/view.html' }).
	when('/articles', { templateUrl: 'views/articles/list.html' }).
	when('/articles/create', { templateUrl: 'views/articles/create.html' }).
	when('/articles/:articleId/edit', { templateUrl: 'views/articles/edit.html' }).
	when('/articles/:articleId', { templateUrl: 'views/articles/view.html' }).
	when('/about', { templateUrl: 'views/about.html' }).
	when('/old', { templateUrl: 'views/index.html' }).
	when('/letter', { templateUrl: 'views/letter.html' }).
	when('/', { templateUrl: 'views/curators.html' }).
	otherwise({redirectTo: '/'});
}]);

//Removing tomcat unspported headers
window.app.config(['$httpProvider', function($httpProvider, Configuration) {
    //delete $httpProvider.defaults.headers.common["X-Requested-With"];
}]);

//Setting HTML5 Location Mode
window.app.config(['$locationProvider', function($locationProvider) {
    //$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix("!");
}]);
