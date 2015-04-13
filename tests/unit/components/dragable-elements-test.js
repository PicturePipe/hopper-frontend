import Ember from 'ember';
import {
  moduleForComponent,
  test
} from 'ember-qunit';

var fakeObject = Ember.Object.extend({
  removeObjects: function(objects) {
    this.set('formElements', []);
  },
});

var fakeStore = function() {
  return {
    find: function() {
      return new Ember.RSVP.Promise(function(resolve, reject) {
        resolve('Batz');
      });
    }
  };
};

moduleForComponent('dragable-elements', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('removeFormElements', function(assert) {
  assert.expect(2);
  var component = this.subject();
  var obj = fakeObject.create();
  var formElements = new Array('Foo', 'Bar');
  obj.set('formElements', formElements);
  assert.equal(obj.get('formElements').length, 2);
  component.removeFormElements(obj);
  assert.equal(obj.get('formElements').length, 0);
});

test('addToFormElements', function(assert) {
  assert.expect(2);
  var component = this.subject();
  component.store = fakeStore();
  var obj = fakeObject.create();
  var elements = new Array('Foo', 'Bar');
  obj.set('formElements', elements);
  assert.equal(obj.get('formElements').length, 2);
  component.addToFormElements('Batz', obj);
  // Fix this test later.
  // There is a problem with testing promises at the moment.
  var done = assert.async();
  setTimeout(
    function() {
      assert.equal(obj.get('formElements').length, 3);
      done();
    },
    500
  );
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
