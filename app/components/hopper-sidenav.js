import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'span',
    sidenavIsOpen: false,
    actions: {
        toggleSidenavIsOpen: function () {
            this.set('sidenavIsOpen', !this.get('sidenavIsOpen'));
        }
    }
});
