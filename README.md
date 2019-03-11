# AngularSample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5 and modified to be a useful example of scanning such a project with SonarQube.

## Usage

Make sure you have node.js 8.9 or higher along with npm 5.5.1 or higher available on your path. Additionally, the test configuration for this project expects Google Chrome to be installed.

Run `build.sh`, which will first use the Angular CLI to run unit tests against the project and then invoke the sonar scanner.

## Development server

If you're curious to see what this sample app does, run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. If the `ng` command is not found, it's probably because you don't have the Angular CLI installed globally. In this case, fist run `npm install` and then run `./node_modules/.bin/ng serve`.
