(function() {
  'use strict';

  var modules = [
    "ngRoute"
  ]

  angular
    .module("EventoMate", modules)
    .config(['$routeProvider', function($routeProvider, $routeParams) {
      $routeProvider
      .when("/", {
          controller: "HomeController",
          controllerAs: "home",
          templateUrl: "templates/home.html"
      })
      // .when("/dashboard", {
      //     controller: "DashboardController",
      //     controllerAs: "dashboard",
      //     templateUrl : "templates/dashboard.html" 
      // })
      // .when("/event/:id", {
      //     controller: "EventsController",
      //     controllerAs: "event",
      //     templateUrl : "templates/event.html"

      // })
      .when("/create_event", {
          controller: "CreateEventController",
          controllerAs: "event",
          templateUrl : "templates/create_event.html"
      });
    }])

})()