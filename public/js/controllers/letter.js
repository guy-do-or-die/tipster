function LetterCtrl1($scope) {
    $scope.image = 'logo_black';
    $scope.img_tag = '/img/logo_black.png';
    $scope.extra_class = '';
}
function LetterCtrl2($scope) {
    $scope.header = '12.08 - 18.08.2013';
    $scope.extra_class = '';
}
function LetterCtrl3($scope) {
    $scope.header = 'Your tiiipsters';
    $scope.extra = '(In case you)';
    $scope.extra_class = '';
}
function LetterCtrl4($scope) {
    $scope.header = 'Our news';
    $scope.extra_class = '';
}
function EventsCtrl($scope) {
    $scope.days = [
        { 
            day: '12.08', 
            gigs: [
                {dt:'14:00',tiii:'Arty'},
                {dt:'17:30',tiii:'Chick'},
                {dt:'18:00',tiii:'Pick'}
            ]
        },
        { 
            day: '13.08', 
            gigs: [
                {dt:'15:00',tiii:'Chick'},
                {dt:'17:30',tiii:'Chick'},
                {dt:'19:00',tiii:'Pick'}
            ]
        },
        { 
            day: '14.08', 
            gigs: [
                {dt:'14:00',tiii:'Smarty'},
                {dt:'18:30',tiii:'Chick'},
                {dt:'20:00',tiii:'Pick'}
            ]
        },
        { 
            day: '15.08', 
            gigs: [
                {dt:'14:00',tiii:'Arty'},
                {dt:'18:30',tiii:'Smarty'},
                {dt:'21:00',tiii:'Pick'}
            ]
        }
    ];
}
