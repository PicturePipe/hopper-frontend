import Ember from 'ember';


export default Ember.Component.extend({
    fields: [
        {title: 'Field-set', field_name: 'fieldset'},
        {title: 'One-line Text', field_name: 'input'},
        {title: 'Multi-line Text', field_name: 'textarea'},
        {title: 'Selection List', field_name: 'select'},
        {title: 'Radio Button', field_name: 'radio'},
        {title: 'Checkbox', field_name: 'checkbox'},
        {title: 'Date', field_name: 'date'},
        {title: 'Date & Time', field_name: 'datetime'},
        {title: 'File Upload', field_name: 'file'},
        {title: 'Number', field_name: 'integer'},
        {title: 'Email', field_name: 'mail'},
        {title: 'URL', field_name: 'url'},
        {title: 'Country', field_name: 'country'},
        {title: 'Password', field_name: 'password'},
        {title: 'Hidden Field', field_name: 'hidden'},
    ],

    actions: {
        addFormElement: function(field) {
            this.sendAction('addFormElement', field.field_name);
        }
    }

});
