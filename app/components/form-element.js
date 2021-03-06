import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: false,
  isLabelEmpty: false,

  formElementTemplate: function() {
    // Set the default templateName to 'charfield', because during loading
    // time, the formElement is not accessible and all of its attributes
    // are 'undefined'.
    var templateName = 'input';
    if (typeof(this.get('formElement.elementType')) !== 'undefined') {
      templateName = this.get('formElement.elementType').toLowerCase();
    }
    return 'components/-form-element-' + templateName;
  }.property('formElement.elementType'),

  didInsertElement: function() {
    // While inserting a new formElement, it's label will be "" and
    // we want to edit it. A computed property, looking for isEditing
    // and formElement.label would not work, because during render
    // time of the page the formElement.label would be undefined.
    if (this.get('formElement.label') === "") {
      this.set('isEditing', true);
    }
  },

  valuesAsList: function() {
    var valuesAsList = [];
    var type = typeof(this.get('formElement.values'));
    var brokenTypes = ['undefined', 'null', 'object'];
    if (brokenTypes.indexOf(type) < 0) {
      valuesAsList = this.get('formElement.values').split('\n');
    }
    return valuesAsList;
  }.property('formElement.values'),

  exampleCountries: ['Germany', 'France', 'Netherlands', 'Austria', 'Schwitzerland',
    'United Kingdom'],

  actions: {
    togglIsEditing: function() {
      if (this.get('formElement.label') === "") {
        if (this.get('isEditing')) {
          this.set('isLabelEmpty', true);
        }
        this.set('isEditing', true);
      } else {
        this.set('isLabelEmpty', false);
        this.toggleProperty('isEditing');
      }
    },
    removeElement: function() {
      var formElement = this.get('formElement');
      formElement.destroyRecord();
    },
  }
});
