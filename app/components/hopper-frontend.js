import Ember from 'ember';

export default Ember.Component.extend({
    isElementDrawerOpen: false,
    isTitleBeingEdited: false,

    didInsertElement: function() {
        this.set('store', this.get('targetObject.store'));
        this.set('form', this.store.find('form', 1 ));
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
        addField: function(field) {
            var newElement = this.store.createRecord('formElement', {fieldType: field});
            this.get('form').get('formElements').addObject(newElement);
        }
    }
});
