var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var pickFiles = require('broccoli-static-compiler');


module.exports = function(defaults) {
    var app = new EmberApp(defaults, {
        // Any other options
    });

    // Foundation
    app.import('bower_components/foundation/js/foundation.min.js');

    // jQuery Sortable
    app.import('bower_components/jquery-ui/ui/core.js');
    app.import('bower_components/jquery-ui/ui/widget.js');
    app.import('bower_components/jquery-ui/ui/mouse.js');
    app.import('bower_components/jquery-ui/ui/sortable.js');

    var fontawesomeAssets = pickFiles('bower_components/fontawesome', {
        srcDir: '/fonts',
        files: ['FontAwesome.otf', 'fontawesome-webfont.*'],
        destDir: 'assets/fontawesome/fonts'
    });

    return app.toTree(fontawesomeAssets);
};
