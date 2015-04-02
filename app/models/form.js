import DS from 'ember-data';
import FormElementsMixin from 'hopper-frontend/mixins/form-elements-mixin';


var Form = DS.Model.extend(FormElementsMixin, {
    title: DS.attr('string'),
    formElements: DS.hasMany('formElements', { async: true }),
    action: DS.attr('string'),
    method: DS.attr('string'),
    enctype: DS.attr('string'),
    formClasses: DS.attr('string'),
    fieldClasses: DS.attr('string'),

    possibleMethods: ['GET', 'POST'],

});

Form.reopenClass({
    FIXTURES: [
        { id: "1", title: 'My awesome Movie', formElements: [1]}
    ]
});

export default Form;
