import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:form', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  var route = this.subject();
  assert.ok(route);
});

test('route model', function (assert) {
  assert.expect(3);
  var route = this.subject();

  // stubbing the store object
  route.store = {
    find: function(model, formId) {
      assert.equal(model, 'form');
      return {id: formId};
    },
    peekAll: function(model) {
      assert.equal(model, 'form');
      return [{id: 'fixture-0'}];
    }
  };
  assert.equal(route.model().id, 'fixture-0');
});
