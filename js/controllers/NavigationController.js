angular.module('routing_basics',['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/movies/list', {
                templateUrl: 'tpls/movies/list.html',
                controller: 'MovieController'
                })
            .when('/admin/users/list', {templateUrl: 'tpls/users/list.html'})
            .when('/users/login', {templateUrl: 'tpls/users/login.html'})
            .when('/users/register', {templateUrl: 'tpls/users/register.html'})
            .when('/users/edit', {templateUrl: 'tpls/users/edit.html'})
            
            .otherwise({redirectTo: '/movies/list'});
    })