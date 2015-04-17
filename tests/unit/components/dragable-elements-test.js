import Ember from 'ember';
import {
  moduleForComponent,
  test
} from 'ember-qunit';

var fakeObject = Ember.Object.extend({
  formElements: [],

  removeObjects: function(objects) {
    this.set('formElements', []);
  },
  toArray: function() {
    return this.get('formElements');
  },
  save: function() {},
});

var fakeStore = function() {
  var store = {
    objects: {},
    find: function(type, name) {
      if (typeof(this.objects[name]) === 'undefined') {
        return new Ember.RSVP.Promise(function(resolve, reject) {
          var obj = new fakeObject();
          store.objects[name] = obj;
          resolve(obj);
        });
      } else {
        return new Ember.RSVP.Promise(function(resolve, reject) {
          resolve(store.objects[name]);
        });
      }
    }
  };
  return store;
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

test('updateElement', function(assert) {
  assert.expect(4);
  var component = this.subject();
  component.store = fakeStore();
  var order = {
    "title": {
      "type": "input",
      "label": "Title",
      "weight": 1,
      "formElements": {
        "subtitle": {
          "type": "input",
          "label": "Subtitle",
          "weight": 2
        }
      }

    },
  };
  var obj = new fakeObject();
  obj.set('weight', 0);
  component.store.objects['title'] = obj;
  assert.equal(component.store.objects['title'].get('weight'), 0);
  assert.equal(component.store.objects['title'].get('formElements').length, 0);

  component.updateElement(order, 'title');
  var done1 = assert.async();
  setTimeout(function(){
    assert.equal(component.store.objects['title'].get('weight'), 1);
    assert.equal(component.store.objects['title'].get('formElements').length, 1);
    done1();
  }, 100);
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
