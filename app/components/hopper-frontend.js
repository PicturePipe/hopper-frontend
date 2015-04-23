import Ember from 'ember';

export default Ember.Component.extend({
    isElementDrawerOpen: false,
    isTitleBeingEdited: false,

    fieldTypesReverse: {
        'Fieldset': 'fieldset',
        'Charfield': 'input',
        'Textfield': 'textarea',
        'Select': 'select',
        'Radiobuttons': 'radio',
        'Multiselect': 'multiselect',
        'Checkboxfield': 'checkbox',
        'Datefield': 'date',
        'Datetimefield': 'datetime',
        'Uploadfield': 'file',
        'Integerfield': 'integer',
        'Mailfield': 'mail',
        'Urlfield': 'url',
        'Passwordfield': 'password',
        'Hiddenfield': 'hidden',
    },

    didInsertElement: function() {
        this.set('store', this.get('targetObject.store'));
        this.set('form', this.store.find('form', 'fixture-0'));
    },

    extractFormElementInfo: function(formElement, isSubelement) {
        var self = this;
        var choices = formElement.get('values') || '';
        var formElementInfo = {
            'type': self.fieldTypesReverse[formElement.get('elementType')],
            'label': formElement.get('label'),
            'placeholder': formElement.get('placeholder'),
            'weight': formElement.get('weight'),
            'immutable': formElement.get('immutable'),
            'required': formElement.get('required'),
            'maxlength': formElement.get('maxlength'),
            'default': formElement.get('default'),
            'description': formElement.get('description'),
            'checked': formElement.get('checked'),
            'choices': choices.split('\n'),
            'elements': {}
        };
        formElement.get('formElements').then(function(subFormElements) {
            if (!isSubelement) {
                var subFormElementsArray = subFormElements.toArray();
                if (subFormElementsArray.get('length') > 0) {
                    for (var i = 0; i < subFormElementsArray.get('length'); i++) {
                        var subFormElement = subFormElementsArray[i];
                        formElementInfo.elements[subFormElement.get('name')] = self.extractFormElementInfo(
                            subFormElement, true);
                    }
                }
            }
        });
        return formElementInfo;
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
        },
        saveForm: function() {
            var self = this;
            var form = this.get('form');
            var formData = {
                'form': {
                    'title': form.get('title'),
                    'method': form.get('method'),
                    'action': form.get('action'),
                    'enctype': form.get('enctype'),
                    'css_classes': form.get('formClasses'),
                    'elements_css_classes': form.get('fieldClasses'),
                    'elements': {}
                }
            };
            form.get('formElements').then(
                function(formElements) {
                    var formElementArray = formElements.toArray();
                    if (formElementArray.get('length') > 0) {
                        for (var i = 0; i < formElementArray.get('length'); i++) {
                            var formElement = formElementArray[i];
                            formData.form.elements[formElement.get('name')] = self.extractFormElementInfo(
                                formElement, false);
                        }
                    }
                    var app = self.container.lookup('application:main');
                    Ember.$.ajax({
                        type: 'POST',
                        contentType: 'application/json',
                        url: app.HOPPER_DATA_URL,
                        data: formData,
                        beforeSend: function (request) {
                            for (var heading in app.HOPPER_EXTRA_HEADERS) {
                                request.setRequestHeader(heading, app.HOPPER_EXTRA_HEADERS[heading]);
                            }
                        }
                    }).done(function () {
                        Ember.$('#saveModal').foundation('reveal', 'open');
                    }).fail(function (error) {
                        console.error('Something went wrong!');
                        console.error(error.status + ': ' + error.statusText);
                    });
                }

            );
        }
    }
});
