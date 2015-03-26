import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('form', {
  // Specify the other units that are required for this test.
  needs: ['model:formElement']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
