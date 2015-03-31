import DS from 'ember-data';


var FormElement = DS.Model.extend({
    label: DS.attr('string'),
    immutable: DS.attr('bool'),
    required: DS.attr('required'),
    elementType: DS.attr('string'),
    weight: DS.attr('integer'),
    formElements: DS.hasMany('formElement', { async: true }),
    placeholder: DS.attr('string'),
    description: DS.attr('string'),
    values: DS.attr('string'),
    maxlength: DS.attr('integer'),
    default: DS.attr('string'),
    checked: DS.attr('bool'),

    name: function() {
        var name = '';
        if (typeof(this.get('label')) !== 'undefined') {
            name = this.get('label').toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
        }
        return name;
    }.property('label')
});

FormElement.reopenClass({
    FIXTURES: [
        { id: "1", label: 'Director', immutable: true, elementType: 'fieldset', formElements: [2, 3]},
        { id: "2", label: 'First Name', required: false, immutable: true, elementType: 'Charfield'},
        { id: "3", label: 'Last Name', required: true, immutable: false, elementType: 'Charfield'},
    ]
});

export default FormElement;
