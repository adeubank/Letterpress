describe 'The settings checker', ->

    # hold on to the methods overridden here
    _check = null
    _processExit = null
    _consoleError = null

    # array to keep hold of the console.error messages
    _msgs = null

    beforeEach ->
        _msgs = []

        # hold onto the check method
        _check = check

        # stub the exit method to do nothing in this test case
        _processExit = process.exit
        process.exit ->

        # since we're asserting on the console, we'll need to keep hold of the messages
        _consoleError = console.error
        console.error = (msg) ->
            _msgs.push(msg)


    afterEach ->
        # restore the original console and exit functions
        check = _check
        console.error = _consoleError
        process.exit = _processExit

    it 'displays an error to the user if the check fails', ->

        expectedErrorMsg = '* * * An error message * * *'

        # SETUP
        check = ->
            throw new Error(expectedErrorMsg)

        # EXECUTE
        @App.checkSettings()

        # VERIFY
        expect(_msgs[0]).toBe(expectedErrorMsg)

    it 'does not display an error to the user if the check passes', ->

        # SETUP
        check = ->

        # EXECUTE
        @App.checkSettings()

        # VERIFY
        expect(_msgs.length).toBe(0)
