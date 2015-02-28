@App =
    checkSettings: ->
        try
            check Meteor.settings, Match.ObjectIncluding
                public: Match.ObjectIncluding
                    book: Match.ObjectIncluding
                        title: String
        catch (e) ->
            console.error()
            process.exit(1)