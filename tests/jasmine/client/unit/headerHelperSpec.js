describe("Header helpers", function () {

    // it("should return a value from the settings to the template", function () {

    //     // SETUP
    //     var expectedValue = '/images/no-frills-book-cover.jpg';
    //     Meteor.settings.public.book.header.imageSrc = expectedValue;

    //     // EXECUTE
    //     var actualValue = Template.header.__helpers.get('imageSrc');

    //     // VERIFY
    //     expect(actualValue).toBe(expectedValue);
    // });

    it("should put the image source from Meteor settings object in the template", function () {

        // SETUP
        var expectedValue = Meteor.settings.public.book.header.imageSrc;

        // EXECUTE
        var actualValue = $('header figure img').attr('src');

        // VERIFY
        expect(actualValue).toBe(expectedValue);
    });

    it("should return the image source from Meteor settings", function () {

        // SETUP
        var expectedValue = Meteor.settings.public.book.header.imageSrc;

        // EXECUTE
        var actualValue = Template.header.__helpers.get('imageSrc');

        // VERIFY
        expect(actualValue).toBe(expectedValue);
    });

});