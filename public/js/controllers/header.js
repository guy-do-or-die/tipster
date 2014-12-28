function HeaderController($scope, $location, Global) {
	$scope.global = Global;
	$scope.menu = [
		{
			"title": "Users",
			"link": "users"
		},
		{
			"title": "Curators",
			"link": "c"
		},
		{
			"title": "Events",
			"link": "gigs"
		},
		{
			"title": "Create New Event",
			"link": "gigs/create"
		}
	];

	$scope.init = function() {

	};
}
