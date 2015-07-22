/// <reference path="../../types/types.ts"/>

class ParseCloudService implements core.IParseCloudService {

  runFunction(name: string, arg?: any) {
    return Parse.Cloud.run(name, arg);
  }
}

angular
  .module("parsecloud.services", [])
  .service("ParseCloudService", ParseCloudService);
