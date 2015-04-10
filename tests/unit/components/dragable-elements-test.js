import Ember from 'ember';
import {
  moduleForComponent,
  test
} from 'ember-qunit';

var fakeFormElements = ['Foo', 'Bar'];

var fakeObject = Ember.Object.extend({
  formElements: ['Foo', 'Bar'],
  removeObjects: function(objects) {
    this.set('formElements', []);
  },
});



moduleForComponent('dragable-elements', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('removeFormElements', function(assert) {
  assert.expect(2);
  var component = this.subject();
  var obj = fakeObject.create();
  assert.equal(obj.get('formElements').length, 2);
  component.removeFormElements(obj);
  assert.equal(obj.get('formElements').length, 0);
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});
