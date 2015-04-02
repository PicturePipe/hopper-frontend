import Ember from 'ember';

export default Ember.Mixin.create({
    getFormElements: (function() {
        return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
            sortProperties: ['weight'],
            content: this.get('formElements')
        });
    }).property('formElements')
});
