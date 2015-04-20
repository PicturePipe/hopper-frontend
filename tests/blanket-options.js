/*globals blanket, module */

var options = {
  modulePrefix: "hopper-frontend",
  filter: "//.*hopper-frontend/.*/",
  antifilter: "//.*(tests|template).*/",
  loaderExclusions: [
    'hopper-frontend/config/environment',
    'hopper-frontend/initializers/app-version',
    'hopper-frontend/initializers/export-application-global'
  ],
  enableCoverage: true,
  cliOptions: {
    jsonOptions: {
      outputFile: 'test-output.json' // default is 'coverage.json'
    },
    lcovOptions: {
      outputFile: 'lcov.dat'
    },
    reporters: ['lcov']
  }
};
if (typeof exports === 'undefined') {
  blanket.options(options);
} else {
  module.exports = options;
}
