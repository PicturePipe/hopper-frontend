import Ember from 'ember';

export default Ember.Component.extend({
    isElementDrawerOpen: false,
    isTitleBeingEdited: false,

    didInsertElement: function() {
        this.set('store', this.get('targetObject.store'));
        // set this static for now
        // will be replaced with our API call later
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
            this.set('isElementDrawerOpen', false);
            Ember.$(document).foundation('joyride', 'start');
            if(this.get('currentController').currentRouteName !== 'fields') {
                this.get('currentController').transitionToRoute('fields');
            }
        }
    }
});
