import {
  moduleForComponent,
  test
} from 'ember-qunit';

var findOrAllFake = function () {
  return {
    get: function() {
      return this;
    },
    addObject: function() {
      this.length++;
    },
    length: 1,
  };
},

targetObjectFake = {
  store: {
    find: findOrAllFake,
    createRecord: function () {
      return {save: function() {}};
    },
    all: findOrAllFake,
  }
};

var fakeController = function(route) {
  var obj = {};
  obj.currentRouteName = route || 'fields';
  obj.transitionToRoute = function (route) {
    this.currentRouteName = route;
  };
  return obj;
};

moduleForComponent('hopper-frontend', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
  needs: [
    'component:edit-title-input',
    'component:element-drawer'
  ]
});

test('toggleIsElementDrawerOpen action', function(assert) {
  assert.expect(3);

  // create component instance
  var component = this.subject();
  assert.equal(component.isElementDrawerOpen, false);

  component.send('toggleIsElementDrawerOpen');
  assert.equal(component.isElementDrawerOpen, true);

  component.send('toggleIsElementDrawerOpen');
  assert.equal(component.isElementDrawerOpen, false);
});

test('editTitle action', function(assert) {
  assert.expect(2);

  var component = this.subject();
  assert.equal(component.isTitleBeingEdited, false);

  component.send('editTitle');
  assert.equal(component.isTitleBeingEdited, true);

});

test('acceptTitleChange action', function(assert) {
  assert.expect(2);

  var component = this.subject();
  component.set('isTitleBeingEdited', true);
  assert.equal(component.isTitleBeingEdited, true);

  component.send('acceptTitleChange');
  assert.equal(component.isTitleBeingEdited, false);

});

test('addFormElement action', function(assert) {
  assert.expect(2);

  var component = this.subject();
  component.set('targetObject', targetObjectFake);
  this.render();

  assert.equal(component.get('form').get('formElements').length, 1);

  component.send('addFormElement', 'TestField');
  assert.equal(component.get('form').get('formElements').length, 2);
});

test('css change #hopper-element-drawer after toggleIsElementDrawerOpen', function(assert) {
  assert.expect(4);

  var component = this.subject();
  component.set('targetObject', targetObjectFake);

  // append the component to the DOM
  this.render();
  var $component = component.$();

  // assert default state
  assert.ok($component.find('#hopper-element-drawer').hasClass('medium-1'));
  assert.ok(!$component.find('#hopper-element-drawer').hasClass('medium-3'));

  // click element-drawer-control
  $component.find('.element-drawer-control').click();

  // assert switched state
  assert.ok(!$component.find('#hopper-element-drawer').hasClass('medium-1'));
  assert.ok($component.find('#hopper-element-drawer').hasClass('medium-3'));
});

test('css change #hopper-first-col after toggleIsElementDrawerOpen', function(assert) {
  assert.expect(4);

  var component = this.subject();
  component.set('targetObject', targetObjectFake);

  // append the component to the DOM
  this.render();
  var $component = component.$();

  // assert default state
  assert.ok($component.find('#hopper-first-col').hasClass('medium-15'));
  assert.ok(!$component.find('#hopper-first-col').hasClass('medium-13'));

  // click element-drawer-control
  $component.find('.element-drawer-control').click();

  // assert switched state
  assert.ok(!$component.find('#hopper-first-col').hasClass('medium-15'));
  assert.ok($component.find('#hopper-first-col').hasClass('medium-13'));
});

test('css change #toggl-element-drawer-icon after toggleIsElementDrawerOpen', function(assert) {
  assert.expect(4);

  var component = this.subject();
  component.set('targetObject', targetObjectFake);

  // append the component to the DOM
  this.render();
  var $component = component.$();
  // assert default state
  assert.ok($component.find('#toggl-element-drawer-icon').hasClass('fa-caret-left'));
  assert.ok(!$component.find('#toggl-element-drawer-icon').hasClass('fa-caret-right'));

  // click element-drawer-control
  $component.find('.element-drawer-control').click();

  // assert switched state
  assert.ok(!$component.find('#toggl-element-drawer-icon').hasClass('fa-caret-left'));
  assert.ok($component.find('#toggl-element-drawer-icon').hasClass('fa-caret-right'));
});

test('css change .available-fields after toggleIsElementDrawerOpen', function(assert) {
  assert.expect(2);

  var component = this.subject();
  component.set('targetObject', targetObjectFake);

  // append the component to the DOM
  this.render();
  var $component = component.$();

  // assert default state
  assert.ok(!$component.find('.available-fields').hasClass('open'));

  // click element-drawer-control
  $component.find('.element-drawer-control').click();

  // assert switched state
  assert.ok($component.find('.available-fields').hasClass('open'));
});

test('add and remove input', function(assert) {
  assert.expect(4);

  var component = this.subject();
  component.set('targetObject', targetObjectFake);

  this.render();
  var $component = component.$();

  assert.ok($component.find('.form-title > h1').length);
  assert.ok(!$component.find('.form-title > input').length);

  $component.find('.form-title > h1').dblclick();

  assert.ok(!$component.find('.form-title > h1').length);
  assert.ok($component.find('.form-title > input').length);
});

test('startHelp action closing element-drawer', function(assert) {
  assert.expect(2);
  var component = this.subject();
  component.set('currentController', fakeController());
  component.set('isElementDrawerOpen', true);
  assert.equal(component.get('isElementDrawerOpen'), true);

  component.send('startHelp');
  assert.equal(component.get('isElementDrawerOpen'), false);
});

test('startHelp action transition to route', function(assert) {
  assert.expect(2);
  var component = this.subject();
  var controler = fakeController('form');
  component.set('currentController', controler);
  assert.equal(controler.currentRouteName, 'form');

  component.send('startHelp');
  assert.equal(controler.currentRouteName, 'fields');
});

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  component.set('targetObject', targetObjectFake);

  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});
