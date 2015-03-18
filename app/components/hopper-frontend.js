import Ember from 'ember';

export default Ember.Component.extend({
    isElementDrawerOpen: false,
    actions: {
        toggleIsElementDrawerOpen: function () {
            this.set('isElementDrawerOpen', !this.get('isElementDrawerOpen'));
        }
    }
});
