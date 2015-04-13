import DS from 'ember-data';


var FormElement = DS.Model.extend({
    label: DS.attr('string'),
    immutable: DS.attr('boolean'),
    required: DS.attr('boolean'),
    elementType: DS.attr('string'),
    weight: DS.attr('number'),
    formElements: DS.hasMany('formElement', { async: true }),
    placeholder: DS.attr('string'),
    description: DS.attr('string'),
    values: DS.attr('string'),
    maxlength: DS.attr('number'),
    default: DS.attr('string'),
    checked: DS.attr('boolean'),

    name: function() {
        var name = '';
        if (typeof(this.get('label')) !== 'undefined') {
            name = this.get('label').toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
        }
        return name;
    }.property('label')
});

FormElement.reopenClass({FIXTURES: []});

export default FormElement;
