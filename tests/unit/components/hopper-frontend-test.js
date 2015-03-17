import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('hopper-frontend', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('toggleIsSidenavOpen', function(assert) {
  assert.expect(3);

  // create component instance
  var component = this.subject();
  assert.equal(component.isSidenavOpen, false);

  component.send('toggleIsSidenavOpen');
  assert.equal(component.isSidenavOpen, true);

  component.send('toggleIsSidenavOpen');
  assert.equal(component.isSidenavOpen, false);
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
