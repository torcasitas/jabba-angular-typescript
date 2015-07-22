/// <reference path="../types/types.ts"/>


/* @ngInject */
function appConfig($urlRouterProvider: ng.ui.IUrlRouterProvider) {
  $urlRouterProvider.otherwise("home");
}

angular
  .module("jabbaWeb", [
    "templates",
    "jabbaWeb.home",
    "ui.router.state"
  ])
  .config(appConfig);
