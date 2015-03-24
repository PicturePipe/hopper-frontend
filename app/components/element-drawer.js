import Ember from 'ember';

export default Ember.Component.extend({
    fields: [
        'Fieldset',
        'Charfield',
        'Textfield',
        'Select',
        'Multiselect',
        'Datefield',
        'Datetimefield',
        'Filefieled',
        'Imagefield',
        'Integerfield',
        'Mailfield',
        'Urlfield',
        'Passwordfield',
        'Hiddenfield',
    ],

    actions: {
        addField: function(field) {
            this.sendAction('addField', field);
        }
    }

});
