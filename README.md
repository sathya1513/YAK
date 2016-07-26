# profile-search

This project is a demonstration of the below:
- Scaffolding tools like "Yeoman" to generate skeleton app
- Karma - Jasmine unit testing, ensuring quality and code coverage

## Yeoman

Yeoman - a scaffolding tool has been used here to generate the scaffolding for an AngularJs based SPA (Single Page Application). This is a node based tool and can be installed using npm (node package manager).

```
npm install -g yo
```

Once Yeoman has been installed, there are various scaffolding templates available for various web app tool set out there. Here AngularJs generator is used to generate the scaffolding using yeoman.

```
npm install -g generator-angular
```

Use yeoman tool, then to generate the boilerplate code required for a skeleton AngularJs app.

```
yo angular
```

This spits out a skeleton app something like this

- app/
	- images/
	- scripts/
		- controllers/
			- main.js
		- app.js
	- styles/
	- views/
	- index.html

## AngularJs (application development)

A sample app with a controller, service, custom directive has been created for demo purposes

### Accordion Panel

An accordion panel has been created as a custom directive using pure html and css


## Behavior-driven unit testing (Jasmine)

Jasmine is a unit test framework available for writing unit tests for javascript code driven by its behaviour. Further information can be obtained here (http://jasmine.github.io/X.X/introduction.html)

Jasmine test suite with describe, specs, expectations have been written for this project and can be found under test folder

- app
- test/
	- spec/
		- controllers/
			- main_spec.js

A sample describe and test spec from the project

```
describe('when a profile is selected', function(){
  beforeEach(function(){
    // code that needs to be executed before each spec,
    // represented by it function goes here
  });  
  it('should mark the profile as selected', function(){
    expect(scope.profiles[1].selected).toBe(true);
  });
  // further tests go here
});
```

## Test runner (Karma)

Karma is a nodejs based test runner for javascript. Here its been used in conjunction with jasmine and phantomjs to run unit tests.

```
npm install -g karma karma-cli karma-jasmine jasmine-core karma-phantomjs-launcher
```

### Karma.conf.js

The heart and soul of any tool is its config. Similarly, karma needs a config which specifies certain important parameters for the execution of tests using karma runner

Initialise karma by beginning with conf.js. The below command runs you through an interactive command line based conf.js generation process where based on the selection made, the details in the conf.js generated would differ.

```
karma init
```

"karma.conf.js" would look something similar to this 

```
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [],


    // list of files / patterns to load in the browser
    files: [
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
```

### Headless browser (PhantomJS)

Karma supports various browsers like chrome, IE, firefox etc. But in this demo, PhantomJs browser has been used for the below main reasons:

- No UI testing is being done
- Quicker runtime and results

### Start unit tests

Run the tests using

```
karma start
```

this will spin up a server to launch phantoms js headless browser to run the javascript unit tests

```
26 07 2016 01:38:21.545:WARN [karma]: No captured browser, open http://localhost:9876/
26 07 2016 01:38:21.557:INFO [karma]: Karma v1.1.1 server started at http://localhost:9876/
26 07 2016 01:38:21.560:INFO [launcher]: Launching browser PhantomJS with unlimited concurrency
26 07 2016 01:38:21.572:INFO [launcher]: Starting browser PhantomJS
26 07 2016 01:38:23.313:INFO [PhantomJS 2.1.1 (Windows 8 0.0.0)]: Connected on socket /#bqxWWAf8cFSe4W6tAAAA with id 49870659
```

### CLI - CI

Continuous Integration (CI) and Continuous delivery has been the talk of the day for a few years now. It becomes important that any tool/process that needs to be run, be designed in a way that it can be run using command line interface (CLI). This enables the CI tools to automate the build process and run several tasks of which running unit tests is one that usually follows a successful build.

#### A "test.bat" has been created with the command to run jasmine unit tests on PhantomJs using karma runner.



