import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement: function() {
        var self = this;
        var hopperOutlet = this.$().closest('.hopper-outlet');
        hopperOutlet.find('.sub-elements').sortable({
            connectWith: ".sub-elements",
            cursor: "move",
            cancel: "input,a",
            delay: 150,
            forceHelperSize: true,
            forcePlaceholderSize: true,
            toleranceType: "pointer",
            update: function() {
                var order = {};
                Ember.$('.field').each(function(index) {
                    var element = Ember.$(this);
                    var parentNode = element.parents().eq(3);
                    if (parentNode.hasClass('hopper-outlet')) {
                        order[element.data('id')] = {
                            weight: index,
                            formElements: {}
                        };
                    } else {
                        order[parentNode.data('id')].formElements[element.data('id')] = {
                            weight: index,
                            formElements: {}
                        };
                    }
                });
                self.updateElementsOrder(order);
                self.rerender();
            }
        });
    },

    updateElement: function(order, elementId) {
        var element_information = order[elementId];
        this.store.find('formElement', elementId).then(function(element) {
            element.set('weight', element_information.weight);
            element.save();
        });
    },

    removeFormElements: function(obj) {
        // remove all formElements from the given object
        var formElements = obj.get('formElements').toArray();
        obj.get('formElements').removeObjects(formElements);
        obj.save();
    },

    addToFormElements: function(elementId, addTo) {
        this.store.find('formElement', elementId).then(function(formElement) {
            addTo.get('formElements').pushObject(formElement);
        });
    },

    updateElementsOrder: function(order) {
        // will be replaced with actual call later
        var form = this.store.find('form', 1);
        form.then(this.removeFormElements);

        for (var elementId in order) {
            this.updateElement(order, elementId);
            this.addToFormElements(elementId, form);
        }

    }

});
