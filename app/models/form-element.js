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

    elementTypeNames: {
        'fieldset': 'Fieldset',
        'input': 'Charfield',
        'textarea': 'Textfield',
        'select': 'Select',
        'radio': 'Radiobuttons',
        'multiselect': 'Multiselect',
        'checkbox': 'Checkboxfield',
        'date': 'Datefield',
        'datetime': 'Datetimefield',
        'file': 'Uploadfield',
        'integer': 'Integerfield',
        'mail': 'Mailfield',
        'url': 'Urlfield',
        'password': 'Passwordfield',
        'hidden': 'Hiddenfield',
    },

    name: function() {
        var name = '';
        if (typeof(this.get('label')) !== 'undefined') {
            name = this.get('label').toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
        }
        return name;
    }.property('label'),
    getElementTypeDisplay: function() {
        return this.elementTypeNames[this.get('elementType')];
    }.property('elementType'),
});

FormElement.reopenClass({FIXTURES: []});

export default FormElement;
