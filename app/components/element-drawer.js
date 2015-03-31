import Ember from 'ember';

export default Ember.Component.extend({
    fields: [
        'Fieldset',
        'Charfield',
        'Textfield',
        'Select',
        'Radiobuttons',
        'Multiselect',
        'Datefield',
        'Datetimefield',
        'Uploadfield',
        'Integerfield',
        'Mailfield',
        'Urlfield',
        'Passwordfield',
        'Hiddenfield',
    ],

    actions: {
        addFormElement: function(field) {
            this.sendAction('addFormElement', field);
        }
    }

});
