var app =angular.module("expensemantainer",['ui.router'])



.config(function ($stateProvider, $urlRouterProvider, $httpProvider,$locationProvider) {
    //$urlRouterProvider.otherwise("/login");
     $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $stateProvider
      .state('login', {
        url: "/login",
        templateUrl: "/adminPortal/partials/login/login.html",
        //controller: 'loginController'
      })
       .state('home', {
        url: "/home",
        templateUrl: "/adminPortal/partials/home/home.html",
        //controller: 'homeController'
      })
       .state('signup', {
        url: "/signup",
        templateUrl: "/adminPortal/partials/signup/signup.html",
        //controller: 'homeController'
      })
     
    $urlRouterProvider.otherwise("/login");
    //$httpProvider.interceptors.push('httpInterceptor');
  })