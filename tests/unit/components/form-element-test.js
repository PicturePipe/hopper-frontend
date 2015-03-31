import resolver from '../../helpers/resolver';
import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('form-element', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
  setup: function() {
    this.container.register('template:components/-form-element-charfield',
    resolver.resolve('template:components/-form-element-charfield'));
  }
});

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('togglIsEditing action', function(assert) {
  assert.expect(3);

  var component = this.subject();
  assert.equal(component.isEditing, false);

  component.send('togglIsEditing');
  assert.equal(component.isEditing, true);

  component.send('togglIsEditing');
  assert.equal(component.isEditing, false);
});

test('valuesAsList property', function(assert) {
  assert.expect(3);
  var component = this.subject();
  component.set('formElement', {values: 'foo\nbar\nbatz'});
  var valuesAsList = component.get('valuesAsList');
  var expectedValues = ['foo', 'bar', 'batz'];
  for (var i = 0; i < valuesAsList.length; i++) {
    assert.equal(valuesAsList[i], expectedValues[i]);
  }
});
