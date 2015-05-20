import Ember from 'ember';

export default Ember.Component.extend({
    isElementDrawerOpen: true,
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
            var numOfFormElements = this.store.all('formElement').get('length');
            var newElement = this.store.createRecord('formElement', {
                label: '',
                elementType: field,
                weight: numOfFormElements
            });
            newElement.save();
            this.get('form').get('formElements').addObject(newElement);
        },
        startHelp: function() {
            Ember.$(document).foundation('joyride', 'start');
            if(this.get('currentController').currentRouteName !== 'fields') {
                this.get('currentController').transitionToRoute('fields');
            }
        }
    }
});
