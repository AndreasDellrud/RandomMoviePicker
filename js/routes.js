var app = angular.module('RandomMoviePicker');
app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider){
        $locationProvider.html5Mode(true);
        $routeProvider.
        when('/', {
            templateUrl: '/partials/randommovie.html',
            controller: 'MovieController'
        }).
        when('/login',{
            templateUrl: '/partials/userlogin.html',
            controller: 'UserController'
        }).
        when('/register',{
            templateUrl: '/partials/userregister.html',
            controller: 'UserController'
        }).
        otherwise({
            redirectTo: '/'
        })
        
    }]);