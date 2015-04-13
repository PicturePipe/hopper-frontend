import DS from 'ember-data';

var Form = DS.Model.extend({
    title: DS.attr('string'),
    formElements: DS.hasMany('formElements', { async: true }),
    action: DS.attr('string'),
    method: DS.attr('string'),
    enctype: DS.attr('string'),
    formClasses: DS.attr('string'),
    fieldClasses: DS.attr('string'),

    possibleMethods: ['GET', 'POST'],

});

Form.reopenClass({FIXTURES: []});

export default Form;
