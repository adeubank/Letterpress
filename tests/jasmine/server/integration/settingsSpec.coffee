Jasmine.onTest ->
    describe 'The settings checker', ->

        _actualCode = null
        _processExit = null

        beforeEach ->
            _actualCode = null
            _processExit = process.exit
            process.exit = (code) ->
                _actualCode = code

        afterEach ->
            process.exit = _processExit

        it 'exits the system if the book title is not set', ->

            # SETUP
            Meteor.settings = {}

            # EXECUTE
            @App.checkSettings()

            # VERIFY
            expect(_actualCode).toBe(1)

        it 'does not exit the system if the book title is set', ->

            # SETUP
            Meteor.settings = { public: { book: { title: 'Is Set' } } }

            # EXECUTE
            @App.checkSettings()

            # VERIFY
            expect(_actualCode).toBe(null)