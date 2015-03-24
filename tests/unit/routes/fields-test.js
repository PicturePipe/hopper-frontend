import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:fields', {
  // Specify the other units that are required for this test.
  // needs: ['model:formElement']
});

test('it exists', function(assert) {
  var route = this.subject();
  assert.ok(route);
});

test('route model', function (assert) {
  assert.expect(2);
  var route = this.subject();

  // stubbing the store object
  route.store = {
    find: function(model, formId){
      assert.equal(model, 'form');
      return {id: formId};
    }
  };

  assert.equal(route.model().id, 1);
});
