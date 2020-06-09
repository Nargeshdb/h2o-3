
app.controller('usecasesCtrl', ['$scope', '$http', '$window', '$timeout', function ($scope, $http, $window, $timeout) {
    $scope.items = '';
    $scope.limit = 8;
    $scope.usecasesType = '';
    $scope.usecasesTypes = '';
    // Request data from API
    $http({
        method: 'GET',
        url: '/wp-content/themes/h2o2018/templates/section/json/usecases-json.php'
    }).then(function (response) {
        $scope.items = response.data;
        $timeout(function(){
            angular.element("body.h2o .col-two-grid .loader").hide();
            angular.element('body.h2o .col-two-grid').css('min-height','');
        },50);
    }, function (error) {
        console.error('There was some problem in loading usecases.json.');
    });

    $scope.loadmore = function () {
        $scope.limit = $scope.limit + 8;
    }

    $scope.usecases_filter = function (str) {
        $scope.usecasesTypes = str;
        if (str == '') {
            $scope.usecasesType = '';
        } else {
            $scope.usecasesType = str;
        }
    }
}]);
// app.controller('eventsCtrl', ['$scope', '$http', '$window', '$timeout', function ($scope, $http, $window, $timeout) {
//     $scope.items = '';
//     $scope.limit = 4;
//     $scope.eventType = '';
//     $scope.itemsPerRow = 2;
//     $scope.pastEvents= '';
//     $scope.eventTypes = '';
//     // Request data from API
//     $http({
//         method: 'GET',
//         url: '/wp-content/themes/h2o2018/templates/section/json/event-json.php'
//     }).then(function (response) {
//         $scope.items = response.data;
//         $timeout(function(){
//             angular.element("body.h2o .generic-view-grid .loader").hide();
//             angular.element('body.h2o .generic-view-grid').css('min-height','');
//         },50);
//     }, function (error) {
//         console.error('There was some problem in loading events.json.');
//     });
//     $scope.pastCheckbox= function(str){
//         $scope.pastEvents =str;
//     }
//
//     $scope.loadmore = function () {
//         $scope.limit = $scope.limit + 4;
//     }
//
//     $scope.event_filter = function (str) {
//         $scope.eventTypes = str;
//         if (str == '') {
//             $scope.eventType = '';
//         } else {
//             $scope.eventType = str;
//         }
//     }
// }]);