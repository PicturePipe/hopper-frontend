import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement: function() {
        var self = this;
        var hopperOutlet = this.$().closest('.hopper-outlet');
        hopperOutlet.find('.sub-elements').sortable({
            connectWith: ".sub-elements",
            cursor: "move",
            cancel: "input,textarea,a",
            delay: 150,
            forceHelperSize: true,
            forcePlaceholderSize: true,
            toleranceType: "pointer",
            update: function(event, ui) {
                if (ui.item.find('.field').hasClass('fieldset') &&
                        ui.item.parents().eq(2).hasClass('fieldset')) {
                    hopperOutlet.find('.sub-elements').sortable('cancel');
                    Ember.$('#fieldsetWarning').foundation('reveal', 'open');
                }
                var order = {};
                Ember.$('.field').each(function(index) {
                    var element = Ember.$(this);
                    var parentNode = element.parents().eq(3);
                    /* .parents() returns all elements upwards till the root
                     * node, starting with the current one. The element 0 is
                     * the current one. 1 is the div.sub-element we are using
                     * to connect with. 2 is a div, added by ember.
                     * To get the hopper-outlet or the parent element we have
                     * to use the 3.
                     */
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
        var self = this;
        var element_information = order[elementId];
        self.store.find('formElement', elementId).then(function(element) {
            element.set('weight', element_information.weight);
            self.removeFormElements(element);
            for (var elementId in element_information.formElements) {
                self.updateElement(element_information.formElements, elementId);
                self.addToFormElements(elementId, element);
            }
            element.save();
        });
    },

    removeFormElements: function(obj) {
        // remove all formElements from the given object
        var formElements = obj.get('formElements').toArray();
        obj.get('formElements').removeObjects(formElements);
    },

    addToFormElements: function(elementId, parent) {
        this.store.find('formElement', elementId).then(function(formElement) {
            parent.get('formElements').pushObject(formElement);
        });
    },

    updateElementsOrder: function(order) {
        // will be replaced with actual call later
        var form = this.store.find('form', 'fixture-0');
        form.then(this.removeFormElements);

        for (var elementId in order) {
            this.updateElement(order, elementId);
            this.addToFormElements(elementId, form);
        }
    }
});
