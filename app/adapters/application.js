import DS from 'ember-data';

export default DS.FixtureAdapter.extend({
    'shouldBackgroundReloadRecord': function () {
        return false;
    }
});
