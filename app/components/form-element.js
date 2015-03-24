import Ember from 'ember';

export default Ember.Component.extend({
  _isEditing: false,

  isEditing: function() {
      return this.get('_isEditing');
  }.property('_isEditing'),

  didInsertElement: function() {
    // While inserting a new formElement, it's label will be "" and
    // we want to edit it. A computet property, looking for _isEditing
    // and formElement.label would not work, because during render
    // time of the page the formElement.label would be undefined.
    if (this.get('formElement.label') === "") {
      this.set('_isEditing', true);
    }
  },

  actions: {
    togglIsEditing: function() {
        this.toggleProperty('_isEditing');
    },
  }

});
