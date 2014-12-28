function GigsController($scope, $routeParams, $location, Global, Gigs, Users)
{
        $scope.global = Global;
        $scope.gig = new Gigs();

        $scope.create = function () {
                var gig = $scope.gig;   
                gig.$save(function (response) {
                        $location.path("gigs/" + response._id);
                });
        };

        $scope.remove = function (gig) {
                gig.$remove();

                for (var i in $scope.gigs) {
                        if ($scope.gigs[i] == gig) {
                                $scope.gigs.splice(i, 1)
                        }
                }
        };

        $scope.update = function () {
                var gig = $scope.gig;
                if (!gig.updated) {
                        gig.updated = [];
                }
                gig.updated.push(new Date().getTime());

                gig.$update(function () {
                        $location.path('gigs/' + gig._id);
                });
        };

        $scope.find = function (query) {
                Gigs.query(query, function (gigs) {
                        $scope.gigs = gigs;
                });
        };

        $scope.findOne = function () {
                Gigs.get({ gigId: $routeParams.gigId }, function (gig) {
                        $scope.gig = gig;
                });
        };

        // Pic uploading
        $scope.pickAPic = function () {
                filepicker.pick(function(InkBlob){
                        $scope.gig.pic = InkBlob.url;
                        $scope.$apply();
                });
        };

        // Path to gig's pic
        $scope.picSrc = function (link, size) {
                return picSrc(link, size);      
        };

        // Un|follow the gig by authenticated user      
        $scope.follow = function () {
                var user = $scope.global.user, gig = this.gig, followers = gig.followers, attends = user.attends, follows = user.follows, idX = -1;
                
                if (followers !== undefined) {
                        idX = gig.followers.indexOf($scope.global.user);
                } else {
                        followers = [];
                }               
                        
                if (idX > -1) {
                        followers.splice(idX, 1);
                } else {                        
                        followers.push($scope.global.user._id);
								}

		gig.$update();

                if (attends !== undefined) {
                        idX = attends.indexOf(gig._id);
                } else {
                        followers = [];
                }
                
                if (idX > -1) {
                        attends.splice(idX, 1);
                } else {                        
                        attends.push(gig._id);
                }
                                
                Users.get({ userId: $scope.global.user._id }, function (usr) {
                        usr.follows = follows;
			usr.attends = attends;        
                        usr.$update();
                });

                
        };

        $scope.followed = function () {
                var gig = this.gig;

                if ($scope.global.user.attends === undefined) {
                        return false;   
                } else {
                        return $scope.global.user.attends.indexOf(gig._id) > -1;
                }
       };

}
