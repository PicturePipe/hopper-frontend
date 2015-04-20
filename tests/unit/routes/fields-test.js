import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:fields', {
  // Specify the other units that are required for this test.
  // needs: ['model:formElement']
});

var elementInformation = {
  "testfieldset": {
    "type": "fieldset",
    "label": "TestFieldset",
    "immutable": false,
    "elements": {
      "testchoice": {
        "label": "TestChoice",
        "type": "radio",
        "choices": ["Choice1", "Choice2"],
        "immutable": false,
        "readonly": false,
        "required": true,
        "weight": 3
      },
    }
  }
};

var fakeStore = function() {
  return {
    createRecord: function() {
      return fakeElement();
    }
  };
};

var fakeElement = function() {
  return {
    formElements: [],
    get: function() {
      return this.formElements;
    }
  };
};

test('it exists', function(assert) {
  var route = this.subject();
  assert.ok(route);
});

test('createFormElements', function(assert) {
  assert.expect(4);
  var route = this.subject();
  route.store = fakeStore();
  var testElement = fakeElement();
  assert.equal(testElement.formElements.length, 0);
  route.createFormElements(testElement, elementInformation);
  assert.equal(testElement.formElements.length, 1);
  var subElement1 = testElement.formElements[0];
  assert.equal(subElement1.formElements.length, 1);
  var subElement2 = subElement1.formElements[0];
  assert.equal(subElement2.formElements.length, 0);
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
    all: function(model) {
      assert.equal(model, 'form');
      return [{id: 'fixture-0'}];
    }
  };
  assert.equal(route.model().id, 'fixture-0');
});
