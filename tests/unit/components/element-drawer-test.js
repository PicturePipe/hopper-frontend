import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('element-drawer', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
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

test('addFormElement action', function(assert) {
  // make sure, the component bubbles up the addFormElement action to the next
  // component
  assert.expect(2);
  var fieldname = {field_name: 'Fieldname'};
  var sendActionStub = function(actionName, args) {
    assert.equal(actionName, 'addFormElement');
    assert.equal(args, fieldname.field_name);
  };

  var component = this.subject();
  component.sendAction = sendActionStub;
  component.send('addFormElement', fieldname);
});
