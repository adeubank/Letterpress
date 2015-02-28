Jasmine.onTest ->

    it 'displays an error to the user if the check fails', ->

        _processExit = null
        _consoleError = null
        _msgs = null          # array to keep hold of the console.error messages

        beforeEach ->
            _msgs = []

            # stub the exit method to do nothing in this test case
            _processExit = process.exit
            process.exit ->

            # since we're asserting on the console, we'll need to keep hold of the messages
            _consoleError = console.error
            console.error = (msg) -> _msgs.push(msg)


        afterEach ->
