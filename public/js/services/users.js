window.app.factory("Users", function($resource){
	return $resource('users/:userId', {userId:'@_id'}, {update: {method: 'PUT'}});
});
window.app.factory("Curators", function($resource){
	return $resource('curators/:userId', {userId:'@_id'}, {update: {method: 'PUT'}});
});
