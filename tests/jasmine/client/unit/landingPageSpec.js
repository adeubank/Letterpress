describe("The global helper", function () {

    // it("Should provide a value to the template", function () {

    //     // SETUP
    //     var expectedTitle = 'The Joy of Eating Pistachios';
    //     Meteor.settings.public.book.title = expectedTitle;

    //     // EXECUTE
    //     var actualTitle = UI._globalHelpers.bookTitle();

    //     // VERIFY
    //     expect(actualTitle).toBe(expectedTitle);
    // });

    it("should return the book title from Meteor settings", function () {

        // SETUP
        var expectedTitle = Meteor.settings.public.book.title;

        // EXECUTE
        var actualTitle = $('h1').text();

        // VERIFY
        expect(actualTitle).toBe(expectedTitle);
    });

    it("should return the book title from Meteor settings object", function () {

        // SETUP
        var expectedTitle = Meteor.settings.public.book.title;

        // EXECUTE
        var actualTitle = UI._globalHelpers.bookTitle();

        // VERIFY
        expect(actualTitle).toBe(expectedTitle);
    });


});