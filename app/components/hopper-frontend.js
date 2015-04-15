import Ember from 'ember';

export default Ember.Component.extend({
    isElementDrawerOpen: false,
    isTitleBeingEdited: false,

    didInsertElement: function() {
        this.set('store', this.get('targetObject.store'));
        this.set('form', this.store.find('form', 'fixture-0'));
    },

    actions: {
        toggleIsElementDrawerOpen: function () {
            this.toggleProperty('isElementDrawerOpen');
        },
        editTitle: function () {
            this.set('isTitleBeingEdited', true);
        },
        acceptTitleChange: function () {
            this.set('isTitleBeingEdited', false);
        },
        addFormElement: function(field) {
            var newElement = this.store.createRecord('formElement', {label: '', elementType: field});
            this.get('form').get('formElements').addObject(newElement);
        }
    }
});
