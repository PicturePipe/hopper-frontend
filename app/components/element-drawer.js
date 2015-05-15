import Ember from 'ember';

export default Ember.Component.extend({
    fields: [
        {title: 'Fieldset', field_name: 'fieldset'},
        {title: 'Charfield', field_name: 'input'},
        {title: 'Textfield', field_name: 'textarea'},
        {title: 'Select', field_name: 'select'},
        {title: 'Radiobuttons', field_name: 'radio'},
        {title: 'Checkboxfield', field_name: 'checkbox'},
        {title: 'Datefield', field_name: 'date'},
        {title: 'Datetimefield', field_name: 'datetime'},
        {title: 'Uploadfield', field_name: 'file'},
        {title: 'Integerfield', field_name: 'integer'},
        {title: 'Mailfield', field_name: 'mail'},
        {title: 'Urlfield', field_name: 'url'},
        {title: 'Passwordfield', field_name: 'password'},
        {title: 'Hiddenfield', field_name: 'hidden'},
    ],

    actions: {
        addFormElement: function(field) {
            this.sendAction('addFormElement', field.field_name);
        }
    }

});
