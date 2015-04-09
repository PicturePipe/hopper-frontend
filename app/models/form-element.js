import DS from 'ember-data';
import FormElementsMixin from 'hopper-frontend/mixins/form-elements-mixin';


var FormElement = DS.Model.extend(FormElementsMixin, {
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

FormElement.reopenClass({
    FIXTURES: [
        { id: "1", label: 'Last Name', required: true, immutable: false, elementType: 'Charfield', weight: 1},
        { id: "2", label: 'First Name', required: false, immutable: true, elementType: 'Charfield', weight: 0},
    ]
});

export default FormElement;
