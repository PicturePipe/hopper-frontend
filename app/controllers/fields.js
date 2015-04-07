import Ember from 'ember';

export default Ember.Controller.extend({

    updateElements: function(order, element_id) {
        var element_information = order[element_id];
        var self = this;
        self.store.find('formElement', element_id).then(function(element) {
            // set new weight
            element.set('weight', element_information.weight);
            var formElements = element.get('formElements');
            // remove old elements
            formElements.forEach(function(formElement){
                formElements.removeObject(formElement);
            });
            // set and modify sub elements
            for (var subElementId in element_information.formElements) {
                var subElement = self.store.find('formElement', subElementId);
                console.log(subElement);
                //formElements.addObject(subElement);
                self.updateElements(element_information.formElements, subElementId);
            }
        });
    },

    actions: {
        updateElementsOrder: function(order) {
            for (var element_id in order) {
                this.updateElements(order, element_id);
                //this.model.set('formElements', Object.keys(order));
            }
        }
    }
});
