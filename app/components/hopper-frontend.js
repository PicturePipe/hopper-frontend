import Ember from 'ember';

export default Ember.Component.extend({
    isElementDrawerOpen: false,
    isTitleBeingEdited: false,
    formTitle: 'My awesome Festival',

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
