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
            }
        });
    },

    updateElement: function(order, element_id) {
        var element_information = order[element_id];
        var self = this;
        self.store.find('formElement', element_id).then(function(element) {
            console.log(element.get('label'));
            element.set('weight', element_information.weight);
            element.save();
        });
    },

    updateElementsOrder: function(order) {
        for (var element_id in order) {
            this.updateElement(order, element_id);
        }
        this.rerender();
    }

});
