function IndexController($scope, $routeParams, $location, Global, Users, Gigs){
  var ae_fn = angular.element,
      win_h = ae_fn(window).height();
  $scope.global = Global;

  function toggleSlideHead (slide, head, correction) {
    var treshold = win_h + window.scrollY - correction;
    if ( treshold > ae_fn(slide).offset().top ) {
      ae_fn(head).hide();
    } else {
      ae_fn(head).show();
    }
  }

  $scope.all_users = function (query) {
    Users.query(query, function (users) {
	$scope.users = users;
    });
  };

  $scope.resizeMe = function (query) {
    var b = angular.element('footer').height(),
        t = angular.element('header').height(),
        slide = ae_fn(query),
        min = 300,
        new_h = win_h - b - t;
    ae_fn('.content').css('margin-top', t+'px');
    if (new_h < min) new_h = min;
    slide.css({'height': new_h+'px', 'overflow': 'scroll'});
  };

  $scope.changeVisibility = function(query){
    if (ae_fn("#secondSlide").length == 0) return ;
    toggleSlideHead('#secondSlide', '#secondHeader', 0);
    toggleSlideHead('#thirdSlide', '#thirdHeader', 
        ae_fn('#thirdHeader').height());
  };
}

/* demo */
function CarouselDemoCtrl($scope) {
  $scope.myInterval = -1;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 200 + ((slides.length + (25 * slides.length)) % 150);
    slides.push({
      image: 'http://placekitten.com/' + newWidth + '/200',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }
}
