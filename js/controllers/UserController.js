/**
 * UserController
 */
var app = angular.module('RandomMoviePicker');

app.factory('Auth', ['$firebaseAuth', function($firebaseAuth){
    var ref = new Firebase("https://randommoviepicker.firebaseio.com");
    return $firebaseAuth(ref);
}]);
/**
 * UserLogin
 */

app.controller('UserController', ['$scope', 'Auth', function($scope, Auth){

    $scope.createUser = function() {
      $scope.message = null;
      $scope.error = null;

      Auth.$createUser({
        email: $scope.email,
        password: $scope.password
      }).then(function(userData) {
        $scope.message = "User created with uid: " + userData.uid;
      }).catch(function(error) {
        $scope.error = error;
      });
    };
    
    $scope.loginUser = function(){
        Auth.$authWithPassword({
            email: $scope.email,
            password: $scope.password
        }).then(function(authData) {
            console.log("Logged in as:", authData.uid);
        }).catch(function(error) {
            console.error("Authentication failed:", error);
        });
    };
}]);