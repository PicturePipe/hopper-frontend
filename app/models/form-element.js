import DS from 'ember-data';

function convertToSlug(text) {
    return text.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
}


var FormElement = DS.Model.extend({
    label: DS.attr('string'),
    immutable: DS.attr('bool'),
    required: DS.attr('required'),
    elementType: DS.attr('string'),
    weight: DS.attr('integer'),
    formElements: DS.hasMany('formElement'),
    placeholder: DS.attr('string'),
    description: DS.attr('string'),
    values: DS.attr('string'),
    maxlength: DS.attr('integer'),
    default: DS.attr('string'),
    checked: DS.attr('bool'),

    name: function() {
        var name = '';
        if (typeof(this.get('label')) !== 'undefined') {
            name = convertToSlug(this.get('label'));
        }
        return name;
    }.property('label')
});

FormElement.reopenClass({
    FIXTURES: [
        { id: "1", label: 'First Name', required: false, immutable: true, elementType: 'Charfield'},
        { id: "2", label: 'Last Name', required: true, immutable: false, elementType: 'Charfield'},
    ]
});

export default FormElement;
