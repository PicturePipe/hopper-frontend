import Ember from 'ember';

export default Ember.Component.extend({
    isSidenavOpen: false,
    actions: {
        toggleSidenavOpen: function () {
            this.set('isSidenavOpen', !this.get('isSidenavOpen'));
        }
    }
});
