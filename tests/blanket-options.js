/* globals blanket */

blanket.options({
   modulePrefix: "hopper-frontend",
   filter: "//.*hopper-frontend/.*/",
   antifilter: "//.*(tests|template).*/",
   loaderExclusions: [],
   enableCoverage: true
});