import DS from 'ember-data';

var Form = DS.Model.extend({
    title: DS.attr('string'),
    formElements: DS.hasMany('formElements', { async: true })
});

Form.reopenClass({
    FIXTURES: [
        { id: "1", title: 'My awesome Movie', formElements: [1, 2]}
    ]
});

export default Form;
