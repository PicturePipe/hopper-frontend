import Ember from 'ember';

export default Ember.Component.extend({
    isElementDrawerOpen: false,
    isTitleBeingEdited: false,

    didInsertElement: function() {
        var self = this;
        self.set('store', self.get('targetObject.store'));
        Ember.run.later(function() {
            self.set('form', self.store.find('form', 'fixture-0'));
        }, 1000);
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
