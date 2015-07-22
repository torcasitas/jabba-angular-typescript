/// <reference path="../../types/types.ts"/>


class HomeController {
  greeting: string;
  times: number;
  parseJobs: Parse.Promise<any>;

  /* @ngInject */
  constructor(
    private $rootScope: core.IRootScope,
    private HomeService: core.IHomeService,
    private ParseCloudService: core.IParseCloudService
  ) {
    $rootScope.pageTitle = "Hello";
    this.times = 1;
    this.greeting = HomeService.getGreeting("Hello").greeting;
    this.parseJobs = ParseCloudService.runFunction("getJobsByCreator", { "userId": "qQo0QXLLbc" });
  }
}

angular
  .module("home.index", [
    "home.services",
    "parsecloud.services"
  ])
  .controller("HomeController", HomeController);
