var app =angular.module("expensemantainer",['ui.router'])

.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    //$urlRouterProvider.otherwise("/login");
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

    $urlRouterProvider.otherwise("/login");
    //$httpProvider.interceptors.push('httpInterceptor');
  })