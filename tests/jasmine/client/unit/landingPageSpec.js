describe("The global helper", function () {
    it("Should provide a value to the template", function () {

        // SETUP
        var expectedTitle = 'The Joy of Eating Pistachios';
        Meteor.settings.public.book.title = expectedTitle;

        // EXECUTE
        var actualTitle = UI._globalHelpers.bookTitle();

        // VERIFY
        expect(actualTitle).toBe(expectedTitle);
    });
});