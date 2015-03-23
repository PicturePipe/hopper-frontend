import Ember from 'ember';

export default Ember.Component.extend({
    isElementDrawerOpen: false,
    isTitleBeingEdited: false,

    didInsertElement: function() {
        var store = this.get('targetObject.store');
        this.set('form', store.find('form', 1 ));
    },

    actions: {
        toggleIsElementDrawerOpen: function () {
            this.set('isElementDrawerOpen', !this.get('isElementDrawerOpen'));
        },
        editTitle: function () {
            this.set('isTitleBeingEdited', true);
        },
        acceptTitleChange: function () {
            this.set('isTitleBeingEdited', false);
        }
    }
});
