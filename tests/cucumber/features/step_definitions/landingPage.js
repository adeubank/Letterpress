var assert = require('assert');

module.exports = function () {

  var helper = this;

  this.Given(/^The setting with key "([^"]*)" and value "([^"]*)"/, function (key, value, callback) {
    // Throws an exception if Meteor.settings is not defined, or if requested setting is missing
    function _getPublicMeteorSettingForKey (key) {
      function getValueByKey (o, k) { return o[k]; }
      return key.split(".").reduce(getValueByKey, Meteor.settings);
    }

    try {
      var publicMeteorSettingForKey = _getPublicMeteorSettingForKey(key);
      assert.equal(publicMeteorSettingForKey, value);
      callback();
    } catch (e) {
      callback.fail(e.message);
    }
  });

  this.Given(/^I am a new visitor$/, function (callback) {
    callback();
  });

  this.When(/^I navigate to the landing page$/, function (callback) {
    helper.world.browser.
      url(helper.world.mirrorUrl).
      call(callback);
  });

  this.Then(/^I see the heading "([^"]*)"$/, function (arg1, callback) {
    helper.world.browser.
      getText('h1', function (error, actualHeading) {
        assert.equal(actualHeading, Meteor.settings.public.book.title);
        callback();
      });
  });
};
