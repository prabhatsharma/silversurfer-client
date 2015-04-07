// Karma configuration
// Generated on Fri Apr 03 2015 05:18:04 GMT+0530 (IST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon-chai', 'browserify'],


    // list of files / patterns to load in the browser
    files: [
		
		'node_modules/angular/angular.js',
		'node_modules/angular-mocks/angular-mocks.js',
		'node_modules/angular-resource/angular-resource.js',
		'node_modules/angular-ui-router/release/angular-ui-router.js',
		
		'src/app.js',
		'src/scripts/**/*.js',
		'src/test/unit/*.js'
    ],
	  
	browserify: {
      debug: true,
		bundleDelay: 2000	// WAR for karma-browserify race condition
    },


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {	
		'src/app.js' : ['browserify'],	 
		'src/scripts/*/*.js' : ['browserify'],
		'src/test/unit/*.js' : ['browserify']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    //browsers: ['PhantomJS'],
	browsers: ['Chrome'],
	  
	plugins : [
	   'karma-browserify',
	   'karma-mocha',
	   'karma-chai',
	   'karma-sinon-chai',
	   'karma-phantomjs-launcher',
	   'karma-chrome-launcher',
	   'karma-firefox-launcher'
    ],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
