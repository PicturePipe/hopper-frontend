import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('hopper-frontend', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('toggleIsSidenavOpen action', function(assert) {
  assert.expect(3);

  // create component instance
  var component = this.subject();
  assert.equal(component.isSidenavOpen, false);

  component.send('toggleIsSidenavOpen');
  assert.equal(component.isSidenavOpen, true);

  component.send('toggleIsSidenavOpen');
  assert.equal(component.isSidenavOpen, false);
});

test('css change #hopper-sidenav after toggleIsSidenavOpen', function(assert) {
  assert.expect(4);

  var component = this.subject();

  // append the component to the DOM
  var $component = this.append();

  // assert default state
  assert.ok($component.find('#hopper-sidenav').hasClass('medium-1'));
  assert.ok(!$component.find('#hopper-sidenav').hasClass('medium-3'));

  // click sidenav-control
  $component.find('.sidenav-control').click();

  // assert switched state
  assert.ok(!$component.find('#hopper-sidenav').hasClass('medium-1'));
  assert.ok($component.find('#hopper-sidenav').hasClass('medium-3'));
});

test('css change #hopper-first-col after toggleIsSidenavOpen', function(assert) {
  assert.expect(4);

  var component = this.subject();

  // append the component to the DOM
  var $component = this.append();

  // assert default state
  assert.ok($component.find('#hopper-first-col').hasClass('medium-15'));
  assert.ok(!$component.find('#hopper-first-col').hasClass('medium-13'));

  // click sidenav-control
  $component.find('.sidenav-control').click();

  // assert switched state
  assert.ok(!$component.find('#hopper-first-col').hasClass('medium-15'));
  assert.ok($component.find('#hopper-first-col').hasClass('medium-13'));
});

test('css change #toggl-sidenav-icon after toggleIsSidenavOpen', function(assert) {
  assert.expect(4);

  var component = this.subject();

  // append the component to the DOM
  var $component = this.append();
  // assert default state
  assert.ok($component.find('#toggl-sidenav-icon').hasClass('fa-caret-left'));
  assert.ok(!$component.find('#toggl-sidenav-icon').hasClass('fa-caret-right'));

  // click sidenav-control
  $component.find('.sidenav-control').click();

  // assert switched state
  assert.ok(!$component.find('#toggl-sidenav-icon').hasClass('fa-caret-left'));
  assert.ok($component.find('#toggl-sidenav-icon').hasClass('fa-caret-right'));
});

test('css change .available-fields after toggleIsSidenavOpen', function(assert) {
  assert.expect(2);

  var component = this.subject();

  // append the component to the DOM
  var $component = this.append();

  // assert default state
  assert.ok(!$component.find('.available-fields').hasClass('open'));

  // click sidenav-control
  $component.find('.sidenav-control').click();

  // assert switched state
  assert.ok($component.find('.available-fields').hasClass('open'));
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
