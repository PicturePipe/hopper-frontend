import FixtureAdapter from 'ember-data-fixture-adapter';

export default FixtureAdapter.extend({
    'shouldBackgroundReloadRecord': function () {
        return false;
    }
});
