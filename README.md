# jabba-angular-typescript

## Goal
This project serves as a starting point for AngularJS projects using Typescript and SASS (it can easily be changed though).

It provides code organisation by feature (see Structure for more details) and a build system ready for development and testing.

## Install
To start your own project, you can clone that project, get rid of the history, change the git origin and start working by following the snippet below
```bash
$ git clone https://github.com/torcasitas/jabba-angular-typescript.git
$ sudo npm -g install bower
$ bower install
$ npm install
$ gulp
```


## Structure

```bash
jabba-angular-typescript/
  |- src/
  |  |- app/
  |  |  |- <app logic>
  |  |- assets/
  |  |  |- <static files>
  |  |- style/
  |  |  |- **/*.scss
  |  |- templates/
  |  |  |- **/*.html
  |  |- tests/
  |  |  |- unit
  |  |  |  |- **/*.js
  |  |  |- integration
  |  |  |  |- **/*.js
  |  |- types/
  |  |  |  |- **/*.d.ts
  |- vendor/
  |  |- angular/
  |  |- angular-mocks/
  |  |- lodash/
  |  |- ui-router/
  |- gulpfile.js
```

This app organisation groups code by feature but not to the point of grouping the templates/tests/css inside it (it's really to change that in the gulpfile if you want to do that though).

Look at the home module present in the boilerplate to see how you can integrate a module in the angular app and don't forget to delete type definition for the controller in types/app/core.ts.
There's also an exemple service and directive.


## Tasks
This uses gulp (http://gulpjs.com/) so you can call any of the tasks defined in the gulpfile.
The default one watches over the files and runs the associated tasks when needed and is called like this:
```bash
$ npm run gulp
```

To build the version to distribute, run the following:
```bash
$ npm run gulp build --type dist
```
