import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement: function() {
        var hopperOutlet = this.$().closest('.hopper-outlet');
        hopperOutlet.find('.sub-elements').sortable({
            connectWith: ".sub-elements",
            cursor: "move",
            cancel: ".widget-content, .btn",
            delay: 150,
            forceHelperSize: true,
            forcePlaceholderSize: true,
            toleranceType: "pointer"
        });
    }
});
