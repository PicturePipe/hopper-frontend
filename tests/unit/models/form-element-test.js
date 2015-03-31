import Ember from 'ember';
import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('form-element', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('name property', function(assert) {
  assert.expect(1);
  var model = this.subject();
  Ember.run(function() {
    model.set('label', 'My Test!');
    assert.equal(model.get('name'), 'my-test');
  });
});
