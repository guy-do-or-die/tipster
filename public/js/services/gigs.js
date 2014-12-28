window.app.factory("Gigs", function($resource){
	return $resource('gigs/:gigId', {gigId:'@_id'}, {update: {method: 'PUT'}});
});
