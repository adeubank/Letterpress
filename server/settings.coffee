@App =
    checkSettings: ->
        try
            check Meteor.settings, Match.ObjectIncluding
                public: Match.ObjectIncluding
                    book: Match.ObjectIncluding
                        title: String
        catch e
            process.exit(1)