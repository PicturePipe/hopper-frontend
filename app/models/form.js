import DS from 'ember-data';

var Form = DS.Model.extend({
    title: DS.attr('string'),
});

Form.reopenClass({
    FIXTURES: [
        { id: "1", title: 'My awesome Movie', }
    ]
});

export default Form;
