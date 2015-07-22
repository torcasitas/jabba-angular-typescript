/// <reference path="../libs/angular.d.ts"/>
/// <reference path="../libs/parse.d.ts"/>

declare module core {

  interface IRootScope extends ng.IScope {
    pageTitle: string;
  }

  // Only add interfaces for the things shared or used in other modules
  interface IGreeting {
    greeting: string;
  }

  interface IHomeService {
    getGreeting(greeting: string): IGreeting;
  }

  // interface IRecruiter {
  //   username: string;
  //   password: string;
  // }

  // interface IRecruiterService {
  //   login(username: string, password: string): 
  // }

  interface IParseCloudService {
    runFunction(name: string, arg?: any): Parse.Promise<any>; 
  }
}
