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
                self.sendAction('updateElementsOrder', order);
            }
        });
    },
    actions: {
        updateElementsOrder: function(order) {
            this.sendAction('updateElementsOrder', order);
        }
    }
});
