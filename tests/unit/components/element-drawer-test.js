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

test('addField action', function(assert) {
  // make sure, the component bubbles up the addField action to the next
  // component
  assert.expect(2);
  var fieldname = 'Fieldname';
  var sendActionStub = function(actionName, args) {
    assert.equal(actionName, 'addField');
    assert.equal(args, fieldname);
  };

  var component = this.subject();
  component.sendAction = sendActionStub;
  component.send('addField', fieldname);
});
