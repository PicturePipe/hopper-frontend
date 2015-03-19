/* globals blanket */

blanket.options({
    modulePrefix: "hopper-frontend",
    filter: "//.*hopper-frontend/.*/",
    antifilter: "//.*(tests|template).*/",
    loaderExclusions: [
        'hopper-frontend/config/environment',
        'hopper-frontend/initializers/app-version',
        'hopper-frontend/initializers/export-application-global'
    ],
   enableCoverage: true
});
