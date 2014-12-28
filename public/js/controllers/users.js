function UsersController($scope, $dialog, $routeParams, $location, $filter, Global, Users, Gigs, Curators)
{
  $scope.global = Global;
  $scope.user = new Users();

  $scope.update = function () {
    var user = $scope.user;
    if (!user.updated) {
      user.updated = [];
    }
    user.updated.push(new Date().getTime());

    user.$update(function () {
      $location.path('users/' + user._id);
    });
  };

  $scope.find = function (query) {
    Users.query(query, function (users) {
        $scope.users = users;
    });
  };

  $scope.findOne = function () {
    Users.get({ userId: $routeParams.userId }, function (user) {
        $scope.user = user;
    });
  };

  $scope.pickAPic = function () {
    filepicker.pick(function(InkBlob){
      $scope.user.pic = InkBlob.url;
      $scope.$apply();
    });
  };

  $scope.picSrc = function(link, size, dont_scale, size_direction) {
    return picSrc(link, size, dont_scale, size_direction);
  };

  $scope.curators = function (query) {
    Curators.query(query, function (users) {
      angular.forEach(users, function (user) {
        var attend_dates = [];
        angular.forEach(user.attends, function (gig) {
            gig.when_date = $filter('date')(gig.when, 'dd.MM');
            gig.when_time = $filter('date')(gig.when, 'HH:mm');
            if (attend_dates.indexOf(gig.when_date) == -1) {
                attend_dates.push(gig.when_date);
            }
            gig.when_shift = attend_dates.indexOf(gig.when_date)*135;
        });
        user.attend_dates = attend_dates;
      });

      shuffle(users);
      $scope.curators = users;
    });
  };

  // Un|follow the user by authenticated user      
  $scope.follow = function (cId) {
    var tUser;
    if (this.user !== undefined) {
        tUser = this.user;
    } else if (cId !== undefined) {
        tUser = $scope.curators[cIf]; 
    }
  
    if ($scope.global.user) {
      var user = $scope.global.user, follows = user.follows, attends = user.attends, idX = -1;
      if (user._id !== tUser._id) {
          if (follows !== undefined) {
            idX = user.follows.indexOf(tUser._id);
          } else {
            follows = [];
          };

          if (idX > -1) {
              follows.splice(idX, 1);
          } else {
              follows.push(tUser._id);
          };

          Users.get({ userId: $scope.global.user._id }, function (usr) {
              usr.follows = follows;
              usr.attends = attends;
              usr.$update();
          });
      }
    } else if (cId !== undefined) {
      if (tUser !== undefined) {
          if (tUser.followed !== undefined) {
              tUser.followed = !tUser.followed;
          } else {
              tUser.followed = true;
          }
      }
    } 
  };

  $scope.followed = function (cId) {
    var user = $scope.global.user, tUser;
    
    if (this.user !== undefined) {
        tUser = this.user;
    } else if (cId !== undefined && $scope.curators[cId] !== undefined) {
        tUser = $scope.curators[cId]; 
    } else return false;

    if (user) {     
      if (user.follows !== undefined) {
        return user.follows.indexOf(tUser._id)  > -1;
      } 
    } else {
      if (tUser !== undefined && tUser.followed !== undefined) {
        return tUser.followed;
      } 
    }
    return false;
  };

  $scope.signUp = function() {
    var user = new Users(), follows = [];
    angular.forEach($scope.curators, function(curator) {
      if (curator.followed) {
        follows.push(curator._id);
      }
    })
    
    user.email = $scope.email; 
    user.follows = follows;
    user.name = 'anon';
    user.username = 'anon';
    user.is_curator = 0;
    user.password = 'anon';
    
    user.$save();
    var msg = $dialog.messageBox('Congrats!', 'You are now subscribed for ' 
        + follows.length  + ' tipsters. See details in your mailbox.\n\n Enjoy your time!', [{label:'Nice', result: 'yes'}]);
    msg.open().then(function(result){}); 
  }

}
