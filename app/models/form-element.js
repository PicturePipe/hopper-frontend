import DS from 'ember-data';

function convertToSlug(text) {
    return text.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
}


var FormElement = DS.Model.extend({
    label: DS.attr('string'),
    immutable: DS.attr('bool'),
    required: DS.attr('required'),
    elementType: DS.attr('string'),

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
