import Ember from 'ember';
import FormElementsMixin from '../../../mixins/form-elements-mixin';
import { module, test } from 'qunit';

module('FormElementsMixinMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var FormElementsMixinObject = Ember.Object.extend(FormElementsMixin);
  var subject = FormElementsMixinObject.create();
  assert.ok(subject);
});
