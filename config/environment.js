/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'hopper-frontend',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  ENV.sassOptions = {
    includePaths: [
      'bower_components/foundation/scss'
    ]
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.HOPPER_DATA_URL = 'http://jsonstub.com/form/1';
    ENV.APP.HOPPER_EXTRA_HEADERS = {
      'JsonStub-User-Key': 'ad5cc745-2f67-45eb-8446-1daf590de52e',
      'JsonStub-Project-Key': '1aa2304f-202c-416a-b2de-24312e4a3c46',
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
