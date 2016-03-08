import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  getQueryStrings: function () {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
    });
    return vars;
  },
  getDataUrl: function() {
    var data_url = this.HOPPER_DATA_URL + this.form_id + '/';
    return data_url;
  },
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
