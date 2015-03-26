import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        // set this static for now
        // will be replaced with our API call later
        return this.store.find('form', 1);
    }
});
