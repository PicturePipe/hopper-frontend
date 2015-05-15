import Ember from 'ember';

export default Ember.Component.extend({
    fields: [
        {title: 'Fieldset', field_name: 'Fieldset'},
        {title: 'Charfield', field_name: 'Charfield'},
        {title: 'Textfield', field_name: 'Textfield'},
        {title: 'Select', field_name: 'Select'},
        {title: 'Radiobuttons', field_name: 'Radiobuttons'},
        {title: 'Multiselect', field_name: 'Multiselect'},
        {title: 'Checkboxfield', field_name: 'Checkboxfield'},
        {title: 'Datefield', field_name: 'Datefield'},
        {title: 'Datetimefield', field_name: 'Datetimefield'},
        {title: 'Uploadfield', field_name: 'Uploadfield'},
        {title: 'Integerfield', field_name: 'Integerfield'},
        {title: 'Mailfield', field_name: 'Mailfield'},
        {title: 'Urlfield', field_name: 'Urlfield'},
        {title: 'Passwordfield', field_name: 'Passwordfield'},
        {title: 'Hiddenfield', field_name: 'Hiddenfield'},
    ],

    actions: {
        addFormElement: function(field) {
            this.sendAction('addFormElement', field.field_name);
        }
    }

});
