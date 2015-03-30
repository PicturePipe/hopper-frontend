import DS from 'ember-data';

var FormElement = DS.Model.extend({
    label: DS.attr('string'),
    immutable: DS.attr('bool'),
    required: DS.attr('required'),
    elementType: DS.attr('string'),
    formElements: DS.hasMany('formElements', { async: true })
});

FormElement.reopenClass({
    FIXTURES: [
        { id: "1", label: 'Director', immutable: true, elementType: 'fieldset', formElements: [2, 3]},
        { id: "2", label: 'First Name', required: false, immutable: true, elementType: 'Charfield'},
        { id: "3", label: 'Last Name', required: true, immutable: false, elementType: 'Charfield'},
    ]
});

export default FormElement;
