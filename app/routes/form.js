import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        if (this.store.all('form').get('length')) {
            return this.store.find('form', 'fixture-0');
        } else {
            this.transitionTo('fields');
        }
    },
});
