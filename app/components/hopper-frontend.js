import Ember from 'ember';

export default Ember.Component.extend({
    isElementDrawerOpen: false,
    isTitleEditing: false,
    formTitle: 'My awesome Festival',

    actions: {
        toggleIsElementDrawerOpen: function () {
            this.set('isElementDrawerOpen', !this.get('isElementDrawerOpen'));
        },
        editTitle: function () {
            this.set('isTitleEditing', true);
        },
        acceptTitleChange: function () {
            this.set('isTitleEditing', false);
        }
    }
});
